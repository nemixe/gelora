<template>
  <div>
    <input
      :class="{ 'w-full': isfluid, ...typeClasses }"
      :value="text"
      @click="click"
      class="text-lg py-3 rounded-full my-1 shadow"
      type="button"
    >
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    isfluid: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    click: {
      type: Function,
      default () {}
    }
  },
  data () {
    return {
      typeClasses: {
        'bg-primary text-white': this.type === 'primary',
        'bg-white text-gray-500': this.type === 'secondary'
      }
    }
  }
}
</script>
