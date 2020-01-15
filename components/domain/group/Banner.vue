<template>
  <div>
    <div
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      class="relative h-64 w-full z-10 bg-gray-500"
    >
      <div ref="slider" class="absolute images z-0 h-full w-full">
        <img :class="{ 'active': index === 0 }" class="h-full w-full object-cover inline-block" src="https://gedubar.com/wp-content/uploads/2017/08/basket-ball-1.jpg">
        <img :class="{ 'active': index === 1 }" class="h-full w-full object-cover inline-block" src="https://www.gannett-cdn.com/presto/2019/12/16/USAT/bda112e2-efd0-4464-8b24-7d6b3f0224a7-USATSI_13793959.jpg">
        <img :class="{ 'active': index === 2 }" class="h-full w-full object-cover inline-block" src="https://static01.nyt.com/images/2019/09/11/sports/11basketball/11basketball-articleLarge.jpg?quality=75&auto=webp&disable=upscale">
      </div>
      <div class="absolute z-10 bg-banner w-full h-full" />
      <div class="absolute select-none z-10 p-5 right-0">
        <div class="tag py-1 px-3 font-size-1 bg-primary font-semibold text-white w-auto inline-block right-0">
          Tersisa 2 lagi
        </div>
      </div>
      <div class="relative select-none z-10 h-56 w-full">
        <div class="flex justify-between items-center w-full h-full">
          <div @click="navigate($event, index - 1)" :class="{ 'invisible': index <= 0 }" class="md:cursor-pointer text-gray-700 text-center p-4">
            <img class="w-4" src="/arrow-left.svg" alt="" srcset="">
          </div>
          <div @click="navigate($event, index + 1)" :class="{ 'invisible': index >= 2 }" class="md:cursor-pointer text-gray-700 text-center p-4">
            <img class="w-4" src="/arrow-right.svg" alt="" srcset="">
          </div>
        </div>
      </div>
      <div class="absolute z-20 bottom-0 px-5 pb-8 w-full">
        <div class="w-full flex justify-center py-2">
          <div :class="{ 'w-3': index === 0 }" class="h-1 w-1 ml-1 bg-white rounded-lg inline-block" />
          <div :class="{ 'w-3': index === 1 }" class="h-1 w-1 ml-1 bg-white rounded-lg inline-block" />
          <div :class="{ 'w-3': index === 2 }" class="h-1 w-1 ml-1 bg-white rounded-lg inline-block" />
        </div>
        <div class="tags mb-1 font-size-1">
          <div class="bg-black text-white tag px-2 inline-block">
            Basket
          </div>
          <div class="bg-black text-white tag px-2 inline-block">
            Fun
          </div>
        </div>
        <div class="w-full flex justify-between">
          <div class="flex-col h-12">
            <div class="font-normal font-size-3 text-white">
              Bulls Basket Ball
            </div>
            <div class="font-size-1 text-white">
              Gateball 1, Senayan
            </div>
          </div>
          <div class="flex-wrap">
            <div class="avatars inline-block">
              <img class="avatar rounded-full absolute" src="/dummy/avatars/3.jpg" alt="" srcset="">
              <img class="avatar rounded-full absolute ml-3" src="/dummy/avatars/2.jpg" alt="" srcset="">
              <img class="avatar rounded-full absolute ml-6" src="/dummy/avatars/1.jpg" alt="" srcset="">
              <div class="absolute count-member ml-10">
                <div class="ml-1 counter text-center font-small rounded-lg text-white inline-block">
                  7+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-banner {
  position: absolute;
  background: linear-gradient(0deg, #195a7e, 30%, transparent 45%)
}

.tags .tag {
  padding: 2px 12px;
}

.tag {
  border-radius: 10px;
}

.avatars {
  width: 65px;
  height: 32px;
}

.avatar {
  border: 1px solid #cfcfcf;
  height: 32px;
  width: 32px;
}

.count-member {
  height: 32px;
  width: fit-content;
}

.count-member .counter {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0px 6px;
}

.images {
  white-space: nowrap;
  overflow: hidden;
}
.images img:not(:first-child) {
  margin-left: -5px
}
</style>

<script>
export default {
  data () {
    return {
      isDown: false,
      isEnter: false,
      startX: null,
      scrollLeft: null,
      index: 0,
      walk: 0,
      timeStampStart: null
    }
  },
  computed: {
    slider () {
      return this.$refs.slider
    },
    width () {
      return this.slider.children[0].width
    }
  },
  methods: {
    onTouchStart (e) {
      this.timeStampStart = e.timeStamp // timestamp start
      this.startX = e.targetTouches[0].pageX - this.slider.offsetLeft // touch horizontal position
      this.scrollLeft = this.slider.scrollLeft // distance from left
    },
    onTouchMove (e) {
      e.preventDefault()
      const x = e.targetTouches[0].pageX - this.slider.offsetLeft
      this.walk = (x - this.startX)
      this.slider.scrollLeft = this.scrollLeft - this.walk
    },
    onTouchEnd (e) {
      const diff = e.timeStamp - this.timeStampStart
      const scrollLeft = this.slider.scrollLeft
      let index = Math.round(scrollLeft / this.width)

      if (diff > 50 && (this.walk > 60 || this.walk < -60)) {
        index = this.walk > 60 ? index - 1 : index + 1
        this.moveSlide(index)
      } else { this.moveSlide(index) }
    },
    navigate (e, index) {
      e.preventDefault()
      e.stopImmediatePropagation()
      e.stopPropagation()
      this.moveSlide(index)
    },
    moveSlide (index) {
      if (index <= 0) { this.index = 0 } else if (index >= 2) { this.index = 2 } else { this.index = Math.round(index) }
      gsap.to(this.slider, { duration: 0.5, scrollTo: { x: index * this.width }, ease: 'circ' })
        .eventCallback('onComplete', () => {
          console.log('complete')
        })
      this.walk = 0
    }
  }
}
</script>
