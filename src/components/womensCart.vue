<template>
  <div>
     <!--Women collection start-->
    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
     <div class="shadow-lg rounded-lg ">
      <a >  
      <img src="../assets/woman.jpg" class="rounded-tl-lg rounded-tr-lg" />  
      </a>
      <div class="p-5">
          <h3><a >Woman's T-Shirt</a></h3>
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
            <button v-on:click="fun"  class="bg-gradient-to-r from bg-red-600 to bg-pink-700 rounded-full py-2 px-4 text-gray-50 flex flex-row text-sm
            hover:from-pink-600 hover:to-pink-600 ">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
              Add to Cart 
            </button>

             <router-link to="/productlist" class="bg-blue-600 rounded-full py-2 px-4 text-gray-50 flex flex-row 
            hover:bg-purple-700 text-sm">
             View more 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
             </router-link>
         </div>


      </div>
     </div>
     <div class="shadow-lg rounded-lg ">
      <a >  
      <img src="../assets/woman.jpg" class="rounded-tl-lg rounded-tr-lg" />  
      </a>
      <div class="p-5">
          <h3><a >Woman's T-Shirt</a></h3>
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
            <button v-on:click="fun"  class="bg-gradient-to-r from bg-red-600 to bg-pink-700 rounded-full py-2 px-4 text-gray-50 flex flex-row text-sm
            hover:from-pink-600 hover:to-pink-600 ">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
              Add to Cart 
            </button>

             <router-link to="/productlist" class="bg-blue-600 rounded-full py-2 px-4 text-gray-50 flex flex-row 
            hover:bg-purple-700 text-sm">
             View more 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
             </router-link>
         </div>
      </div>
     </div>

     <div class="shadow-lg rounded-lg ">
      <a >  
      <img src="../assets/woman.jpg" class="rounded-tl-lg rounded-tr-lg" />  
      </a>
      <div class="p-5">
          <h3><a >Woman's T-Shirt</a></h3>
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
            <button v-on:click="fun"  class="bg-gradient-to-r from bg-red-600 to bg-pink-700 rounded-full py-2 px-4 text-gray-50 flex flex-row text-sm
            hover:from-pink-600 hover:to-pink-600 ">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
              Add to Cart 
            </button>

             <router-link to="/productlist" class="bg-blue-600 rounded-full py-2 px-4 text-gray-50 flex flex-row 
            hover:bg-purple-700 text-sm">
             View more 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
             </router-link>
         </div>
      </div>
     </div>

     <div class="shadow-lg rounded-lg ">
      <a >  
      <img src="../assets/woman.jpg" class="rounded-tl-lg rounded-tr-lg" />  
      </a>
      <div class="p-5">
          <h3><a >Woman's T-Shirt</a></h3>
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
            <button v-on:click="fun"  class="bg-gradient-to-r from bg-red-600 to bg-pink-700 rounded-full py-2 px-4 text-gray-50 flex flex-row text-sm
            hover:from-pink-600 hover:to-pink-600 ">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
              Add to Cart 
            </button>

             <router-link to="/productlist" class="bg-blue-600 rounded-full py-2 px-4 text-gray-50 flex flex-row 
            hover:bg-purple-700 text-sm">
             View more 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
             </router-link>
         </div>


      </div>
     </div>
    </div> <!--Woman's collection end-->
        
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
name:"womensCart",
// data(){
//       return{
//         value:1
//       }
//     },
    methods:{
    //  ...mapMutations(['addToCart'])
    fun()
    {    
      alert('Hello User Your Dummy Items added in the cart');
      // this.store.commit('addToCart')
    }
    }
}
</script>

<style>

</style>