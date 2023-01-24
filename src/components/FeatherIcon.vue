<template>
  <div class="feather-icon" v-html="html" />
</template>

<script>
const feather = require("feather-icons");

export default {
  name: "FeatherIcon",

  props: {
    icon: {
      type: String,
      required: true
    },

    width: {
      type: Number,
      default: 16
    },

    height: {
      type: Number,
      default: 16
    },

    color: {
      type: String,
      default: "currentColor"
    },
    
    fill: {
      type: String,
      default: "none"
    }
  },

  computed: {
    html() {
      return feather.icons[this.icon].toSvg({ width: this.width, height: this.height, color: this.color, fill: this.fill });
    }
  }
}
</script>
