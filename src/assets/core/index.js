
import {vue, app, mixin, elementPlus, axios, version, runtimeCfg,cuiapi} from "./ahcui/index.js";
import {NameSpace, namespace} from "./namespace";
import store from './store';      
import router from './router';
import { eventDefine, eventBus,} from './event';
import mock from './mock';
import auth from "./auth/index.js";

process.env.NODE_ENV === 'production'?__webpack_public_path__ = runtimeCfg.app_public_path:undefined;

export {vue, app, cuiapi, mixin, elementPlus, axios, NameSpace, namespace, eventDefine, eventBus, version, runtimeCfg, router, store, auth, mock}
