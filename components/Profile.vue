<template>
  <div class="container">
    <div class="introduction">
      <p>
        最近は、Web開発を中心に勉強しており、Webフロントエンドが主な得意分野です。
      </p>
    </div>
    <div class="attrs">
      <div v-for="attr in attrs" :key="attr.name" class="attribution">
        <div v-if="attr.icon" class="icon">
          <font-awesome-icon :icon="attr.icon" fixed-width />
        </div>
        <div v-else class="name" v-text="attr.name" />
        <div v-if="attr.link" class="text">
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="attr.link"
            class="link"
            v-text="attr.text"
          />
        </div>
        <div v-else class="text" v-text="attr.text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IAttribution } from '~/entities/interfaces'

@Component({})
export default class Profile extends Vue {
  attrs: IAttribution[] = [
    {
      name: 'University',
      icon: 'school',
      text: '京都大学 工学部電気電子工学科 B4'
    },
    {
      name: 'Birthday',
      icon: 'birthday-cake',
      text: '1998/05/22'
    },
    {
      name: '好きな言語',
      text: 'TypeScript, Julia'
    },
    {
      name: '趣味',
      text: 'カメラ, ガジェット収集, 電子決済/送金, ピアノ'
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
    },
    {
      name: 'Email',
      text: 'me[at]minoru.dev'
    }
  ]
}
</script>

<style lang="scss" scoped>
.container {
  padding: 8px;

  > .introduction {
    margin-bottom: 16px;
  }

  > .attrs {
    > .attribution {
      @include attribution;
    }
  }
}
</style>
