<template>
  <div class="account_container">
    <a
      v-for="account in accounts"
      :key="account.name"
      :href="account.link"
      :style="getIconStyle(account.color)"
    >
      <IconButton :icon="account.icon" :size="iconSize" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import IconButton from '~/basics/IconButton.vue'

import MediaQuery, { QUERY } from '~/utils/MediaQuery'

@Component({
  components: {
    IconButton
  }
})
export default class Index extends Vue {
  iconSize: string = 'lg'

  accounts: Account[] = [
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
    const setIconSizeFromMediaQuery = (mql: MediaQueryList) =>
      this.setIconSize(mql.matches ? '2x' : 'lg')
    const initialMediaQueryList = MediaQuery.addListener(
      QUERY.md,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      function(ev: MediaQueryListEvent) {
        setIconSizeFromMediaQuery(this)
      }
    )
    setIconSizeFromMediaQuery(initialMediaQueryList)
  }
}

interface Account {
  name: string
  link: string
  icon: string | string[]
  color: string
}
</script>

<style lang="scss" scoped>
.account_container {
  display: flex;
  justify-content: space-between;

  @include mq(md) {
    margin: 0 auto;
    width: 180px;
  }

  a {
    width: 32px;
    height: 32px;
    @include mq(md) {
      width: 64px;
      height: 64px;
    }

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    border-radius: 100%;
    transition: all 300ms 0s ease;

    &:hover {
      color: var(--brand-color);
      background-color: white;
    }
  }
}
</style>
