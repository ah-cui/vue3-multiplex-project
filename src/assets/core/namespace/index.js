/***
 *  @author:zerostyle
 *  @email: zerostyle@126.com
 *  @date：20191024
 *  @version:V2.0.0
 *  @description:
 *  为了规范化前端开发，并解决越来越多的前端模块带来的自由组合、嵌入，多版本共存等问题，避免变量的全局污染带来的可访问性问题，
 *  特增加对组件的命名空间定义能力，其命名基础入口为以下结构
 *  公司签名.软件或组件.软件或组件名称.模块或分类[.子模块...][.版本号]
 *  ahcui.software/component.frame.ahcui.v1_1_0
 *  @example:
 *  如该框架采用：
 *  ahcui.software.frame
 *
 *  特别注意前三层代指了  公司或机构.什么类型的产品.产品名称
 *  后面可以按照自己的框架或组件进行自行组织，
 *  在时下软件越来越复杂，对软件的设计要求越来越高，
 *  设计如内功心法，编码如外功招式
 *  掌握了软件设计的内功与心法，方可以见招拆招，将编码的外功发挥的淋漓尽致
 *
 *  @interface:
 *  const namespace="ahcui.software.frame";
 *  setNameSpace(string,obj);
 *  getNameSpace(string);
 *
 *
 *
 *
 *
 */

import { NameSpace } from '@ahcui/lib-jsext'
import packageInfo from "../../../../package.json";

const namespace = `ahcui.software.${packageInfo.name.replaceAll(".","_")}.${packageInfo.version.replaceAll(".","_")}`;

/***
 * 自动注册命名空间的函数
 */
!(function () {
  if (!window.setNameSpace)window.setNameSpace = NameSpace.setNameSpace
  if (!window.getNameSpace)window.getNameSpace = NameSpace.getNameSpace
  if (!window.namespace) {
    //window.namespace = namespace
    NameSpace.setNameSpace(namespace)
    console.log(`%c欢迎使用ahcui前端项目模板，该项目开放空间为:%c"${namespace}"%c,如需访问内置变量或函数请使用此命名空间,具体支持请参考开发文档`,
                    'color:orange','color:yellow','color:orange');
  }
}())
export { NameSpace, namespace }
