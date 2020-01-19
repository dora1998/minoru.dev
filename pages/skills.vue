<template>
  <main>
    <section>
      <h1 class="title">言語</h1>
      <SkillSet :skills="langs" />
    </section>
    <section>
      <h1 class="title">フレームワーク</h1>
      <SkillSet :skills="frameworks" />
    </section>
    <section>
      <h1 class="title">ツール等</h1>
      <SkillSet :skills="tools" />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { MetaInfo } from 'vue-meta'
import SkillSet, { Skill } from '~/components/SkillSet.vue'

@Component({
  head(): MetaInfo {
    return {
      title: 'Skills'
    }
  },

  components: {
    SkillSet
  }
})
export default class Skills extends Vue {
  langs: Skill[] = [
    {
      name: 'TypeScript',
      img: require('~/assets/imgs/skills/ts.svg')
    },
    {
      name: 'JavaScript',
      img: require('~/assets/imgs/skills/js.svg')
    },
    {
      name: 'Julia',
      img: require('~/assets/imgs/skills/julia.svg')
    },
    {
      name: 'Python',
      img: require('~/assets/imgs/skills/python.svg')
    },
    {
      name: 'Go',
      img: require('~/assets/imgs/skills/go.svg')
    },
    {
      name: 'C++',
      img: require('~/assets/imgs/skills/cpp.svg')
    },
    {
      name: 'Sass',
      img: require('~/assets/imgs/skills/sass.svg')
    }
  ]

  frameworks: Skill[] = [
    {
      name: 'Nuxt.js',
      img: require('~/assets/imgs/skills/nuxt.svg')
    },
    {
      name: 'Next.js',
      img: require('~/assets/imgs/skills/nextjs.svg')
    },
    {
      name: 'React',
      img: require('~/assets/imgs/skills/react.svg')
    },
    {
      name: 'Vue.js',
      img: require('~/assets/imgs/skills/vue.svg')
    },
    {
      name: 'jQuery',
      img: require('~/assets/imgs/skills/jquery.svg')
    },
    {
      name: 'Django',
      img: require('~/assets/imgs/skills/django.svg')
    }
  ]

  tools: Skill[] = [
    {
      name: 'Git',
      img: require('~/assets/imgs/skills/git.svg')
    },
    {
      name: 'Docker',
      img: require('~/assets/imgs/skills/docker.png')
    },
    {
      name: 'Webpack',
      img: require('~/assets/imgs/skills/webpack.svg')
    },
    {
      name: 'CircleCI',
      img: require('~/assets/imgs/skills/circleci.png')
    },
    {
      name: 'Netlify',
      img: require('~/assets/imgs/skills/netlify.svg')
    },
    {
      name: 'Jupyter',
      img: require('~/assets/imgs/skills/jupyter.svg')
    },
    {
      name: 'esa',
      img: require('~/assets/imgs/skills/esa.svg')
    },
    {
      name: 'Slack',
      img: require('~/assets/imgs/skills/slack.svg')
    }
  ]
}
</script>

<style lang="scss" scoped>
@include page-styles;
</style>
