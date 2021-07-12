<template>
  <div>
    <Header />
    <nuxt/>
    <footers />
  </div>
</template>
<script>
  import Header from '../components/header'
  import footers from '../components/footers'
  export default {
    components: {
      footers,
      Header,
    },
    computed: {

    },
  }
</script>
<style>

</style>
