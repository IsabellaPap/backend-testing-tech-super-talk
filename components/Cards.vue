<script setup lang="ts">
withDefaults(defineProps<{ cols?: number }>(), { cols: 3 });
</script>

<template>
  <div class="sa-cards mt-6" :style="{ '--cols': cols }">
    <slot />
  </div>
</template>
