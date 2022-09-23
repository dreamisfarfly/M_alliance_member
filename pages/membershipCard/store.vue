<template>
  <!-- start 店铺 -->
  <view>
    <!-- start store-header -->
    <view class="store-header">
      <img
        src="/static/images/purchase-card-voucher-bak.png"
        class="store-header-img"
      />
      <view class="store-header-hazy-layer"></view>
    </view>
    <!-- end store-header -->
    <!-- start store-content -->
    <view class="store-content">
      <!-- start store-card -->
      <view class="store-card">
        <!-- start store-card-info -->
        <view class="store-card-info">
          <img src="/static/images/coupon-code-icon.png" class="store-icon" />
          <view class="info">
            <view class="justify-align">
              <view class="store-name">前吉kengee（九封店）</view>
              <img
                src="/static/images/not-collect-icon.png"
                class="collect-icon"
              />
            </view>
            <view class="score-info">
              <score :evaluationScore="4" />
              <text class="score-count">4.9分</text>
            </view>
            <view class="type-info">
              <view class="type-name">面包｜西点</view>
              <view class="popularity"
                >人气值： <text class="popularity-val">10000</text></view
              >
            </view>
          </view>
        </view>
        <!-- end store-card-info -->
        <!-- start site-info -->
        <view class="justify-align site-info">
          <view class="site">
            <view class="site-name">
              <img src="/static/images/location-icon.png" class="site-icon" />
              五一路五一路398号
            </view>
            <view class="distance">距离您 >5km</view>
          </view>
          <view class="site-operation">
            <img
              src="/static/images/location-big-icon.png"
              class="site-operation-icon"
            />
            <view class="separator"></view>
            <img
              src="/static/images/phone-icon.png"
              class="site-operation-icon"
            />
          </view>
        </view>
        <!-- end site-info -->
        <!-- start subscribe-info -->
        <view class="subscribe-info justify-align">
          <view class="subscribe-info-hint">
            <img
              src="/static/images/time-icon.png"
              class="subscribe-info-hint-icon"
            />
            需要提前24小时预约
          </view>
          <view class="subscribe-btn">预约</view>
        </view>
        <!-- end subscribe-info -->
      </view>
      <!-- end store-card -->
    </view>
    <!-- end store-content -->
  </view>
  <!-- end 店铺 -->
</template>

<script>
import score from "@/components/score/score.vue";
export default {
  components: { score },
};
</script>

<style lang="less" scoped>
.store-header {
  width: 100%;
  height: 316rpx;
  position: relative;
  .store-header-img {
    width: 100%;
    height: 100%;
  }
  .store-header-hazy-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20rpx);
  }
}

.store-content {
  position: relative;
  width: 100%;
  margin-top: -64rpx;
  z-index: 666;
  padding: 0 14rpx;
  box-sizing: border-box;
  .store-card {
    margin: 0 16rpx;
    padding: 0rpx 30rpx 26rpx 30rpx;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0 8rpx 16px 0 rgba(108, 119, 128, 0.05);
    border-radius: 28rpx;
    .store-card-info {
      display: flex;
      padding-top: 12rpx;
      .store-icon {
        position: relative;
        margin-top: -24rpx;
        width: 140rpx;
        height: 140rpx;
      }
    }
    .info {
      margin-left: 24rpx;
      flex: 1;
      .store-name {
        font-size: 32rpx;
        font-weight: 500;
        color: #333333;
      }
      .collect-icon {
        width: 52rpx;
        height: 52rpx;
      }
    }
    .score-info {
      margin-top: 12rpx;
      display: flex;
      .score-count {
        margin-left: 22rpx;
        font-size: 20rpx;
        font-weight: 500;
        color: #da9b49;
      }
    }
    .type-info {
      margin-top: 18rpx;
      display: flex;
      align-items: center;
      .type-name {
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;
      }
      .popularity {
        margin-left: 70rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;
        .popularity-val {
          font-size: 28rpx;
          font-weight: bold;
          color: #da9b49;
        }
      }
    }
  }
  .site-info {
    margin-top: 32rpx;
    .site {
      .site-name {
        font-size: 28tpx;
        font-weight: 400;
        color: #333333;
        display: flex;
        align-items: center;
        .site-icon {
          width: 20rpx;
          height: 26rpx;
          margin-right: 12rpx;
        }
      }
      .distance {
        margin-top: 2rpx;
        margin-left: 32rpx;
        font-size: 20rpx;
        font-weight: 500;
        color: #da9b49;
      }
    }
    .site-operation {
      display: flex;
      align-items: center;
      .site-operation-icon {
        width: 48rpx;
        height: 48rpx;
      }
      .separator {
        width: 2rpx;
        height: 36rpx;
        opacity: 0.1;
        background: #000000;
        margin: 0 32rpx;
      }
    }
  }
  .subscribe-info {
    margin-top: 36rpx;
    width: 100%;
    background: rgba(220, 174, 98, 0.11);
    border-radius: 16rpx;
    padding: 14rpx 20rpx 16rpx 20rpx;
    box-sizing: border-box;
    .subscribe-info-hint {
      font-size: 24rpx;
      font-weight: 400;
      color: #333333;
      display: flex;
      align-items: center;
      .subscribe-info-hint-icon {
        width: 28rpx;
        height: 28rpx;
        margin-right: 6rpx;
      }
    }
    .subscribe-btn {
      border: 2rpx solid #c78125;
      border-radius: 8rpx;
      font-size: 24rpx;
      font-weight: 500;
      color: #c78125;
      padding: 8rpx 32rpx;
    }
  }
}

.justify-align {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
