<template>
  <!-- start search -->
  <view class="search">
    <!-- start search-info -->
    <view class="search-info">
      <img src="/static/images/search-icon.png" class="search-icon" />
      <input
        class="search-info-input"
        placeholder="输入手机号查询"
        v-model="val"
      />
    </view>
    <!-- end search-info -->
    <!-- start search-info-operation -->
    <view class="search-info-operation">
      <view class="search-info-operation-separator"></view>
      <text class="search-info-operation-name" @click="searchFun">搜索</text>
    </view>
    <!-- end search-info-operation -->
  </view>
  <!-- end search -->
</template>

<script>
export default {
  data() {
    return {
      // 搜索值
      val: this.value,
    };
  },
  props: {
    // 搜索值
    value: {
      type: String,
      default: "",
    },
  },
  watch: {
    val(newVal) {
      this.$emit("input", newVal);
    },
  },
  methods:{
    // 搜索
    searchFun() {
        this.$emit('searchFun')
    }
  }
};
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 68rpx;
  background: #ffffff;
  border-radius: 34rpx;
  border: 2rpx solid #ededed;
  padding: 0 34rpx 0 30rpx;
  display: flex;
  align-items: center;
  .search-info {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    .search-icon {
      width: 34rpx;
      height: 34rpx;
    }
    .search-info-input {
      box-sizing: border-box;
      padding: 0 20rpx;
      flex: 1;
      font-size: 26rpx;
      font-weight: 400;
      color: #000000;
    }
  }
  .search-info-operation {
    display: flex;
    align-items: center;
    height: 100%;
    .search-info-operation-separator {
      width: 2rpx;
      height: 20rpx;
      background: #000000;
    }
    .search-info-operation-name {
      margin-left: 20rpx;
      font-size: 26rpx;
      font-weight: 400;
      color: #333333;
    }
  }
}
</style>
