<template>
  <!-- start shop-card -->
  <view class="shop-card"  @click="$utils.jump('/pages/membershipCard/store')">
    <!-- start shop-info-content -->
    <view class="shop-info-content">
      <img src="" class="shop-img" />
      <view class="shop-info">
        <view class="shop-info-name">长沙山水健康体检中心</view>
        <view class="score-info">
          <score :evaluationScore="4" />
          <view class="popular-value"
            >人气值：<text style="color: #da9b49">10000</text></view
          >
        </view>
        <view class="discount-content">
          <view class="discount-vessel">
            <view class="discount-label discount">6.5折</view>
            <view class="discount-label coupon">消费券</view>
          </view>
          <view class="details">详情 ></view>
        </view>
      </view>
    </view>
    <!-- end shop-info-content -->
    <!-- start location-info -->
    <view class="location-info">
      <view class="info">
        <img class="location-icon" src="/static/images/location-icon.png" />
        雨花区洞井路476号
      </view>
      <view class="distance">>5km</view>
    </view>
    <!-- end location-info -->
  </view>
  <!-- end shop-card -->
</template>

<script>
import score from "../score/score.vue";
export default {
  components: { score },
};
</script>

<style lang="less" scoped>
.shop-card {
  padding: 28rpx 0 30rpx 0;
  box-sizing: border-box;
  border-bottom: 2rpx solid rgba(0, 0, 0, 0.05);
  .shop-info-content {
    display: flex;
    .shop-img {
      width: 120rpx;
      height: 120rpx;
      border-radius: 10rpx;
    }
    .shop-info {
      flex: 1;
      margin-left: 10rpx;
      .shop-info-name {
        font-size: 24rpx;
        font-weight: 500;
        color: #000000;
      }
      .score-info {
        margin-top: 6rpx;
        display: flex;
        align-items: center;
        .popular-value {
          margin-left: 44rpx;
          font-size: 20rpx;
          font-weight: 600;
          color: #999999;
        }
      }
      .discount-content {
        margin-top: 10rpx;
        justify-content: space-between;
        display: flex;
        .discount-vessel {
          display: flex;
          .discount-label {
            padding: 2rpx 10rpx;
            border-radius: 4rpx;
            font-size: 20rpx;
            font-weight: 600;
            box-sizing: border-box;
          }
          .discount {
            border: 2rpx solid #ff9600;
            background: rgba(245, 154, 35, 0.1);
            box-sizing: border-box;
            color: #f59a23;
          }
          .coupon {
            margin-left: 10rpx;
            border: 2rpx solid #3c8d00;
            border-radius: 4rpx;
            background: rgba(82, 138, 19, 0.1);
            color: #3c8d00;
          }
        }
        .details {
          font-size: 24rpx;
          font-weight: 550;
          color: #f59a23;
        }
      }
    }
  }
  .location-info {
    justify-content: space-between;
    display: flex;
    margin-top: 22rpx;
    .info {
      display: flex;
      align-items: center;
      font-size: 24rpx;
      font-weight: 400;
      color: #666666;
      .location-icon {
        margin-right: 6rpx;
        display: flex;
        align-items: center;
        width: 20rpx;
        height: 26rpx;
      }
    }
    .distance {
      font-size: 24rpx;
      font-weight: 400;
      color: #666666;
    }
  }
}
</style>
