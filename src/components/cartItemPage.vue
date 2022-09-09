<template>
  <div>
    <h1>
        this is another cart Page
    </h1>
  <p>
     {{showData}}
    </p>  
  </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
export default {
  name:'cartItemPage',
  computed: {
    ...mapGetters(["showData"]),
  },
  methods: {
    ...mapActions(["addItem('hyperzod')",]),
}
}
</script>

<style>

</style>