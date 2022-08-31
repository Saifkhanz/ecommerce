<template>
  <div>
           
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

          <!-- <h2 class="text-3xl text-grey-700 ml-3">Logo</h2> -->
        </div>
     <!--navbar start-->
        <div class="mt-4">
          <router-link
            to="/"
            class="text-grey-700 hover:text-purple-700 p-4 font-semibold"
            >Home</router-link
          >
          <router-link
            to="/productlist"
            class="text-grey-700 hover:text-purple-700 p-4 font-semibold"
          >
            Shop</router-link
          >
          <router-link
            to="/contactpage"
            class="text-grey-700 hover:text-purple-700 p-4 font-semibold"
            >Contact</router-link
          >
          <!--...........-->
          
          <router-link 
            to="/cartpage" 
            class="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-5 rounded-full font-semibold"
            >Carts
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
    </div> <!--Main wrapper div close -->
            
      <!--Main Section Start-->
    <div class="md:flex md:flex-row mt-20">
      <div class="md:w-2/5 flex flex-col justify-center ml-4 mb-9 items-center">
        <h3
          class="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left"
        >
          Some Catchy Title Here
        </h3>
        <p
          class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left"
        >
          Our brand moto goes here
        </p>
        <p
          class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left"
        >
          Our brand tagline goes here
        </p>
        <router-link
          to=""
          class="bg-gradient-to-r from bg-red-600 to bg-pink-700 rounded-full py-4 px-8 text-gray-50 uppercase text-xl my-5 md:self-start"
        >
          <button type="button" v-on:click="getItem">Shop now</button>
          <!-- <ProductList data/> -->
        </router-link>
      </div>
      <div class="md:w-3/5">
        <img src="../assets/image.jpg" class="w-full h-100" />
      </div>
      <!--Main section end-->
    </div>
    <!--content section start-->
    <div class="my-20">
      <div class="flex flex-row justify-between">
        <h2 class="text-3xl">Men's Collection</h2>
        <router-link to="/productlist" class="text-xl flex flex-row"
          >Viwe All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-7 ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </router-link>
      </div>
      <!--main section closed-->
      <mensCart />
      <WomensCart />
      <!--last image section start -->
      <div class="rounded-lg shadow-lg my-20 flex flex-row">
        <div
          class="text-gray-200 p-12 lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg"
        >
          <div class="lg:w-1/2">
            <h3 class="text-2xl font-extrabold mb-4">
              Subscribe to get offer first
            </h3>
            <p class="mb-4 leading-relaxed">
              want to hear from us when we have neew offers? Sign up for our
              newsletter and we'll email you every item we have new sale offers.
            </p>
            <div>
              <input
                type="email"
                placeholder="Enter Email Address"
                class="bg-gray-600 text-gray-300 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4"
              />
              <button type="submit" class="bg-red-500 py-3 rounded-lg w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div class="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
          <img src="../assets/banner.jpg" class="h-96" />
        </div>
      </div>
      <!--footer start-->

      <!-- <div class="border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center py-5 text-sm ">

        <div class="mb-4">
          <router-link href="" class="mx=2.5">About</router-link>
        <router-link href="" class="mx=2.5">Contact us</router-link>
        <router-link href="" class="mx=2.5">Home</router-link>
        </div>
         <p>Copyright</p>
       </div> -->
      <!--fototer commented -->
    </div>
  </div>
</template>

<script>
//  import cartPage from './cartPage.vue'
import mensCart from "./mensCart.vue";
import WomensCart from "./womensCart.vue";

// import axios from "axios";
// import ProductList from "./productList.vue";
export default {
  name: "HomePage",
  components: {
    mensCart,
    WomensCart,
    // cartPage
},

   
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({
        name: "SignupPage",
      });
    }
  },
  methods: {
    logOut() {
      alert("Logout done");
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  
       getItem()
      { 
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>console.log(data))

      } 
  }
};
</script>

<style></style>
