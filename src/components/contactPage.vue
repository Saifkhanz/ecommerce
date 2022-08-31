<template>
 <div class="flex w-full min-h-screen justify-center items-center">
   <div class="bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg">
     <form action="">
       <input type="text" placeholder="Enter your name" class=" m-2 placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
       <br>
              <input type="text" placeholder="Enter your email" class=" m-2 placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
             <br>
         <textarea  cols="30" rows="10" class="m-2 placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="enter your queries here" ></textarea>
        <button type="button" class="bg-fuchsia-400 ml-3 h-10 w-32 rounded-full text-center text-white text-lg " >Submit</button>
     </form>
     </div>
  </div>

</template>

<script>
export default {
    name:"contactPage"
}
</script>

<style>

</style>