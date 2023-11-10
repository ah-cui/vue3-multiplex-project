import {cuiapi} from  "../ahcui/index.js";
import zh_CN from "./zh_CN.js";
import en_US from "./en_US.js";
import zh_TW from "./zh_TW.js";

const langs=[
    {name:"zh_CN",lang:zh_CN},
    {name:"en_US",lang:en_US},
    {name:"zh_TW",lang:zh_TW},

];
langs.forEach((lang,index,array)=>{
    cuiapi.global.locale.registLanguage(lang.name, lang.lang);
})
cuiapi.global.locale.setCurrentLanguage(langs[0].name);
