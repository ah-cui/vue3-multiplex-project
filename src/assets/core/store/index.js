import {app,store} from "../ahcui/index.js";
import project from "./project";

//示例：增加一个项目使用的vuex
store.registerModule("project",project);

app.use(store)

export default store