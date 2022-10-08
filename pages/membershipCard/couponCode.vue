<template>
  <!-- start coupon-code -->
  <view class="coupon-code">
    <!-- start coupon-code-card -->
    <view class="coupon-code-card">
      <!-- start coupon-hump -->
      <view class="coupon-hump">
        <img class="coupon-hump-icon" src="/static/images/coupon-code-icon.png"/>
      </view>
      <!-- end coupon-hump -->
      <!-- start coupon-info -->
      <view class="coupon-info">
        <view class="coupon-title">价值188元洁牙卡一次</view>
        <view class="coupon-hint">请到店后使用</view>
      </view>
      <!-- end coupon-info -->
      <!-- start qr-code-info -->
      <view class="qr-code-info">
        <!-- start qr-code -->
        <img src="" class="qr-code" />
        <!-- end qr-code -->
        <!-- start bar-code -->
        <img src="" class="bar-code" />
        <!-- end bar-code -->
        <!-- start ticket-no -->
        <view class="ticket-no">券号：35465765863874</view>
        <!-- end ticket-no -->
        <!-- start verification -->
        <view class="verification">自助核销</view>
        <!-- end verification -->
      </view>
      <!-- end qr-code-info -->
      <!-- start location-info -->
      <view class="location-info">
        <!-- start column-list -->
        <view class="column-list">
          <view class="coupon-name">好牙医</view>
          <img
            src="/static/images/navigation-icon.png"
            class="navigation-icon"
          />
        </view>
        <!-- end column-list -->
        <!-- start column-list -->
        <view class="column-list" style="margin-top: 12rpx">
          <view class="site-name">雨花区洞井路476号</view>
          <view class="site-name">50.5KM</view>
        </view>
        <!-- end column-list -->
        <!-- start column-list -->
        <view class="column-list" style="margin-top: 30rpx">
          <view class="apply-shop">适用门店</view>
          <view class="apply-shop-count">共 1 家></view>
        </view>
        <!-- end column-list -->
      </view>
      <!-- end location-info -->
      <!-- start coupon-details -->
      <view class="coupon-details">
        <!-- start coupon-details-name -->
        <view class="coupon-details-name">优惠券详情</view>
        <!-- end coupon-details-name -->
        <!-- start coupon-details-list -->
        <view class="coupon-details-list">优惠规则：节假期不可用</view>
        <!-- end coupon-details-list -->
        <!-- start coupon-details-list -->
        <view class="coupon-details-list">有效期至：2022-08-16 10：15：30</view>
        <!-- end coupon-details-list -->
        <!-- start coupon-details-list -->
        <view class="coupon-details-list">领取时间：2022-05-16 10：15：30</view>
        <!-- end coupon-details-list -->
      </view>
      <!-- end coupon-details -->
    </view>
    <!-- end coupon-code-card -->
  </view>
  <!-- end coupon-code -->
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
page{
	background: #c5a285;
}
.coupon-code {
  width: 100%;
  //height: 100vh;
  height: auto;
  padding: 232rpx 30rpx 146rpx 30rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .coupon-code-card {
    width: 100%;
    background: #ffffff;
    box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
    border-radius: 16rpx;
    position: relative;
    .coupon-hump {
      position: absolute;
      width: 84rpx;
      height: 84rpx;
      top: 0;
      left: 50%;
      margin-top: -42rpx;
      margin-left: -42rpx;
      .coupon-hump-icon{
        width: 100%;
        height: 100%;
      }
    }
    .coupon-info {
      padding: 72rpx 0 20rpx 0;
      .coupon-title {
        font-size: 36rpx;
        font-weight: 500;
        color: #c78125;
        text-align: center;
      }
      .coupon-hint {
        margin-top: 20rpx;
        font-size: 12px;
        font-weight: 400;
        color: #999999;
        text-align: center;
      }
    }
    .qr-code-info {
      padding: 30rpx 0 20rpx 0;
      border-top: 2rpx dashed #dbdbdb;
      border-bottom: 2rpx dashed #dbdbdb;
      display: flex;
      flex-direction: column;
      align-items: center;
      .qr-code {
        width: 300rpx;
        height: 300rpx;
      }
      .bar-code {
        margin-top: 24rpx;
        width: 356rpx;
        height: 60rpx;
      }
    }
    .ticket-no {
      margin-top: 20rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #333333;
    }
    .verification {
      margin-top: 16rpx;
      padding: 8rpx 20rpx;
      border-radius: 8rpx;
      border: 2rpx solid #60b251;
      font-size: 24rpx;
      font-weight: 500;
      color: #60b251;
    }
  }
  .location-info {
    box-sizing: border-box;
    padding: 26rpx 50rpx 30rpx 50rpx;
    border-bottom: 2rpx dashed #dbdbdb;
  }
}

.column-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .coupon-name {
    font-size: 32rpx;
    font-weight: 500;
    color: #333333;
  }
  .navigation-icon {
    width: 32rpx;
    height: 32rpx;
    margin-right: 28rpx;
  }
  .site-name {
    font-size: 24rpx;
    font-weight: 400;
    color: #999999;
  }
  .apply-shop {
    font-size: 24rpx;
    font-weight: 400;
    color: #666666;
  }
  .apply-shop-count {
    font-size: 24rpx;
    font-weight: 500;
    color: #666666;
  }
}

.coupon-details {
  padding: 28rpx 50rpx 16rpx 50rpx;
  box-sizing: border-box;
  .coupon-details-name {
    font-size: 32rpx;
    font-weight: 500;
    color: #333333;
    margin-bottom: 30rpx;
  }
  .coupon-details-list {
    font-size: 12px;
    font-weight: 400;
    color: #999999;
    margin-bottom: 20rpx;
  }
}
</style>
