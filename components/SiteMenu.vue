<template>
  <ul>
    <li v-for="item in items" :key="item.name">
      <a :href="item.link" v-text="item.name"></a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {
  items: MenuItem[] = [
    {
      name: 'Top',
      link: '/',
      icon: ''
    },
    {
      name: 'Works',
      link: '/works/',
      icon: ''
    },
    {
      name: 'Contact',
      link: '/contact/',
      icon: ''
    }
  ]
}

interface MenuItem {
  name: string
  link: string
  icon: string
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
    a {
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
        background-color: #fff;
        color: $primary;
      }
    }
  }
}
</style>
