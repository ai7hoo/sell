<template>
  <div class="header">
    <div>商家名称：{{seller.name}}</div>
    <div>商家电话：{{seller.tel}}</div>
    <div>商家地址：{{seller.address}}</div>
  </div>
</template>

<script>
export default {
  props: ['seller'],
  data () {
    return {
      desc: 'nihao'
    }
  },
  components: {}
}
</script>

<style>

</style>
