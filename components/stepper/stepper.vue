<template>
  <!-- start 步进器 -->
  <view
    class="strpper"
    :style="{ width: width + 'rpx', height: height + 'rpx' }"
  >
    <view class="subtract" @click="subtractFun"></view>
    <view class="content">{{ val }}</view>
    <view class="add" @click="addFun"></view>
  </view>
  <!-- end 步进器 -->
</template>

<script>
export default {
  props: {
    // 宽度
    width: {
      typeof: Number,
      default: 0,
    },
    // 高度
    height: {
      typeof: Number,
      default: 0,
    },
    // 值
    val: {
      typeof: Number,
      default: 0,
    },
  },
  model: {
    prop: "val",
    event: "change",
  },
  methods: {
    // 减
    subtractFun() {
        if(this.val-1 < 0){
            this.$emit('change', 0)
            return;
        }
        this.$emit('change', this.val-1)
    },
    // 加
    addFun() {
        this.$emit('change', this.val+1)
    }
  }
};
</script>

<style lang="less" scoped>
.strpper {
  width: 100%;
  background: url("/static/images/strpper-bak.png");
  background-size: 100% 100%;
  display: flex;
  .subtract {
    width: 32%;
    height: 100%;
  }
  .content {
    width: 36%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
    font-weight: 400;
    color: #333333;
  }
  .add {
    width: 32%;
    height: 100%;
  }
}
</style>
