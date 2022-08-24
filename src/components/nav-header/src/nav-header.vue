<template>
  <div class="nav-header">
    <!-- <i class="menu-icon" :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="handleFoldClick"></i> -->
    <div class="menu-icon">
      <component :is="isFold" @click="handleFoldClick"></component>
    </div>
    <div class="content">
      <div class="bread">
        <myBreadcrumbVue :breadcrumbs="breadcrumbs"></myBreadcrumbVue>
      </div>
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
            <span>{{ name }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleOut">退出登录</el-dropdown-item>
              <el-dropdown-item>用户信息</el-dropdown-item>
              <el-dropdown-item>系统管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Expand, Fold, User } from '@element-plus/icons-vue'
import myBreadcrumbVue from '@/base-ui/breadcrumb/src/my-breadcrumb.vue'
import { pathMapBreadcrumbs } from '@/utils/initRouter'
import { useRoute, useRouter } from 'vue-router'
import cache from '@/utils/cache'
import store from '@/store'
import { ref, defineEmits, computed } from 'vue'
import { ElMessageBox } from 'element-plus/lib/index'
import 'element-plus/theme-chalk/index.css'

const { login } = store()
const router = useRouter()
const emits = defineEmits(['foldChange'])

const isFold = ref(Expand)
const name = login.userInfo.name

const handleFoldClick = () => {
  if (isFold.value.name === 'Fold') {
    isFold.value = Expand
  } else {
    isFold.value = Fold
  }
  emits('foldChange', isFold.value.name)
  return isFold
}

const breadcrumbs = computed(() => {
  const userMenus = login.menus
  const route = useRoute()
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})

const handleOut = () => {
  ElMessageBox.confirm('您确定要退出登录嘛?')
    .then(() => {
      cache.deleteCache('token')
      router.push('/main')
    })
    .catch(() => {
      // catch error
    })
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

    .el-icon {
      font-size: 20px;
    }

    .el-dropdown-link {
      display: flex;
      span {
        margin: auto;
        padding: 0 8px;
      }
    }
  }
}
</style>
