<template>
<h5>流体高度</h5>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column fixed prop="date" label="Date" width="150" />
		<el-table-column prop="name" label="Name" width="150" />
		<el-table-column prop="sex" label="sex" width="150" />
		<el-table-column prop="birthday" label="birthday" width="150" />
		<el-table-column prop="state" label="State" width="150" />
		<el-table-column prop="city" label="City" width="150" />
		<el-table-column prop="address" label="Address" width="600" />
		<el-table-column prop="zip" label="Zip" width="150" />
		<el-table-column fixed="right" label="Operations"  width="180">
			<template #default="scope">
				<el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
				<el-button link type="primary" size="small">Edit</el-button>
				<el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)" >
					Remove
				</el-button>
			</template>
		</el-table-column>
	</el-table>
	<el-button class="mt-4" style="width: 100%" @click="onAddItem">Add Item</el-button>
	<h5>多级表头</h5>
	<el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="150" />
    <el-table-column label="Delivery Info">
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column label="Address Info">
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="zip" label="Zip" width="120" />
      </el-table-column>
    </el-table-column>
  </el-table>
	<h5>筛选</h5>
  <el-button @click="resetDateFilter">reset date filter</el-button>
  <el-button @click="clearFilter">reset all filters</el-button>
  <el-table ref="tableRef" row-key="date" :data="tableData" style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      sortable
      width="180"
      column-key="date"
      :filters="[
        { text: '2016-05-01', value: '2016-05-01' },
        { text: '2016-05-02', value: '2016-05-02' },
        { text: '2016-05-03', value: '2016-05-03' },
        { text: '2016-05-04', value: '2016-05-04' },
      ]"
      :filter-method="filterHandler"
    />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" :formatter="formatter" />

    <el-table-column
      prop="tag"
      label="Tag"
      width="100"
      :filters="[
        { text: 'Home', value: 'Home' },
        { text: 'Office', value: 'Office' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
          :type="scope.row.tag === 'Home' ? '' : 'success'"
          disable-transitions
          >{{ scope.row.tag }}</el-tag
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const now = new Date()
	const tableRef = ref("");

	const resetDateFilter = () => {
		tableRef.value.clearFilter(['date'])
	};
	const tableData = ref([{
			date: '2016-05-01',
			name: 'Tom',
			sex: 'boy',
			birthday: '1999/9/9',
			state: 'California',
			city: 'Los Angeles',
			address: 'No. 189, Grove St, Los Angeles',
			zip: 'CA 90036',
			tag: 'Home',
		},
		{
			date: '2016-05-02',
			name: 'Tom',
			sex: 'boy',
			birthday: '1999/9/9',
			state: 'California',
			city: 'Los Angeles',
			address: 'No. 189, Grove St, Los Angeles',
			zip: 'CA 90036',
			tag: 'Home',
		},
		{
			date: '2016-05-03',
			name: 'Tom',
			sex: 'boy',
			birthday: '1999/9/9',
			state: 'California',
			city: 'Los Angeles',
			address: 'No. 189, Grove St, Los Angeles',
			zip: 'CA 90036',
			tag: 'Home',
		},
	])

	const deleteRow = (index) => {
		tableData.value.splice(index, 1)
	}

	const onAddItem = () => {
		now.setDate(now.getDate() + 1)
		tableData.value.push({
			date: dayjs(now).format('YYYY-MM-DD'),
			name: 'Tom',
			state: 'California',
			city: 'Los Angeles',
			address: 'No. 189, Grove St, Los Angeles',
			zip: 'CA 90036',
		})
	}

	const clearFilter = () => {
		tableRef.value.clearFilter()
	}
	const formatter = (row, column) => {
		return row.address
	}
	const filterTag = (value, row) => {
		return row.tag === value
	}
	const filterHandler = (value,row,column) => {
		const property = column['property']
		return row[property] === value
	}
</script>
