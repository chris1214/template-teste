import Vue from 'vue'
import myAside from "./src/components/myAside"
import myHeader from "./src/components/myHeader"
import myBody from "./src/components/myBody"
import cssGlobal from "./src/cssGlobal"

import myLogin from './src/components/myLogin'
import myCreatUser from "./src/components/myCreatUser"
import myForgotPassword from "./src/components/myForgotPassword"
import myProfile from "./src/components/myProfile"

Vue.component("myLogin", myLogin);
Vue.component("myCreatUser", myCreatUser);
Vue.component("myForgotPassword", myForgotPassword);
Vue.component("myProfile", myProfile);

Vue.component("myAside", myAside);
Vue.component("myHeader", myHeader);
Vue.component("myBody", myBody);
export {myAside, myHeader, myBody, myLogin, myCreatUser, myForgotPassword, myProfile}
export default { }
