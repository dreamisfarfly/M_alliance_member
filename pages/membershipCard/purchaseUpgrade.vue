<template>
  <!-- start purchase-upgrade -->
  <view class="purchase-upgrade">
    <!-- start member-name -->
    <view class="member-name">刘小姐</view>
    <!-- end member-name -->
    <!-- start equity -->
    <view class="equity">
      <!-- start equity-name -->
      <view class="equity-name">注册服务商尊享两大权益</view>
      <!-- end equity-name -->
      <!-- start separator -->
      <view class="separator"></view>
      <!-- end separator -->
      <!-- start equity-subheading -->
      <view class="equity-subheading"
        >Registered service providers enjoy two benefits</view
      >
      <!-- end equity-subheading -->
      <view class="equity-content">
        <view class="equity-list">1、签约门店获收益</view>
        <view class="separators">｜</view>
        <view class="equity-list">2、会员注册获收益</view>
      </view>
    </view>
    <!-- end equity -->
    <!-- start member-vessel -->
    <view class="member-vessel">
      <view class="combo-content">
        <view
          class="combo-list"
          v-for="(item, key) in comboList"
          :key="key"
          :style="{ 'margin-left': key > 0 ? '56rpx' : '' }"
          @click="defaultOption=key"
        >
          <view v-if="defaultOption == key" class="select-combo"></view>
          <view class="combo-list-title">{{ item.name }}</view>
          <view class="combo-list-price">
            <text style="font-size: 20rpx">￥</text>{{ item.price }}
          </view>
          <view class="combo-list-time">{{ item.duration }}天</view>
        </view>
      </view>
      <view class="payment-btn">立即支付</view>
      <view class="activation-code">输入激活码></view>
    </view>
    <!-- end member-vessel -->
  </view>
  <!-- end purchase-upgrade -->
</template>

<script>
export default {
  data() {
    return {
      // 套餐列表
      comboList: [
        {
          name: "月卡会员",
          price: 100.0,
          duration: 30,
        },
        {
          name: "年卡会员",
          price: 100.0,
          duration: 30,
        },
        {
          name: "年卡会员",
          price: 100.0,
          duration: 365,
        },
      ],
      // 默认选择套餐
      defaultOption: 0,
    };
  },
};
</script>

<style scoped lang="scss">
.purchase-upgrade {
  width: 100%;
  height: 100vh;
  background: url("/static/images/purchase-upgrade-bak.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30rpx;
  box-sizing: border-box;
  .member-name {
    padding-top: 106rpx;
    font-size: 32rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
  }
  .equity {
    width: 100%;
    background: #2f2f2f;
    border-radius: 16rpx;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 38rpx;
    margin-top: 88rpx;
    box-sizing: border-box;
    .equity-name {
      margin-top: 30rpx;
      font-family: AlimamaShuHeiTi;
      font-size: 36rpx;
      color: #ffc98e;
      letter-spacing: 4rpx;
    }
    .separator {
      margin-top: 14rpx;
      width: 396rpx;
      height: 2rpx;
      border: 2rpx solid rgba(253, 233, 205, 0.3);
    }
    .equity-subheading {
      margin-top: 10rpx;
      font-size: 8rpx;
      font-family: AlimamaShuHeiTi;
      color: #ffc98e;
      letter-spacing: 2px;
    }
    .equity-content {
      margin-top: 72rpx;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 48rpx;
      box-sizing: border-box;
      justify-content: space-between;
      .equity-list {
        font-size: 24rpx;
        font-weight: 500;
        color: #ffdaad;
        letter-spacing: 2rpx;
        display: flex;
        align-items: center;
      }
      .separators {
        width: 28rpx;
        height: 34rpx;
        font-size: 24rpx;
        font-weight: 500;
        letter-spacing: 2rpx;
        color: #ffdaad;
      }
    }
  }
  .member-vessel {
    margin-top: 36rpx;
    width: 100%;
    background: linear-gradient(180deg, #2a2827 0%, #100e0d 100%);
    border-radius: 16rpx;
    border: 2rpx solid rgba(246, 225, 187, 1);
    padding: 0 50rpx;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 100rpx;
    box-sizing: border-box;
    .combo-content {
      margin-top: 50rpx;
      display: flex;
      .combo-list {
        width: 160rpx;
        height: 160rpx;
        background: #26282a;
        border-radius: 18rpx;
        border: 2rpx solid #fff4e7;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        box-sizing: border-box;
        position: relative;
        .select-combo{
            position: absolute;
            width: 50rpx;
            height: 48rpx;
            top: 0;
            right: 0;
            background: url('/static/images/select-combo-icon.png');
            background-size: 100% 100%;
        }
        .combo-list-title {
          margin-top: 10rpx;
          font-size: 22rpx;
          font-weight: 400;
          color: #ffffff;
        }
        .combo-list-price {
          margin-top: 6rpx;
          font-size: 38rpx;
          font-weight: 400;
          color: #ebc398;
        }
        .combo-list-time {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 42rpx;
          background: #ffdaad;
          border-radius: 0 0 18rpx 18rpx;
          font-size: 22rpx;
          font-weight: 600;
          color: #333333;
          text-align: center;
          line-height: 42rpx;
        }
      }
    }
    .payment-btn {
      margin-top: 68rpx;
      width: 100%;
      height: 80rpx;
      background: #494745;
      box-shadow: 0 6rpx 16rpx 0 rgba(17, 15, 13, 0.39);
      border-radius: 16px;
      border: 2rpx solid rgba(255, 218, 173, 1);
      text-align: center;
      line-height: 80rpx;
      font-size: 32rpx;
      font-weight: 600;
      color: #ffc98e;
    }
    .activation-code {
      margin-top: 36rpx;
      font-size: 24rpx;
      color: #ffc98e;
    }
  }
}
</style>
