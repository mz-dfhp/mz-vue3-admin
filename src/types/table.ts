import ProTable from '@/components/ProTable/index.vue'
import { TableColumnCtx } from 'element-plus'

export interface ColumnProps<T = any>
  extends Partial<
    Omit<TableColumnCtx<T>, 'children' | 'renderHeader' | 'renderCell'>
  > {
  headerRender?: (row: ColumnProps) => any
  render?: (scope: { row: T; $index: number }) => any
  _children?: ColumnProps<T>[]
}

export type TProTableRef = InstanceType<typeof ProTable>
