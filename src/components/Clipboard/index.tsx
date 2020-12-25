import { defineComponent, ref } from 'vue'
import './index.less'

const Clipboard = defineComponent({
  setup() {
    const help = ref('单击复制')
    const copyActive = () => {
      const copy = document.getElementById('copy') as HTMLInputElement;
      console.log(copy?.value)
      // copy.select();
      const range = document.createRange();
      window.getSelection()?.removeAllRanges();
      range.selectNode(copy);
      window.getSelection()?.addRange(range);

      const success = document.execCommand('copy')

      if (success) {
        help.value = '已将文本复制到剪贴板'
      } else {
        help.value = '复制失败'
      }

      // if (copy) {
      //   navigator.clipboard.writeText(copy.value).then(() => {
      //     help.value = '复制成功'
      //   }).catch(err => {
      //     help.value = '复制失败'
      //     console.error(err)
      //   })
      // }
    }

    return {
      copyActive,
      help,
    }
  },

  render() {
    return (
      <div class="copy-container">
        <pre
          id="copy"
          class="pre"
        >This is a test</pre>
        <div class="help" onClick={this.copyActive}>{this.help}</div>
      </div>
    )
  }

})

export default Clipboard
