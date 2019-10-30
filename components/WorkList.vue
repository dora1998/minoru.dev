<template>
  <div>
    <div v-for="work in works" :key="work.name" class="work">
      <h2 class="name" v-text="work.name" />

      <div class="attributions">
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

      <div v-html="$md.render(work.body)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { IWork } from '~/entities/interfaces'
import { VStoreComponent } from '@/utils/vuex-simple'

@Component({})
export default class WorkList extends VStoreComponent {
  public mounted() {
    this.store.works.fetch()
  }

  get works(): IWork[] {
    return this.store.works.works
  }
}
</script>

<style lang="scss" scoped>
.work {
  @include card-layout;

  margin-bottom: 16px;

  > .name {
    margin-bottom: 8px;
  }
}

.attributions {
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;

  > .attribution {
    @include attribution;

    > .link {
      font-size: 0.8em;
      word-break: break-all;

      @include mq(md) {
        font-size: 1em;
      }
    }
  }
}
</style>
