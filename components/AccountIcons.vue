<template>
  <div class="account_container">
    <a
      v-for="account in accounts"
      :key="account.name"
      target="_blank"
      rel="noopener noreferrer"
      :href="account.link"
      :style="getIconStyle(account.color)"
    >
      <IconButton :icon="account.icon" :size="iconSize" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { IAccount } from '~/entities/interfaces'
import IconButton from '~/basics/IconButton.vue'
import MediaQuery, { QUERY } from '~/utils/MediaQuery'

@Component({
  components: {
    IconButton
  }
})
export default class AccountIcons extends Vue {
  iconSize: string = 'lg'

  accounts: IAccount[] = [
    {
      name: 'Twitter',
      link: 'https://twitter.com/_dorayaki_',
      icon: ['fab', 'twitter'],
      color: '#1da1f2'
    },
    {
      name: 'GitHub',
      link: 'https://github.com/dora1998',
      icon: ['fab', 'github'],
      color: '#4183c4'
    }
  ]

  getIconStyle(color: string) {
    return {
      '--brand-color': color
    }
  }

  setIconSize(size: string) {
    this.iconSize = size
  }

  mounted() {
    const setIconSizeFromMediaQuery = (ev: MediaQueryListEvent) =>
      this.setIconSize(ev.matches ? '2x' : 'lg')
    const initialMediaQueryList = MediaQuery.addListener(
      QUERY.md,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      function(ev: MediaQueryListEvent) {
        setIconSizeFromMediaQuery(ev)
      }
    )
    this.setIconSize(initialMediaQueryList.matches ? '2x' : 'lg')
  }
}
</script>

<style lang="scss" scoped>
.account_container {
  display: flex;
  justify-content: space-between;

  @include mq(md) {
    width: 180px;
    margin: 0 auto;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    transition: background-color, color 300ms 0s ease;
    border-radius: 100%;
    color: white;

    @include mq(md) {
      width: 64px;
      height: 64px;
    }

    &:hover {
      background-color: white;
      color: var(--brand-color);
    }
  }
}
</style>
