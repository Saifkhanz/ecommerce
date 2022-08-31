<template>
  <div>
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-center mt-10">
        <!--main wrapper-->
        <div class="mt-6">
          <h3 class="text-xl text-gray-500 font-sans">Sign-Up</h3>
        </div>
        <div class="mt-6">
          <img
            src="../assets/signup.png"
            alt="signUp image"
            class="w-32 h-36 mb-4"
          />
        </div>
        <div class="">
          <h3>Sign-Up Form</h3>
          <form action="">
            <input type="text" placeholder="Enter here" v-model="name" />
            <br /><br />
            <input type="text" placeholder="Enter Email here" v-model="email" />

            <br /><br />
            <input
              type="password"
              placeholder="Enter the password"
              v-model="password"
            />
            <br /><br />
            <button v-on:click="signUp" type="button">click</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "SignupPage",

  data() {
    return {
      name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    async signUp() {
      console.warn(this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users",{
        name:this.name,
      email:this.email,
      password:this.password
      });
      console.warn(result);
      if(result.status==201)
    {
      alert("sign up done")
    localStorage.setItem("user-info",JSON.stringify(result.data))
      this.$router.push({
        name:"HomePage"
      })
    }
    },

  },
  mounted()
  {
    let user =localStorage.getItem("user-info");
    if(user)
    {
      this.$router.push({
        name:"HomePage"
      })
    }
  }
};
</script>

<style></style>
