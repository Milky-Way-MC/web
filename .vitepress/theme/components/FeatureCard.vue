<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  ratio: {
    type: String,
    default: '2-3',
    validator: (v) => ['2-3', '3-2'].includes(v)
  },
  reverse: {
    type: Boolean,
    default: false
  }
})

const ratioClass = computed(() => `ratio-${props.ratio}`)
</script>

<template>
  <div 
    class="FeatureCard" 
    :class="[ratioClass, { 'is-reversed': reverse }]"
  >
    <div class="text">
      <h3 v-if="title">{{ title }}</h3>
      <slot />
    </div>

    <div v-if="image || $slots.image" class="image">
      <slot name="image">
        <img :src="image" :alt="alt || title" loading="lazy" />
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.FeatureCard {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft-up);
  overflow: hidden;
  transition: border-color 0.25s, background-color 0.25s;

  &:hover {
    border-color: var(--vp-c-brand-1);
  }

  &.is-reversed {
    .text {
      order: 2;
    }
    .image {
      order: 1;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1.25rem;

    :deep(h3) {
      margin: 0 0 0.5rem 0;
      padding: 0;
      border: none;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.3;
      color: var(--vp-c-text-1);
    }

    :deep(p) {
      margin: 0;
      color: var(--vp-c-text-2);
      line-height: 1.6;
    }

    :deep(span i) {
      white-space: nowrap;
    }
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    :deep(p),
    :deep(img) {
      margin: 0;
    }

    :deep(img) {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 8px;
      display: block;
    }
  }
}

@media (min-width: 960px) {
  .FeatureCard {
    display: grid;
    align-items: center;

    &.ratio-2-3 {
      grid-template-columns: 2fr 3fr;
    }

    &.ratio-3-2 {
      grid-template-columns: 3fr 2fr;
    }

    &.is-reversed {
      &.ratio-2-3 {
        grid-template-columns: 3fr 2fr;
      }

      &.ratio-3-2 {
        grid-template-columns: 2fr 3fr;
      }

      .text {
        order: 2;
      }

      .image {
        order: 1;
      }
    }

    .text {
      padding: 2rem;

      :deep(h3) {
        font-size: 1.5rem;
      }
    }

    .image {
      padding: 1.25rem;

      :deep(img) {
        height: 100%;
        max-height: 400px;
      }
    }
  }
}
</style>