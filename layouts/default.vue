<template>
  <div>
    <firstTop/>
    <nuxt/>
    <footers />
  </div>
</template>
<script>
  import firstTop from '../components/firstTop'
  import footers from '../components/footers'
  export default {
    components: {
      firstTop,
      footers,
    },
    computed: {
    
    },
  }
</script>
<style>

</style>
