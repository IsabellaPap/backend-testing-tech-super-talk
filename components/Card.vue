<script setup lang="ts">
defineProps<{
  title?: string;
  /** 'win' | 'fail' | undefined → neutral */
  kind?: "win" | "fail";
}>();
</script>

<template>
  <div
    class="sa-card"
    :class="{ 'is-win': kind === 'win', 'is-fail': kind === 'fail' }"
  >
    <div v-if="title" class="sa-card-title">{{ title }}</div>
    <slot />
  </div>
</template>
