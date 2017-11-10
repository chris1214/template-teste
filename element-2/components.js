import Vue from 'vue'
import myAside from "./src/components/myAside"
import myHeader from "./src/components/myHeader"
import myBody from "./src/components/myBody"
import cssGlobal from "./src/cssGlobal"

Vue.component("myAside", myAside),
Vue.component("myHeader", myHeader),
Vue.component("myBody", myBody)
export {}
export default {
  myAside,
  myHeader,
  myBody
}
