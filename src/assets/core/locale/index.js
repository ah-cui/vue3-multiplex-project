import {cuiapi} from  "../ahcui/index.js";
import zh_CN from "./zh_CN.js";

const lang="zh_CN";

cuiapi.global.locale.registLanguage(lang, zh_CN);
cuiapi.global.locale.setCurrentLanguage(lang)
