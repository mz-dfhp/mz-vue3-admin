import { defineComponent, h } from 'vue'
export default defineComponent({
  props: {
    className: {
      type: String,
      default: 'i-zondicons-brightness-up'
    }
  },
  name: 'BaseIcon',
  render() {
    return h('div', { class: this.className })
  }
})
