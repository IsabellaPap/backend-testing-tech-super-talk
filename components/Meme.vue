<script setup lang="ts">
defineProps<{
  /** What image goes here, e.g. "distracted boyfriend" */
  desc: string;
  /** The punchline shown under the image */
  caption?: string;
}>();
</script>

<template>
  <div class="sa-meme">
    <div class="sa-meme-tag">🖼️ MEME — drop image here</div>
    <div class="sa-meme-desc">{{ desc }}</div>
    <div v-if="caption" class="sa-meme-caption">{{ caption }}</div>
  </div>
</template>
