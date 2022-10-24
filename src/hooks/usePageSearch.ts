import pageContent from "@/components/page-content";
import { ref } from "vue";

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>();

  const queryBtnClick = (queryInfo?: any) => {
    pageContentRef.value?.getPageList(queryInfo);
  };

  const resetBtnClick = () => {
    pageContentRef.value?.getPageList();
  };

  return { pageContentRef, queryBtnClick, resetBtnClick };
}
