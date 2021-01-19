<template>
  <div>
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'LifeCircle',

  data: () => ({
    message: 'vue3生命周期探究'
  }),

  beforeCreate() {
    console.group('beforeCreate 创建前状态===============》')
    console.log("color:red" , "el     : " + this.$el);
    console.log("color:red","data   : " + this.$data); // 此处一开始就有内容是因为不是初始化 vue
    console.log("color:red","message: " + this.message)
  },
  created() {
    console.group('created 创建完毕状态===============》')
    console.log("color:red" , "el     : " + this.$el);
    console.log("color:red","data   : " + this.$data);
    console.log("color:red","message: " + this.message)
  },
  beforeMount() {
    console.group('beforeMount 挂载前状态===============》')
    console.log("color:red" , "el     : " + this.$el);
    console.log("color:red","data   : " + this.$data);
    console.log("color:red","message: " + this.message)
  },
  mounted() {
    console.group('mounted 挂载完毕状态===============》')
    console.log("color:red" , "el     : " + this.$el);
    console.log("color:red","data   : " + this.$data);
    console.log("color:red","message: " + this.message)
  },
  beforeUpdate() {
    console.group('beforeUpdate 更新前状态===============》')
    console.log("color:red" , "el     : " + this.$el);
    console.log("color:red","data   : " + this.$data);
    console.log("color:red","message: " + this.message)
  },
  updated() {
    console.group('updated 更新完毕状态===============》')
    console.log("color:red" , "el     : " + this.$el);
    console.log("color:red","data   : " + this.$data);
    console.log("color:red","message: " + this.message)
  },
  beforeUnmount() {
    console.group('beforeUnmount 解除挂载前状态===============》')
    console.log("color:red" , "el     : " + this.$el);
    console.log("color:red","data   : " + this.$data);
    console.log("color:red","message: " + this.message)
  },
  unmounted() {
    console.group('beforeUnmount 解除挂载完毕状态===============》')
    console.log("color:red" , "el     : " + this.$el);
    console.log("color:red","data   : " + this.$data);
    console.log("color:red","message: " + this.message)
  },
}
</script>
