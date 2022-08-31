<template>
  <div>
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-center mt-10">
        <!--main wrapper-->
        <div class="mt-6">
          <h3 class="text-xl text-gray-500 font-sans">Login</h3>
        </div>
        <div class="mt-6">
          <img
            src="../assets/login.png"
            alt="signUp image"
            class="w-32 h-36 mb-4"
          />
        </div>
        <div class="">
          <h3>Login</h3>
          <form action="">
            <input type="text" placeholder="Enter Email here" v-model="email" />

            <br /><br />
            <input
              type="password"
              placeholder="Enter the password"
              v-model="password"
            />
            <br /><br />
            <button v-on:click="login" type="button">click</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if(result.status ==200 && result.data.length >0)
      {
         localStorage.setItem("user-info",JSON.stringify(result.data[0]))
       this.$router.push({name:"HomePage"})
      }
    },
  },
  mounted()
{
    let user=localStorage.getItem("user-info");
    if(user){
         this.$router.push({name:"HomePage"})       
    }  
}
};
</script>

<style></style>
