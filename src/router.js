import Vue from "vue";
import Router from "vue-router";

import Issues from "@/views/Issues.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "issues",
      component: Issues
    }
  ]
});
