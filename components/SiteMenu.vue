<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.name"
      :class="{ active: item.name == currentItem }"
    >
      <nuxt-link :to="{ name: item.name }" v-text="item.text" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IMenuItem } from '~/entities/interfaces'

@Component({})
export default class SiteMenu extends Vue {
  items: IMenuItem[] = [
    {
      text: 'Top',
      name: 'index'
    },
    {
      text: 'Works',
      name: 'works'
    }
  ]

  get currentItem(): string | undefined {
    return this.$route.name
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0;
  list-style-type: none;

  @include mq(md) {
    display: block;
    width: 60%;
    margin: 0 auto;
  }

  li {
    > a {
      display: block;
      width: 100px;
      height: 100%;
      padding: 8px;
      border-radius: 8px;
      color: #fff;
      text-align: center;
      text-decoration: none;

      @include mq(md) {
        width: auto;
        height: auto;
        margin: 16px;
      }

      &:hover {
        border: 1px solid #fff;
      }
    }

    &.active > a {
      background-color: #fff;
      color: $primary;

      &:hover {
        border: none;
      }
    }
  }
}
</style>
