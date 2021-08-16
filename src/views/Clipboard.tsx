import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import '@/assets/css/clipboard.less';

const Clipboard = defineComponent({
  setup() {
    const help = ref('单击复制');

    const copyActive = () => {
      const copy = document.getElementById('copy') as HTMLInputElement;
      // copy.select();

      /** 1
       * document.execCommand('copy')
       */
      const range = document.createRange();
      window.getSelection()?.removeAllRanges();
      range.selectNode(copy);
      window.getSelection()?.addRange(range);

      const success = document.execCommand('copy');

      if (success) {
        help.value = '已将文本复制到剪贴板';
      } else {
        help.value = '复制失败';
      }

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
    };

    const proxyClipboardCopy = (e: any) => {
      // const copy = document.querySelector('#copy');
      // copy?.addEventListener('copy', () => {
      //   navigator.clipboard.readText().then((text) => {
      //     navigator.clipboard.writeText(`你的剪贴板数据被我更改了哦~~${text}`);
      //   });
      // });
      const selection = document.getSelection();
      e.clipboardData?.setData('text/plain', `你的剪贴板数据被我更改了哦~~${selection}`);
      e.preventDefault();
    };

    const proxyClipboardPaste = (e: ClipboardEvent) => {
      const text = e.clipboardData?.getData('text/plain');
      console.log(text);
      e.preventDefault();
    };

    onMounted(() => {
      document.querySelector('#copy')?.addEventListener('copy', proxyClipboardCopy);
    });

    onUnmounted(() => {
      document.querySelector('#copy')?.removeEventListener('copy', proxyClipboardCopy);
    });

    return {
      copyActive,
      help,
    };
  },

  render() {
    return (
      <div class="copy-container">
        <pre id="copy" class="pre">
          This is a test
        </pre>
        <div class="help" onClick={this.copyActive}>
          {this.help}
        </div>
      </div>
    );
  },
});

export default Clipboard;
