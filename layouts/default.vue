<template lang="pug">
  div.layout_container
    NameContainer.name
    nuxt.page_container
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NameContainer from '~/containers/NameContainer.vue'

@Component({
  components: {
    NameContainer
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss">
.layout_container {
  @include mq(md) {
    .page_container {
      margin-left: 320px;
    }
  }
}

html {
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
