import myRequest from '@/service'
import { DataType } from '../../login/type'

export async function getPageListData(url: string, baseInfo: any, queryInfo: any = {}) {
  return myRequest.post<DataType>({
    url: url,
    data: { ...baseInfo, ...queryInfo }
  })
}
