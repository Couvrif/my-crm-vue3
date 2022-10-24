<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">CHENN_CMS</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="#0c2135"
      :collapse="isCollapse"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in menus" :key="item.id">
        <template v-if="item.children && item.children.length">
          <el-sub-menu v-if="item.type === 1" :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="item2 in item.children" :key="item2.id">
              <el-menu-item :index="item2.id + ''" @click="handleMenu(item2)">
                <i v-if="item2.icon" :class="item2.icon"></i>
                <span>{{ item2.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import Store from "@/store";
import { pathMapToMenu } from "@/utils/initRouter";

const { login } = Store();
const { menus } = login;
const router = useRouter();
const route = useRoute();
const props = defineProps({
  isCollapse: {
    type: Boolean,
  },
});
const { isCollapse } = toRefs(props);
const currentRoute = route.path;
const currentMenu = pathMapToMenu(login.menus, currentRoute);

const defaultValue = ref(currentMenu.id + "");

const handleMenu = (menu: any) => {
  console.log(menu);

  router.push({
    path: menu.url ?? "/not-found",
  });
};
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
