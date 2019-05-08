<template>
  <div class="container">
    <div v-for="attr in attrs" :key="attr.name" class="attribution">
      <div v-if="attr.icon" class="icon">
        <font-awesome-icon :icon="attr.icon" fixed-width />
      </div>
      <div v-else class="name" v-text="attr.name" />
      <div v-if="attr.link" class="text">
        <a :href="attr.link" class="link" v-text="attr.text" />
      </div>
      <div v-else class="text" v-text="attr.text" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Profile extends Vue {
  attrs: Attribution[] = [
    {
      name: 'University',
      icon: 'school',
      text: '京都大学 工学部電気電子工学科 B3'
    },
    {
      name: 'Birthday',
      icon: 'birthday-cake',
      text: '1998/05/22'
    },
    {
      name: 'Qiita',
      text: 'dora1998',
      link: 'https://qiita.com/dora1998'
    },
    {
      name: 'Wantedly',
      text: 'プロフィール',
      link: 'https://www.wantedly.com/users/36717718'
    }
  ]
}

interface Attribution {
  name: string
  icon?: string | string[]
  text?: string
  link?: string
}
</script>

<style lang="scss" scoped>
.container {
  padding: 8px;
}
.attribution {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  > .icon {
    margin-right: 8px;
  }
  > .name {
    min-width: 100px;
  }
  > .text {
    flex-grow: 1;
  }
  > .text > .link {
    overflow-wrap: break-word;
  }
}
</style>
