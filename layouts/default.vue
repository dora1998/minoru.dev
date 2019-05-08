<template lang="pug">
  div.layout_container
    SideContainer.name
    nuxt.page_container
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SideContainer from '~/containers/SideContainer.vue'

@Component({
  components: {
    SideContainer
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss">
.layout_container {
  display: grid;
  grid-template-rows: 48px 1fr;
  grid-template-columns: 320px 1fr;
  width: 100%;
  height: 100vh;

  .page_container {
    overflow: auto;
    grid-row-start: 2;
    grid-row-end: auto;
  }

  @include mq(md) {
    .page_container {
      grid-column-start: 2;
      grid-column-end: auto;
      grid-row-start: 1;
      grid-row-end: 3;
      padding: 16px;
    }
  }
}

html {
  box-sizing: border-box;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
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
