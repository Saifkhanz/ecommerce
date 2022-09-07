<template>
  <div>
<h1 class="text-2xl bg-gray-500 font-serif text-center">
    your Order is successfully Placed.
</h1>
<h1>{{ title}}</h1>
<!-- <h1>{{price}}</h1> -->
<!-- <img src="image" alt=""> -->
</div>
</template>

<script>
export default {
  name:"ordersPage",
  props: ['title'],
}
</script>

<style>

</style>