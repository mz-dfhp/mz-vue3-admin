import { defineComponent } from 'vue'
const Demo = () => (
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
)
export default defineComponent({
  props: {},
  name: 'Tsx',
  setup() {
    const change = () => {
      console.log('我是通过jsx语法写的页面')
    }
    return () => (
      <el-card>
        <Demo />
        <el-button type="danger" onClick={change}>
          我是通过jsx语法写的页面
        </el-button>
      </el-card>
    )
  }
})
