

/**
 * 转换假数据apidata\auth\login的用户资源列表数据为树形结构数据
 * 
 * 
 */
function convertDataToModuleTree(list){
	if (!list || !list.length) {
		return []
	  }
	  list=JSON.parse(JSON.stringify(list));
	  let treeListMap = {};
	  for (let item of list) {
		treeListMap[item.resId] = item
	  }
	  for (let i = 0; i < list.length; i++) {
		if (list[i].resPid && treeListMap[list[i].resPid]) {
		  if (!treeListMap[list[i].resPid].children) {
			treeListMap[list[i].resPid].children = []
		  }
		  treeListMap[list[i].resPid].children.push(list[i]);
		  list.splice(i, 1);
		  i--
		}
	  }
	  return list
}

export {
	convertDataToModuleTree
}