<template>
  <div class="side_container">
    <MyName />
    <SiteMenu class="menu" />
    <AccountIcons class="accounts" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyName from '~/components/MyName.vue'
import SiteMenu from '~/components/SiteMenu.vue'
import AccountIcons from '~/components/AccountIcons.vue'

@Component({
  components: {
    MyName,
    SiteMenu,
    AccountIcons
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.side_container {
  background-color: $primary;
  color: #fff;
  padding: 16px;

  @include mq(md) {
    padding: 32px;
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: auto;
  }

  .menu,
  .accounts {
    margin-top: 24px;
  }
}
</style>
