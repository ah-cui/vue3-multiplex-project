

/**
 * 将list转为tree
 * 例如：
 * list:[
 * {id:"4",name:"济南历下分公司",pid:"2"},
 * {id:"1",name:"山东省分公司",pid:"0"},
 * {id:"2",name:"济南市分公司",pid:"1"},
 * {id:"3",name:"东营市分公司",pid:"1"}
 * ]
 * tree:
 * [{"id":"1","name":"山东省分公司","pid":"0","children":[{"id":"2","name":"济南市分公司","pid":"1","children":[{"id":"4","name":"济南历下分公司","pid":"2","children":[]}]},{"id":"3","name":"东营市分公司","pid":"1","children":[]}]}]
 *
 *
 *
 * @param list 列表
 * @param{String/Array} pid pid的初始值
 * @param field 节点id的属性名
 * @param pField 父节点id的属性名
 * @param childrenDefaultValue children默认值
 * @return {*[]}
 */
 function list2Tree(list = [], pid = "0", field = "id", pField = "pid",childrenDefaultValue=[]){
    let obj = {};
    list.forEach(item => {
        item.children = JSON.parse(JSON.stringify(childrenDefaultValue));
        item.isLeaf = true;
        obj[item[field]] = item;
    });
    let pvalue;
    const filter = list.filter(item => {
        pvalue = item[pField];
        if((typeof pid==="string" && pvalue !== pid)|| (Array.isArray(pid) && pid.indexOf(pvalue)===-1)){
            if(obj[pvalue]){
                obj[pvalue].isLeaf = false;
                if(!obj[pvalue].children){
                    obj[pvalue].children = [];
                }
                obj[pvalue].children.push(item);
            }
            return false
        }
        return true
    });
    return filter;
}
/**
 * 获取根节点
 * @param list 数据列表
 * @param field ID属性
 * @param pfield 父id属性
 */
 function getRootIds(list, field, pfield){
	const ids = list.map(item => item[field]);
	const pids = new Set(list.map(item => item[pfield]));
	const rootIds = Array.from(pids).filter(pid => ids.indexOf(pid) === -1);
	return rootIds;
}

/*
** randomWord 产生任意长度随机字母数字组合
** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
** xuanfeng 2014-08-28
*/
function randomWord(min, max){
	var returnStr = "",
	range = (max ? Math.round(Math.random() * (max-min)) + min : min),
	arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd',             'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	for(var i=0; i<range; i++){
	    var index = Math.round(Math.random() * (arr.length-1));
	    returnStr += arr[index];
	}
	return returnStr;
}

export {
	list2Tree,
	getRootIds,
	randomWord
}