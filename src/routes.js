import HomePage from "./components/HomePage.vue";
import SignupPage from "./components/SignupPage.vue";
import LoginPage from "./components/LoginPage.vue";
import contactPage from "./components/contactPage.vue";
import productList from "./components/productList.vue";
import accountsPage from "./components/accountsPage.vue";
import cartPage from './components/cartPage.vue';
import ordersPage from './components/ordersPage.vue';
import productCard from './components/productCard.vue';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignupPage",
    component: SignupPage,
    path: "/signuppage",
  },
  {
    name:"Login",
    component:LoginPage,
    path:"/login"
  },
  {
    name:"Contact",
    component:contactPage,
    path:'/contactpage'
  },
  {
    name:"ProductList",
    component:productList,
    path:"/productlist"
  },
  {
   name:"Accounts",
  component:accountsPage,
   path:'/accountspage'
  },
   {
    name:"Cart",
    component:cartPage,
    path:"/cartpage"
   },
    {
       name:'ordersPage ',
        component:ordersPage,
        path:'/ordersPage',
        props:true
    },
    {
      name:"ProductCard",
      component:productCard,
      path:'/productcard:item'
    }
  ];
const router = createRouter({ 
  history:createWebHistory(),
  routes,
});
 
export default router;
