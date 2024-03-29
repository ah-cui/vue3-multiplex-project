
import {vue, app, mixin, elementPlus, version, runtimeCfg,ahcuiapi} from "./ahcui/index.js";
import axios from "./axios";
import {NameSpace, namespace} from "./namespace";
import store from './store';      
import router from './router';
import { eventDefine, eventBus,} from './event';
import mock from './mock';
import auth from "./auth/index.js";
import "./locale";
import "./element+/index.js";
import "./style/index.js";

process.env.NODE_ENV === 'production'?__webpack_public_path__ = runtimeCfg.app_public_path:undefined;

export {vue, app, ahcuiapi, mixin, elementPlus, axios, NameSpace, namespace, eventDefine, eventBus, version, runtimeCfg, router, store, auth, mock}
