<template>
  <div class='index'>
    index
  </div>

</template>

<script>
  export default {
    async asyncData({store,$axios}) {
      let nav = store.state.public.nav
      const [announcements, banner, session] = await Promise.all([
        $axios.get('/open/platform_announcements'),
        $axios.get('/open/banners/list?page=1&perPage=9&type=1'),
        $axios.get('/open/album/sticky/list'),
      ])
      return {
        announcements: announcements.data.content.list,
        banner: banner.data.content.list,
        session: session.data.content.list,
      }
    },
    components: {},
    methods: {
    },
  }
</script>

<style lang='scss'>

</style>
