<template>
  <div class="full-content">
    <svgCpn name="quanping" @click="handleFull"></svgCpn>
  </div>
</template>

<script setup lang="ts">
import screenfull from "screenfull";
import { ElMessage } from "element-plus/lib/index";
import svgCpn from "@/base-ui/svgIcons";

const handleFull = () => {
  if (!screenfull.isEnabled) {
    ElMessage({
      message: "不支持全屏",
      type: "warning",
    });
    return false;
  }
  screenfull.toggle();
};
</script>

<style scoped lang="less">
.full-content {
  margin-right: 15px;
}
</style>
