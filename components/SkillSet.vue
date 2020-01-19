<template>
  <div class="container">
    <a v-for="s in skills" :key="s.name" :href="s.link || '#'">
      <img :src="s.img" :alt="s.name" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface Skill {
  name: string
  img: string
  link?: string
}
@Component({})
export default class SkillSet extends Vue {
  @Prop({ default: [] }) readonly skills!: Skill[]
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-auto-rows: auto;
  grid-column-gap: 48px;
  grid-row-gap: 32px;
  grid-template-columns: repeat(auto-fit, 120px);
  align-items: center;
  justify-content: center;
  margin: 32px 0;

  @include mq(lg) {
    padding: 0 64px;
  }

  img {
    width: 100%;
    object-fit: contain;
    max-height: 64px;
  }
}
</style>
