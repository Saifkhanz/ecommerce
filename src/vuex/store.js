/*
import { createStore } from "vuex";
export default createStore({
    state(){
         return{
            counter:0,
        
           }  
    },
    mutations:{
           
      addToCart(state,payload){ 
        alert("Items are successfully added in the carts")
        state.counter=state.counter+ payload;
       }
      },  
         })

   */




/* by other source

import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
        users: []
    },
    getters: {
      getUsers: (state) => state.users
    },
    actions: {
      async fetchUsers({ commit }) {
          try {
            const data = await axios.get('https://jsonplaceholder.typicode.com/users')
              commit('SET_USERS', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
    mutations: {
        SET_USERS(state, users) {
          state.users = users
      }
    }
})
*/

import { createStore } from "vuex";
// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

export default createStore({
  
  state: {
    product: [],
    cart:"online Kaka"
  },
  
  mutations: {
    setData(state, product) {
      state.product = product;
    },
    setCart(state,payload)
    {
     state.cart= payload;
    }
  },
  
  actions: {
    fetchAllProduct(context) {
      return fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setData", data);
        })
        .catch((err) => console.error(err));
    },
    addItem(context,payload){
          context.commit("setCart",payload)
      }
  },
  
  getters: {
    product(state) {
      return state.product;
    },
    showData(state){
        return state.cart
      }
  },
  
});
  






