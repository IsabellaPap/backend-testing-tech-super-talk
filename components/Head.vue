<script setup lang="ts">
defineProps<{
  /** first name */
  name: string;
  height: number;
}>();
</script>

<template>
  <img :src="'../assets/' + name + '.jpg'" :style="{ height: height + 'px' }" />
</template>
