<template>
  <div>
    <div v-for="work in works" :key="work.name">
      <h2 v-text="work.name" />

      <div>
        <div v-if="work.website" class="attribution">
          <div class="icon">
            <font-awesome-icon icon="globe-asia" fixed-width />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="work.website"
            class="link"
            v-text="work.website"
          />
        </div>

        <div v-if="work.github" class="attribution">
          <div class="icon">
            <font-awesome-icon :icon="['fab', 'github']" fixed-width />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="work.github"
            class="link"
            v-text="work.github"
          />
        </div>
      </div>

      <div v-text="work.body" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IWork } from '~/entities/interfaces'
import { storeWorks } from '~/store/works'

@Component({})
export default class WorkList extends Vue {
  public mounted() {
    storeWorks.fetch()
  }

  get works(): IWork[] {
    return storeWorks.works
  }
}
</script>

<style lang="scss" scoped>
.attribution {
  @include attribution;
}
</style>
