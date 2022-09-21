<template>
  <!-- start shop-evaluation -->
  <view class="shop-evaluation">
    <!-- start shop-evaluation-award-card -->
    <view class="shop-evaluation-award-card">
      <view class="shop-evaluation-award-card-title">填写评价得100积分</view>
      <img src="" class="shop-evaluation-award-card-icon" />
    </view>
    <!-- end shop-evaluation-award-card -->
    <!-- start shop-evaluation-form-card -->
    <view class="shop-evaluation-form-card">
      <view class="shop-evaluation-form-card-header">
        <view class="shop-evaluation-form-card-header-name">湖南山水体验</view>
        <view class="evaluate-vessel">
          <text class="evaluate-vessel-name">匿名评价</text>
        </view>
      </view>
    </view>
    <!-- end shop-evaluation-form-card -->
    <!-- start hint -->
    <view class="hint"
      >好评+上传商品图，立即获得100积分。积分可以用来购买优惠券</view
    >
    <!-- end hint -->
    <!-- start confirm-submit -->
    <view class="confirm-submit">确认提交</view>
    <!-- end confirm-submit -->
  </view>
  <!-- end shop-evaluation -->
</template>

<script>
export default {
  mounted() {
    var a = document.getElementsByClassName("uni-page-head-hd")[0];
    a.style.opacity = 0;
  },
};
</script>

<style lang="less" scoped>
.shop-evaluation {
  padding: 30rpx;
  box-sizing: border-box;
  .shop-evaluation-award-card {
    background: rgba(220, 174, 98, 0.11);
    border-radius: 16rpx;
    border: 2rpx solid #ded0bb;
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .shop-evaluation-award-card-title {
      font-size: 28rpx;
      font-weight: 500;
      color: #333333;
    }
    .shop-evaluation-award-card-icon {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50% 50%;
    }
  }
  .shop-evaluation-form-card {
    margin-top: 20rpx;
    background: #ffffff;
    border-radius: 16rpx;
    padding: 30rpx 20rpx;
    box-sizing: border-box;
    .shop-evaluation-form-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .shop-evaluation-form-card-header-name {
        font-size: 28rpx;
        font-weight: 500;
        color: #333333;
      }
      .evaluate-vessel {
        display: flex;
        align-items: center;
        .evaluate-vessel-name {
          margin-left: 6rpx;
          font-size: 24rpx;
          font-weight: 400;
          color: #999999;
        }
      }
    }
  }
  .hint {
    margin-top: 24rpx;
    font-size: 20rpx;
    font-weight: 400;
    color: #c78125;
  }
  .confirm-submit {
    margin-top: 60rpx;
    width: 100%;
    padding: 18rpx 0;
    background: #c78125;
    border-radius: 16rpx;
    font-size: 32rpx;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
  }
}
</style>
