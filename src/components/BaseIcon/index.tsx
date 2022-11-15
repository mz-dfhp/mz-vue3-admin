import { Icon } from '@vicons/utils'
import { defineComponent, h } from 'vue'
export default defineComponent({
  props: {
    size: {
      type: Number,
      default: 18
    }
  },
  name: 'BaseIcon',
  render() {
    return h(<Icon size={this.size} />, null, this.$slots.default)
  }
})
