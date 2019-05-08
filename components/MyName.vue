<template lang="pug">
    div.myname
        span Minoru
        span Takeuchi
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.myname {
  flex-grow: 1;
}
.myname > span {
  margin-right: 8px;
  font-size: 1.5em;

  @include mq(md) {
    display: block;
    text-align: left;
    margin: 0;
    font-size: 3em;
  }
}
</style>
