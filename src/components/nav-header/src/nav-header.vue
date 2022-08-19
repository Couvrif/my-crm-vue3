<template>
  <div class="nav-header">
    <!-- <i class="menu-icon" :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="handleFoldClick"></i> -->
    <div class="menu-icon">
      <component :is="isFold" @click="handleFoldClick"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue'
import { ref, defineEmits } from 'vue'
const isFold = ref(Fold)
const emits = defineEmits(['handleFoldClick'])

const handleFoldClick = () => {
  if (isFold.value.name === 'Fold') {
    isFold.value = Expand
  } else {
    isFold.value = Fold
  }
  emits('foldChange', isFold.value)
  return isFold
}
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  flex: 1;

  .menu-icon {
    // font-size: 28px;
    width: 28px;
    height: 28px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
