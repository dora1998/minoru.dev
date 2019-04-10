<template lang="pug">
    div.container
        span Minoru
        span Takeuchi
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  background-color: $primary;
  color: #fff;
  padding: 16px;

  @include mq(md) {
    padding: 32px;
    width: 320px;
    height: 100vh;

    position: fixed;
    left: 0;
    top: 0;
  }
}

span {
  margin-right: 8px;

  @include mq(md) {
    display: block;
    text-align: left;
    margin: 0;
    font-size: 3em;
  }
}
</style>
