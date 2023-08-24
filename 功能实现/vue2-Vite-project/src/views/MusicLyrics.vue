<template>
  <div>
    <MusicLyrics :vtime="vtime" />
  </div>
</template>
<script>
import MusicLyrics from '@com/歌词/MusicLyrics.vue'
export default {
  name: 'App',
  components: {
    MusicLyrics,
  },
  data() {
    return {
      vtime: 0,
    }
  },
  mounted() {
    setInterval(() => {
      this.vtime += 0.1
    }, 100)
  },
}
</script>
<style lang=""></style>
