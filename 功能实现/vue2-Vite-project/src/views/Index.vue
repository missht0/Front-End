<template>
  <div class="w-[70%] m-auto p-32">
    <el-tabs tab-position="left">
      <el-tab-pane
        v-for="(item, index) in list"
        :key="index"
        :label="item.name"
        class="w-[400px] h-[100vh]"
      >
        <component :is="item.component" class="h-full" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'Index',
  components: {},
  data() {
    return {
      list: [
        {
          name: '歌词',
          component: () => import('./MusicLyrics.vue'),
        },
      ],
    }
  },
  mounted() {},
}
</script>
<style lang=""></style>
