<template>
  <div >
    <div class="container h-8 mx-auto">
      <div class="md:flex md:flex-row md:justify-between text-center">
        <div class="mt-2 flex flex-row justify-center">
          <router-link 
            to="/accountspage"
            class="hover:bg-gray-200 p-3 px-5 rounded-full"
          >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

            
            
            <!-- drawer init and show -->
          </router-link>
        </div>
     <!--navbar start-->
        <div class="mt-4">
          <router-link
            to="/"
            class="text-grey-700 hover:text-purple-700 p-4 font-semibold"
            >Home</router-link
          >
          <!-- <router-link
            to="/productlist"
            class="text-grey-700 hover:text-purple-700 p-4 font-semibold"
          >
            Shop</router-link
          > -->
          <router-link
            to="/contactpage"
            class="text-grey-700 hover:text-purple-700 p-4 font-semibold"
            >Contact</router-link
          >
          <!--...........-->
          
          <router-link 
            to="/cartpage" 
            class="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-5 rounded-full font-semibold"
            >Carts {{$store.state.counter}}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </router-link>
         
          <router-link
            to=""
            v-on:click="logOut"
            class="text-grey-700 hover:text-purple-700 p-4 font-semibold"
            >Logout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </router-link>
        </div>
      </div>
      <!-- Navbar close-->
    </div> 
    <div class="mt-8">
         <ul v-for="item in result" :key="item.index">
              
          <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <li >
            <div class="shadow-lg rounded-lg ">
      <img  v-bind:src="item.image" class="rounded-tl-lg rounded-tr-lg" />  
      <div class="p-5">
          <h3>{{item.title}}</h3>
       <div class="flex flex-row my-3">
       <div class="bg-black h-5 w-5 rounded-full shadow-md mr-2">
        </div>
        <div class="bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2">
        </div>
        <div class="bg-white h-5 w-5 rounded-full shadow-md mr-2">
        </div>
        <div class="bg-red-800 h-5 w-5 rounded-full shadow-md mr-2">
        </div>
        <div class="bg-green-700 h-5 w-5 rounded-full shadow-md mr-2">
        </div> 
        </div>     
        <div class="flex flex-row my-3">
          <div class="border-2 border-grey-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2">
            XL
          </div>
           <div class="border-2 border-grey-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2">
            XXL
          </div>
           <div class="border-2 border-grey-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2">
            L
          </div>
           <div class="border-2 border-grey-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2">
            Md
          </div>
           <div class="border-2 border-grey-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2">
            Sm
          </div>
          </div> 
           
         <div class="flex flex-row justify-between">
  <button v-on:click="AddToCart(item) ,addToCart(value)" 
            class="bg-gradient-to-r from bg-red-600 to bg-pink-700 rounded-full py-2 px-4 text-gray-50 flex flex-row text-sm
            hover:from-pink-600 hover:to-pink-600 ">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
              Add to Cart 
            </button>
             <button v-on:click="item_fun(item.id)" class="bg-blue-600 rounded-full py-2 px-4 text-gray-50 flex flex-row 
            hover:bg-purple-700 text-sm">
              Place order
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
             </button>
             <h3>{{item.price}}</h3>
         </div>
       

      </div>
     </div>
          </li>
       
      </div>
         </ul>
        </div>
         <!-- <CartPage :data="item" /> -->
  </div>
</template>

<script>
// import CartPage from './cartPage.vue';
//  import axios from 'axios';
// import productCard from './productCard.vue';
import { mapState  } from "vuex";
import { mapMutations } from 'vuex';
export default {
  name: "productList",
  //  components: { CartPage },
  // components:{
  //   productCard
  // },
  data() {
    return {
            result: "",
             addedPrducts:[],
             value:1

        };
    },
    computed:{
     ...mapState(["counter"])
    },
    mounted() {
        fetch("https://fakestoreapi.com/products")
            .then(res => (res.json()))
            .then(res => {
            console.warn(res);
            this.result = res;
            console.log(this.result);
            localStorage.setItem("products_details", JSON.stringify(res));
        });
    },
    methods: {
     /*
     upper template me button bana kr koi function call kralena aur usi function
     ki body me yeh rhega
     this.store.dispatch({
      type:"newTitle"
     })
   api ko send krna hai yeh per action likhana hai 
    */
    ...mapMutations(['addToCart']),
        item_fun(rId) {
            console.warn(rId, this.result[rId]);
            let temp, x;
            // y,z;
            // let set;
            // set=localStorage.setItem("order_details",)
            temp = localStorage.getItem("products_details");
            temp = JSON.parse(temp);
            x = temp[rId - 1].title;
            console.warn(temp[rId - 1].title);
            // y=temp[rId - 1].price;
            // z=temp[rId - 1].image;
            if(confirm("Are you confirm want to placed this order",x))
           {
             alert("your Order is Successfully placed");
            alert(x);
           }
           else{
            alert("your Order is not Placed")

           }
            this.$router.push({ name: "ordersPage" ,params: {title: x }}  )
                    },
        AddToCart(pid){
          console.warn(pid);
          alert("Your Product is Added in the Cart")
          if(localStorage.getItem("products_data"))
           {
             this.addedPrducts.push(pid);
             localStorage.setItem("products_data",JSON.stringify(this.addedPrducts));
            // console.warn(localStorage.getItem('product_data'));
          }
           else{
         
             this.addedPrducts.push(pid)
             localStorage.setItem("products_data",JSON.stringify(this.addedPrducts));

            } 
            // this.$router.push({ name: "Cart" });
          }
          
    },
}
</script>

<style>

</style>