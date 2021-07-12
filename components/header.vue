<template>
  <div class="header">
    <NuxtLink to='/'>首页</NuxtLink>
    <NuxtLink to='/login'>登录</NuxtLink>
    <NuxtLink to='/member/index'>个人中心</NuxtLink>
  </div>
</template>

<script>
  export default {
    name: 'header',
    components: {},
    data() {
      return {}
    },
    methods: {},
    created() {

    }
  }
</script>

<style scoped lang="scss">
  .header {

  }
</style>
