<template>
  <div class="container">
    <p v-for="l in licenses" :key="l.name">
      {{ l.name }} by
      <a :href="l.ownerUrl"> {{ l.owner }} </a>
      is licensed under
      <a :href="l.licenseUrl"> {{ l.licenseName }} </a>.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface License {
  name: string
  owner: string
  ownerUrl: string
  licenseName: string
  licenseUrl: string
}

@Component({})
export default class LicenseList extends Vue {
  @Prop({ default: [] }) readonly licenses!: License[]
}
</script>

<style lang="scss" scoped>
.container {
  padding: 16px;
  border-radius: 8px;
  background-color: $bg-info;

  p {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }

    @include mq(md) {
      margin-bottom: 0;
    }
  }
}
</style>
