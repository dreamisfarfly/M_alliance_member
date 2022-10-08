<template>
  <!-- start mobile-phone-binding -->
  <view class="mobile-phone-binding">
    <!-- start form-vessel -->
    <view class="form-vessel">
      <view class="form-vessel-hint"
        >更换手机后，下次登录可使用新手机号登录</view
      >
      <view class="form-vessel-hint"
        >当前手机号：<text style="color: #c78125">150848115445</text></view
      >
      <view
        class="form-list form-list-separator"
        style="margin-top: 30rpx; justify-content: space-between"
      >
        <view class="form-list-info">
          <label class="form-list-label">国家/地区</label>
          <view>中国大陆</view>
        </view>
        <img class="form-list-operation" src="/static/images/fine-right-icon.png" />
      </view>
      <view class="form-list form-list-separator">
        <label class="form-list-label">+86</label>
        <input
          class="form-list-input"
          type="password"
          placeholder="请填写手机号码"
        />
      </view>
      <!-- start complete-btn -->
      <view class="comnext-step-btn">完成</view>
      <!-- start complete-btn -->
    </view>
    <!-- end form-vessel -->
  </view>
  <!-- end mobile-phone-binding -->
</template>

<script>
export default {
  mounted() {
    var a = document.getElementsByClassName("uni-page-head-hd")[0];
    a.style.opacity = 0;
  },
};
</script>

<style lang="scss" scoped>
.mobile-phone-binding {
  padding: 0 30rpx;
  padding-top: 20rpx;
  .form-vessel {
    background: #ffffff;
    box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
    border-radius: 16rpx;
    padding: 0 50rpx;
    padding-top: 30rpx;
    padding-bottom: 40rpx;
    box-sizing: border-box;
    .form-vessel-hint {
      font-size: 24rpx;
      color: #999999;
      line-height: 44rpx;
    }
    .form-list-separator {
      border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
    }
    .form-list {
      display: flex;
      align-items: center;
      padding: 36rpx 0;
      .form-list-info {
        display: flex;
        align-items: center;
      }
      .form-list-operation {
        width: 20rpx;
        height: 30rpx;
      }
      .form-list-label {
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;
        width: 202rpx;
        text-align: left;
      }
      .form-list-input {
        font-size: 28rpx;
        font-weight: 500;
        color: #333333;
      }
    }
    .comnext-step-btn {
      width: 100%;
      height: 80rpx;
      background: #c78125;
      border-radius: 16rpx;
      font-size: 32rpx;
      font-weight: 600;
      color: #ffffff;
      text-align: center;
      line-height: 80rpx;
      margin-top: 60rpx;
    }
  }
}
</style>
