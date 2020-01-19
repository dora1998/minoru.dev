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

    <section class="licenses">
      <LicenseList :licenses="licenses" />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { MetaInfo } from 'vue-meta'
import SkillSet, { Skill } from '~/components/SkillSet.vue'
import LicenseList, { License } from '~/components/LicenseList.vue'

@Component({
  head(): MetaInfo {
    return {
      title: 'Skills'
    }
  },

  components: {
    LicenseList,
    SkillSet
  }
})
export default class Skills extends Vue {
  langs: Skill[] = [
    {
      name: 'TypeScript',
      img: require('~/assets/imgs/skills/ts.svg'),
      link: 'https://www.typescriptlang.org/'
    },
    {
      name: 'JavaScript',
      img: require('~/assets/imgs/skills/js.svg'),
      link: 'https://developer.mozilla.org/ja/docs/Web/JavaScript'
    },
    {
      name: 'Julia',
      img: require('~/assets/imgs/skills/julia.svg'),
      link: 'https://julialang.org/'
    },
    {
      name: 'Python',
      img: require('~/assets/imgs/skills/python.svg'),
      link: 'https://www.python.org/'
    },
    {
      name: 'Go',
      img: require('~/assets/imgs/skills/go.svg'),
      link: 'https://golang.org/'
    },
    {
      name: 'C++',
      img: require('~/assets/imgs/skills/cpp.svg'),
      link: 'https://isocpp.org/'
    },
    {
      name: 'Sass',
      img: require('~/assets/imgs/skills/sass.svg')
    }
  ]

  frameworks: Skill[] = [
    {
      name: 'Nuxt.js',
      img: require('~/assets/imgs/skills/nuxt.svg'),
      link: 'https://ja.nuxtjs.org/'
    },
    {
      name: 'Next.js',
      img: require('~/assets/imgs/skills/nextjs.svg'),
      link: 'https://nextjs.org/'
    },
    {
      name: 'React',
      img: require('~/assets/imgs/skills/react.svg'),
      link: 'https://ja.reactjs.org/'
    },
    {
      name: 'Vue.js',
      img: require('~/assets/imgs/skills/vue.svg'),
      link: 'https://vuejs.org/'
    },
    {
      name: 'jQuery',
      img: require('~/assets/imgs/skills/jquery.svg'),
      link: 'https://jquery.com/'
    },
    {
      name: 'Django',
      img: require('~/assets/imgs/skills/django.svg'),
      link: 'https://www.djangoproject.com/'
    }
  ]

  tools: Skill[] = [
    {
      name: 'Git',
      img: require('~/assets/imgs/skills/git.svg'),
      link: 'https://git-scm.com/'
    },
    {
      name: 'Docker',
      img: require('~/assets/imgs/skills/docker.png'),
      link: 'https://www.docker.com/'
    },
    {
      name: 'Webpack',
      img: require('~/assets/imgs/skills/webpack.svg'),
      link: 'https://webpack.js.org/'
    },
    {
      name: 'CircleCI',
      img: require('~/assets/imgs/skills/circleci.png'),
      link: 'https://circleci.com/'
    },
    {
      name: 'Netlify',
      img: require('~/assets/imgs/skills/netlify.svg'),
      link: 'https://www.netlify.com/'
    },
    {
      name: 'Jupyter',
      img: require('~/assets/imgs/skills/jupyter.svg'),
      link: 'https://jupyter.org/'
    },
    {
      name: 'esa',
      img: require('~/assets/imgs/skills/esa.svg'),
      link: 'https://esa.io/'
    },
    {
      name: 'Slack',
      img: require('~/assets/imgs/skills/slack.svg'),
      link: 'https://slack.com/intl/ja-jp/'
    }
  ]

  licenses: License[] = [
    {
      name: 'Julia Logo',
      owner: 'Stefan Karpinski',
      ownerUrl: 'mailto:stefan@karpinski.org',
      licenseName: 'CC BY-NC-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-nc-sa/4.0/'
    },
    {
      name: 'Sass Logo',
      owner: 'Sass Lang',
      ownerUrl: 'mailto:community@sass-lang.com',
      licenseName: 'CC BY-NC-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/3.0/'
    },
    {
      name: 'Vue.js artworks',
      owner: 'Evan You',
      ownerUrl: 'http://evanyou.me/',
      licenseName: 'CC BY-NC-SA 4.0',
      licenseUrl: 'http://creativecommons.org/licenses/by-nc-sa/4.0/'
    },
    {
      name: 'Git Logo',
      owner: 'Jason Long',
      ownerUrl: 'https://twitter.com/jasonlong',
      licenseName: 'CC BY-NC-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/3.0/'
    },
    {
      name: 'esa Logo',
      owner: 'esa',
      ownerUrl: 'https://esa.io',
      licenseName: 'CC BY-NC-ND 4.0',
      licenseUrl: 'http://creativecommons.org/licenses/by-nc-nd/4.0/deed.ja'
    }
  ]
}
</script>

<style lang="scss" scoped>
@include page-styles;

.licenses {
  margin-top: 32px;

  @include mq(md) {
    margin-top: 64px;
  }
}
</style>
