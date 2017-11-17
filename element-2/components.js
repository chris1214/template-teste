import myAside from "./src/components/myAside"
import myHeader from "./src/components/myHeader"
import myBody from "./src/components/myBody"

import myLogin from './src/components/myLogin'
import myCreatUser from "./src/components/myCreatUser"
import myForgotPassword from "./src/components/myForgotPassword"
import myProfile from "./src/components/myProfile"

const MyPlugin = {
  install(Vue) {
    Vue.component("myLogin", myLogin);
    Vue.component("myCreatUser", myCreatUser);
    Vue.component("myForgotPassword", myForgotPassword);
    Vue.component("myProfile", myProfile);

    Vue.component("myAside", myAside);
    Vue.component("myHeader", myHeader);
    Vue.component("myBody", myBody);
  }
};

export default MyPlugin
