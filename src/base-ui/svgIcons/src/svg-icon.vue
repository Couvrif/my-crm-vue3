<template>
  <div class="svgIcon">
    <svg aria-hidden="true" class="svgClass" :style="iconStyle">
      <use :href="symbolId" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  prefixName: {
    type: String,
    default: "icon",
  },
  iconStyle: {
    type: String,
    default: () => {
      return { width: "30px", height: "30px" };
    },
  },
});

const { name, prefixName } = toRefs(props);
const symbolId = `#${prefixName?.value}-${name?.value}`;
</script>

<style scoped lang="less">
.svgClass {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
