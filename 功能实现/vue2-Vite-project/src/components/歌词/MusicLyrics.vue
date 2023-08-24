<template lang="">
  <div
    class="musicLyrics absolute left-1/2 -translate-x-1/2 w-[50vh] h-[60vh] bg-black bg-opacity-70 py-[6vh] px-[8vh] rounded-[5vh]"
    style
  >
    <div ref="divRef" class="w-[100%] h-[80%] my-[10%] overflow-hidden">
      <ul ref="ulRef">
        <li
          v-for="(item, index) in lyrics?.lines"
          class="text-xl text-left w-max mx-auto h-10 leading-10 whitespace-nowrap ease-in-out transition-all duration-300"
          :class="
            lyricsIndex == index ? 'text-orange-500 active' : 'text-white'
          "
        >
          {{ item.txt }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Lyric from 'lyric-parser'

// const _path = '/3dResource/MusicInstrument/'

export default {
  components: {},
  props: ['ok', 'vinfo', 'vtime'],
  data() {
    return {
      lyrics: null,
      lyricsIndex: -1,
    }
  },
  methods: {
    getLyrics() {
      // 获得歌词
      // let api = process.env.NODE_ENV === 'development' ? '/api' : ''
      // let _lyricspath = api + this.vinfo.musicUrl.replace('.mp3', '.lrc')
      let _lyricspath = './歌词/爱我你就亲亲我.lrc'
      fetch(_lyricspath)
        .then((res) => res.text())
        .then((data) => {
          let _lyrics = data
          // console.log('歌词', _lyrics)
          this.lyrics = new Lyric(_lyrics, this.handleLine)
        })
    },
    handleLine({ lineNum, txt }) {
      if (this.ok) return
      // console.log('Line number:', lineNum, 'Lyric:', txt)
      this.lyricsIndex = lineNum
    },
  },
  computed: {},
  mounted() {
    console.log('MusicLyrics')
    this.getLyrics()
  },
  beforeMount() {
    // this.path = this.getFullUrl(_path)
  },
  beforeDestroy() {},
  watch: {
    vtime(val) {
      this.lyrics?.seek(val * 1000)
    },
    lyricsIndex(val) {
      const _liS = this.$refs.ulRef.children[val].style
      const _li = this.$refs.ulRef.children[val]
      if (val > -1) {
        // 上移
        const divHeight = this.$refs.divRef.clientHeight
        const liHeight = this.$refs.ulRef.children[0].clientHeight
        let _top = liHeight * val
        if (_top > divHeight / 2 - liHeight) {
          this.$refs.ulRef.style.setProperty(
            '--translatey',
            `-${_top - divHeight / 2 + liHeight}px`
          )
        }

        // 左移
        let time =
          this.lyrics.lines.length - 1 === val
            ? 2000
            : this.lyrics.lines[val + 1].time - this.lyrics.lines[val].time
        time = time - 600
        // 如果宽度超过了div的宽度
        if (_li.clientWidth * 1.25 > this.$refs.divRef.clientWidth + 5) {
          _liS.transformOrigin = 'left center'
          _liS.margin = '0px'
          setTimeout(() => {
            _liS.transition = `all ${time}ms linear`
            _liS.transform = `translateX(-${
              _li.clientWidth * 1.25 - this.$refs.divRef.clientWidth
            }px) scale(1.25)`
          }, 200)
          setTimeout(() => {
            _liS.transition = `unset`
            _liS.transform = `translateX(0px) scale(1)`
            _liS.margin = 'auto'
          }, time + 600)
        } else {
          _liS.transformOrigin = ' center'
        }
      }
    },
  },
}
</script>

<style scoped>
li {
  --scale: 1.25;
}
ul {
  --translatey: 0;
  transform: translateY(var(--translatey));
  transition: all 300ms;
  transition-timing-function: ease-in-out;
}

.active {
  transform: scale(var(--scale));
}
</style>
