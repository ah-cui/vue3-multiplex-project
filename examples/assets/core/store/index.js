import {app,store}  from "../../../../src/assets/core/ahcui/index.js";
import example from "./example";

//示例：增加一个项目使用的vuex
store.registerModule("example",example);

app.use(store)

export default store