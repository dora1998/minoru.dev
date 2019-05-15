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
export default class SideContainer extends Vue {}
</script>

<style lang="scss" scoped>
.side_container {
  display: grid;
  position: sticky;
  top: 0;
  grid-template:
    'name account' 1fr
    'menu menu' auto
    / 1fr 80px;
  row-gap: 8px;
  padding: 16px 16px 8px;
  background-color: $primary;
  color: #fff;

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
    grid-column: 1;
    grid-row: 1 / 3;
    padding: 32px;

    .menu,
    .accounts {
      margin-top: 24px;
    }
  }
}
</style>
