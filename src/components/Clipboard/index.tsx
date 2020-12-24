import { defineComponent } from 'vue'

const Clipboard = defineComponent({
  setup() {
    const copyActive = () => {
      const copy = document.getElementById('copy') as HTMLTextAreaElement;
      console.log(copy?.value)
      // copy.select();
      // const range = document.createRange();
      // window.getSelection()?.removeAllRanges();
      // range.selectNode(copy);
      // window.getSelection()?.addRange(range);

      if (copy) {
        navigator.clipboard.writeText(copy.value).then(() => {
          console.log('复制成功')
        }).catch(err => {
          console.error(err)
        })
      }
    }

    return {
      copyActive
    }
  },

  render() {
    return (
      <>
        <textarea name="" id="copy" rows={10}></textarea>
        <button onClick={this.copyActive}>copy</button>
      </>
    )
  }

})

export default Clipboard
