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
export default class LayoutDefault extends Vue {}
</script>

<style lang="scss">
.layout_container {
  width: 100%;

  .page_container {
    padding: 16px;

    @include mq(md) {
      grid-column: 2;
      padding: 24px;
      overflow-y: auto;
    }
  }

  @include mq(md) {
    display: grid;
    grid-template: 1fr / 320px 1fr;
    height: 100vh;
  }
}

html {
  box-sizing: border-box;
  font-family: 'Hiragino Kaku Gothic ProN', 'Hiragino Kaku Gothic Pro',
    '游ゴシック Medium', 'YuGothic', 'YuGothicM', 'メイリオ', 'Meiryo',
    sans-serif;
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
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
