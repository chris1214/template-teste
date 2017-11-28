import myAside from "./src/components/myAside"
import myHeader from "./src/components/myHeader"
import myBody from "./src/components/myBody"

import myActionsButton from "./src/components/myActionsButton.vue"
import myDetailsShow from "./src/components/myDetailsShow.vue"
import myContainer from "./src/components/myContainer.vue"
import myModuleTitle from "./src/components/myModuleTitle.vue"

import myLogin from './src/components/myLogin'
import myCreatUser from "./src/components/myCreatUser"
import myForgotPassword from "./src/components/myForgotPassword"
import myProfile from "./src/components/myProfile"

import myExTableSearch from "./src/example/myExTableSearch.vue"
import myExCreate from "./src/example/myExCreate.vue"
import myExShow from "./src/example/myExShow.vue"

const MyPlugin = {
  install(Vue) {
    Vue.component("myExTableSearch", myExTableSearch);
    Vue.component("myExCreate", myExCreate);
    Vue.component("myExShow", myExShow);

    Vue.component("myActionsButton", myActionsButton);
    Vue.component("myDetailsShow", myDetailsShow);
    Vue.component("myModuleTitle", myModuleTitle);
    Vue.component("myContainer", myContainer);

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
