<template>
  <div class="error">
  
  </div>
</template>

<script>
  export default {
    props: {
      error: {
        type: Object,
        default: null
      }
    },
    name: "error",
    components: {},
    data() {
      return {}
    },
    methods: {},
    created() {
      console.log(this.error.statusCode);
      if(this.error.statusCode==401){
        this.$router.push({path: '/login' })
      }
    },
  }
</script>

<style scoped lang="scss">
  .error {
  
  }
</style>
