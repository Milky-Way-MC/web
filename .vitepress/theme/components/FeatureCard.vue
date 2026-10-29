<script setup>
defineProps({
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
</script>

<template>
    <div class="FeatureCard" :class="[`ratio-${ratio}`, { 'reversed': reverse }]">
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

<style>
.FeatureCard {
    display: flex;
    flex-direction: column;
    gap: 24px;

    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-border);
    border-radius: 12px;

    padding: 24px;
    margin: 16px 0;

    .text {
        h3 {
            margin: 0;
        }

        p {
            margin: 0;
            color: var(--vp-c-text-2);
        }
    }

    .image {
        display: flex;
        align-items: center;
        justify-content: center;

        :deep(img) {
            width: 100%;
            height: auto;
            object-fit: cover;
            display: block;

            border-radius: 12px;
        }
    }
}

@media (min-width: 960px) {
    .FeatureCard {
        display: grid;
        align-items: center;

        &.reversed {
            .text {
                order: 2;
            }

            .image {
                order: 1;
            }
        }

        &.ratio-2-3 {
            grid-template-columns: 2fr 3fr;
        }

        &.ratio-3-2 {
            grid-template-columns: 3fr 2fr;
        }

        .image {
            :deep(img) {
                height: 100%;
                max-height: 400px;
            }
        }
    }
}
</style>