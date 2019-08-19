<template>
  <div class="container">
    <div v-for="a in activities" :key="a.name" class="activity">
      <div class="date">
        <span v-text="a.start" />
        <span v-if="a.end">~</span>
        <span v-if="a.end" v-text="a.end" />
      </div>
      <div class="body">
        <span v-text="a.name" />
        <span v-if="a.result" class="result" v-text="a.result" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IActivity } from '../entities/interfaces'

@Component({})
export default class ActivityList extends Vue {
  activities: IActivity[] = [
    {
      name: 'CAMPHOR- 運営',
      start: '2019/2',
      end: '現在'
    },
    {
      name: 'Unimap 開発スタッフ',
      start: '2018/8',
      end: '現在'
    },
    {
      name: 'Wantedly インターン(Web Frontend)',
      start: '2019/8'
    },
    {
      name: 'git challenge #11',
      result: '優勝',
      start: '2019/5'
    },
    {
      name: 'Web Frontend Challenge 2019',
      result: '優勝',
      start: '2019/3'
    },
    {
      name: 'パソコン甲子園2014 モバイル部門',
      result: '本選出場',
      start: '2014/11'
    }
  ]
}
</script>

<style lang="scss" scoped>
.activity {
  @include mq(md) {
    display: flex;

    > .date {
      width: 150px;
      margin-right: 16px;
    }

    > .body {
      flex-grow: 1;
    }
  }

  > .body > .result {
    font-weight: bold;
  }

  margin-bottom: 4px;
}
</style>
