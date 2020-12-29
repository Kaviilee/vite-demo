import { defineComponent, ref } from 'vue'
import './index.less'

const Clipboard = defineComponent({
  setup() {
    const help = ref('单击复制')

    const initClipboard = () => {
      document.addEventListener('copy', (e) => {
        e.clipboardData?.setData('text/plain', 'Hello world')

        e.preventDefault()
      })
    }

    const copyActive = () => {
      const copy = document.getElementById('copy') as HTMLInputElement;
      // copy.select();

      /** 1
       * document.execCommand('copy')
       */
      /* const range = document.createRange();
      window.getSelection()?.removeAllRanges();
      range.selectNode(copy);
      window.getSelection()?.addRange(range);

      const success = document.execCommand('copy')

      if (success) {
        help.value = '已将文本复制到剪贴板'
      } else {
        help.value = '复制失败'
      } */

      /** 2
       * navigator.clipboard
       */
      /* if (copy) {
        navigator.clipboard.writeText(copy.value).then(() => {
          help.value = '复制成功'
        }).catch(err => {
          help.value = '复制失败'
          console.error(err)
        })
      } */

      /** 3
       * clipboard Event API
       */
      const copyEvent = new ClipboardEvent('copy')
      copyEvent.clipboardData?.items
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
