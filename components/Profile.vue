<template>
  <div class="container">
    <img class="prof_illust" src="~/assets/imgs/prof_illust.jpeg" />
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
  display: flex;
  align-items: flex-start;
  padding: 8px;

  > .prof_illust {
    display: none;

    @include mq(md) {
      display: block;
      width: 100px;
      margin-right: 16px;
    }
  }

  > .attrs {
    flex-grow: 1;

    > .attribution {
      @include attribution;
    }
  }
}
</style>
