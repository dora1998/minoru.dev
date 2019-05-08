<template>
  <div class="side_container">
    <MyName class="name" />
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
  display: grid;
  grid-template:
    'name account' 1fr
    'menu menu' auto
    / 1fr 80px;

  background-color: $primary;
  color: #fff;
  padding: 16px 16px 4px;

  position: sticky;
  top: 0;

  > .name {
    grid-area: name;
  }
  > .account {
    grid-area: account;
  }
  > .menu {
    grid-area: menu;
  }

  @include mq(md) {
    display: block;
    padding: 32px;
    grid-row: 1 / 3;
    grid-column: 1;

    .menu,
    .accounts {
      margin-top: 24px;
    }
  }
}
</style>
