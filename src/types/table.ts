import { TableColumnCtx } from 'element-plus'

export interface ColumnProps<T = any>
  extends Partial<
    Omit<TableColumnCtx<T>, 'children' | 'renderHeader' | 'renderCell'>
  > {
  headerRender?: (row: ColumnProps) => any
  render?: (scope: { row: T }) => any
  _children?: ColumnProps<T>[]
}
