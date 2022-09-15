<template>
  <!-- start coupon-card -->
  <view class="coupon-card">
    <view class="coupon-card-basic-information">
      <img class="information-img" v-if="coupon.type==0" src="/static/images/time-card-icon.png" />
      <img class="information-img" v-if="coupon.type==1" src="/static/images/consumer-voucher-icon.png" />
      <img class="information-img" v-if="coupon.type==2" src="/static/images/cash-coupon-icon.png" />
      <view class="information-title">{{coupon.title}}</view>
      <view class="information-title">{{coupon.subheading}}</view>
    </view>
    <view class="coupon-card-basic-detailed-information">
      <view class="detailed-information-name">仅限体验套餐使用</view>
      <view class="detailed-information-time">核销时间：2022-8-2916:32:24</view>
      <view class="detailed-information-verification">
        <view class="verification-person">核销人：张三</view>
        <view class="shop-evaluation">店铺评价</view>
      </view>
    </view>
  </view>
  <!-- end coupon-card -->
</template>

<script>
export default {
  props: {
    // 优惠劵
    coupon: {
      typeof: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="scss">
.coupon-card {
  width: 100%;
  height: 240rpx;
  background: url("/static/images/coupon-record-back.png");
  background-size: 100% 100%;
  display: flex;
  .coupon-card-basic-information {
    width: 240rpx;
    height: 100%;
    padding-left: 16rpx;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    .information-img {
      width: 98rpx;
      height: 104rpx;
      margin-top: 20rpx;
      margin-bottom: 14rpx;
    }
    .information-title {
      font-size: 20rpx;
      font-weight: 500;
      color: #999999;
      text-align: center;
    }
  }
  .coupon-card-basic-detailed-information {
    flex: 1;
    padding-left: 30rpx;
    padding-top: 22rpx;
    padding-right: 46rpx;
    box-sizing: border-box;
    .detailed-information-name {
      font-size: 28rpx;
      font-weight: 550;
      color: #333333;
    }
    .detailed-information-time {
      margin-top: 10rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #999999;
    }
    .detailed-information-verification {
      margin-top: 40rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .verification-person {
        font-size: 24rpx;
        font-weight: 400;
        color: #333333;
      }
      .shop-evaluation {
        width: 140rpx;
        height: 50rpx;
        border-radius: 8rpx;
        border: 2rpx solid #60b251;
        text-align: center;
        line-height: 50rpx;
        box-sizing: border-box;
        font-size: 24rpx;
        font-weight: 500;
        color: #60b251;
      }
    }
  }
}
</style>
