import myRequest from '@/service'
import { DataType } from '../../login/type'

export async function getPageListData(url: string, baseInfo: any, queryInfo: any = {}) {
  return myRequest.post<DataType>({
    url: url,
    data: { ...baseInfo, ...queryInfo }
  })
}

export async function deletePageData(url: string) {
  return myRequest.delete<DataType>({
    url: url
  })
}

export async function createPageData(url: string, newData: any) {
  return myRequest.post<DataType>({
    url: url,
    data: newData
  })
}

export async function updatePageData(url: string, newData: any) {
  return myRequest.patch<DataType>({
    url: url,
    data: newData
  })
}
