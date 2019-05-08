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
  width: 60%;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  li {
    a {
      display: block;
      padding: 8px;
      margin: 16px;

      text-align: center;
      color: #fff;
      text-decoration: none;

      border-radius: 8px;

      &:hover {
        background-color: #fff;
        color: $primary;
      }
    }
  }
}
</style>
