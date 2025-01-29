<script setup lang="ts">
import type { HeroBlockProperties } from './HeroBlock.types';

// Input properties for component
defineProps<HeroBlockProperties>();

</script>

<template>
  <div class="hero-block">
    test
  </div>
</template>

<style lang="scss">
.hero-block {
  @apply uppercase;
  background-color: var(--primary-accent);
}
</style>
