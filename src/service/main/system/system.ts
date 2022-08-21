import myRequest from '@/service'
import { DataType } from '../../login/type'

export async function getPageListData(url: string, queryInfo: any) {
  return myRequest.post<DataType>({
    url: url,
    data: queryInfo
  })
}
