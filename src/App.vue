<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">卖家</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from 'components/header/header'
export default {
  data () {
    return {
      seller: {
        name: '米线',
        tel: 18888888888,
        address: '北京市海淀区上地西二旗辉煌国际'
      }
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus">
  .tab
    display: flex
    .tab-item
      flex: 1
      text-align: center
      height: 40px
      line-height: 40px
      a
        display: block
        &.active
          color: red
</style>
