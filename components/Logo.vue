<script setup lang="ts">
import logoWhite from "../assets/snapaddy-logo-white.svg";
import logoGreen from "../assets/snapaddy-logo.svg";

withDefaults(
  defineProps<{
    height?: number;
    /** white monochrome logo, for darkgreen-700 (inverse) slides */
    inverse?: boolean;
  }>(),
  { height: 28, inverse: false },
);
</script>

<template>
  <img
    :src="inverse ? logoWhite : logoGreen"
    alt="snapAddy"
    :style="{ height: height + 'px' }"
  />
</template>
