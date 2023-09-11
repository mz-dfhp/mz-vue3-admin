<template>
  <div>
    <el-card shadow="hover">
      <el-button type="primary"> 表格封装 不影响element-plus table </el-button>
      <el-button type="primary"> element-plus怎么用就怎么用 </el-button>
    </el-card>
    <br />
    <el-card shadow="hover">
      <el-button type="primary">columns:</el-button>{{ columns }}
    </el-card>
    <br />
    <el-card shadow="hover">
      <div flex>
        <el-button type="primary">是否选择</el-button>
        <div m-l-10px>{{ tableRef?.isSelected }}</div>
      </div>
      <br />
      <div flex>
        <el-button type="primary">选择的数据</el-button>
        <div m-l-10px>{{ tableRef?.selectedList }}</div>
      </div>
      <br />
      <div flex>
        <el-button type="primary">选择的id</el-button>
        <div m-l-10px>{{ tableRef?.selectedListIds }}</div>
      </div>
    </el-card>
    <br />
    <el-card shadow="hover">
      <ProTable
        ref="tableRef"
        :data="tableState.list"
        :columns="columns"
        v-loading="tableState.loading"
        row-key="id"
      >
        <template #operation="{ row }">
          <el-button type="primary" size="small">
            查看{{ row.id || '' }}
          </el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </ProTable>
    </el-card>
  </div>
</template>
<script setup lang="tsx" name="Table">
import { reactive, ref } from 'vue'
import ProTable, {
  type TProTableRef,
  type ColumnProps
} from '@/components/ProTable/index.vue'
const tableRef = ref<TProTableRef>()

const tableState = reactive({
  list: [
    {
      id: 1,
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home'
    },
    {
      id: 2,
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Office'
    },
    {
      id: 3,
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home'
    },
    {
      id: 4,
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Office'
    }
  ],
  loading: false
})
const columns: ColumnProps[] = [
  {
    type: 'selection',
    width: 100
  },
  {
    type: 'expand',
    width: 100,
    render: () => <el-button type="primary">jsx</el-button>
  },
  {
    label: 'Index',
    type: 'index',
    width: 100
  },
  {
    label: 'Date',
    prop: 'date',
    minWidth: 120
  },
  {
    label: 'Name',
    prop: 'name',
    minWidth: 120
  },
  {
    label: 'State',
    prop: 'state',
    minWidth: 120
  },
  {
    label: 'City',
    prop: 'city',
    minWidth: 120
  },
  {
    label: 'Address',
    prop: 'address',
    minWidth: 120
  },
  {
    label: 'Zip',
    prop: 'zip',
    minWidth: 120
  },
  {
    label: 'Zip',
    prop: 'zip',
    minWidth: 120
  },
  {
    label: '操作',
    prop: 'operation',
    width: 200,
    fixed: 'right'
  }
]
</script>
<style scoped lang="scss"></style>
