<template>
  <div >

    <div class="container h-8 mx-auto">
      <div class="md:flex md:flex-row md:justify-between text-center">
        <div class="mt-2 flex flex-row justify-center">
          <router-link 
            to="/cartpage"
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
    <div class="mt-5">
      <ul v-for="data in temp" :key="data.id">
              
              <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              <li >
                <div class="shadow-lg rounded-lg ">
          <img  v-bind:src="data.image" class="rounded-tl-lg rounded-tr-lg" />  
          <div class="p-5">
              <h3>{{data.title}}</h3>
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
                
            <button v-on:click="remove(data)"  class="bg-gradient-to-r from bg-red-600 to bg-pink-700 rounded-full py-2 px-4 text-gray-50 flex flex-row text-sm
            hover:from-pink-600 hover:to-pink-600 ">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
              Remove Item 
            </button>

                 <button v-on:click="item_fun(data.id)" class="bg-blue-600 rounded-full py-2 px-4 text-gray-50 flex flex-row 
                hover:bg-purple-700 text-sm">
                  Place order
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
                 </button>
                 <h3>{{data.price}}</h3>
             </div>
           
    
          </div>
         </div>
              </li>
           
          </div>
             </ul>
  </div>
  </div>
</template>

<script>
export default {
name:"cartPage",
  data()
  {
    return{
       temp :"",
       len:0
    }
  },
  created(){
      
      this.temp = localStorage.getItem("products_data");
             this.temp = JSON.parse(this.temp);
    
  },

  updated(itemData)
  {
    var productArray = JSON.parse(localStorage.getItem("products_data"));
        productArray.splice(productArray.findIndex(a => a.id === itemData.id) , 1);
        console.warn(productArray);
        localStorage.setItem("products_data",JSON.stringify(productArray));
  },
 methods:{
    logOut() {
      alert("Logout done");
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
       remove(itemData){
       
        alert(itemData.id)
       
        var productArray = JSON.parse(localStorage.getItem("products_data"));
        productArray.splice(productArray.findIndex(a => a.id === itemData.id) , 1);
        console.warn(productArray);
        localStorage.setItem("products_data",JSON.stringify(productArray));

        //  this.len=this.temp.length
        //  alert(this.len);
          // for(let i=0;i<this.len;i++)
         //  {


    /*function and productArrayay filter method 


          y=this.temp.filter(itemRemove);
        function itemRemove(itemData,i=-1)
          {
            i++;   
            alert(i)
         alert(this.temp[1].id)
         console.warn(this.temp[1])
         return itemData.id!==this.temp[1].id
          }


         */


      //   y=this.temp.filter((itemData,i=0)=>{
      //    alert(i)
      //    alert(this.temp[i].id)
      //    return itemData.id!==this.temp[i].id;
      //     console.warn(this.temp[i])
      //   i++;
      // })
  
           //}
      
       },
    item_fun(rId) {
            let tempo, x;
            tempo = localStorage.getItem("products_details");
            tempo = JSON.parse(tempo);
            x = tempo[rId - 1].title;
            console.warn(tempo[rId - 1].title);
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
 }
}
</script>

<style>

</style>