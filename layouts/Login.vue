<template>
  <div>
    <nuxt/>
    <footers />
  </div>
</template>

<script>
  import footers from '../components/footers'
  export default {
    name: "none",
    components: {
      footers,
    },
    data() {
      return {}
    },
    methods: {},
    created() {
    
    },
  }
</script>

<style scoped lang="scss">
  .none {
  
  }
</style>
