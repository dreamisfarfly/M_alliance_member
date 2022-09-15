<template>
  <!-- start 设置密码 -->
  <view class="setting-password">
    <!-- start form-vessel -->
    <view class="form-vessel">
      <view class="form-list form-list-separator">
        <label class="form-list-label">账号</label>
        <input class="form-list-input" type="text" placeholder="请填写账号" />
      </view>
      <view class="form-list form-list-separator">
        <label class="form-list-label">旧密码</label>
        <input
          class="form-list-input"
          type="password"
          placeholder="请填写旧密码"
        />
      </view>
      <view class="form-list form-list-separator">
        <label class="form-list-label">新密码</label>
        <input
          class="form-list-input"
          type="password"
          placeholder="请输入新的密码"
        />
      </view>
      <view class="form-list form-list-separator">
        <label class="form-list-label">确认密码</label>
        <input
          class="form-list-input"
          type="password"
          placeholder="请再次输入新密码"
        />
      </view>
      <!-- start complete-btn -->
      <view class="complete-btn">完成</view>
      <!-- start complete-btn -->
    </view>
    <!-- end form-vessel -->
  </view>
  <!-- end 设置密码 -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.setting-password {
  padding: 0 30rpx;
  padding-top: 20rpx;
  .form-vessel {
    background: #ffffff;
    box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
    border-radius: 16rpx;
    padding: 0 50rpx;
    padding-bottom: 40rpx;
    box-sizing: border-box;
    .form-list-separator {
      border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
    }
    .form-list {
      display: flex;
      align-items: center;
      padding: 36rpx 0;
      .form-list-label {
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;
        width: 124rpx;
        text-align: left;
      }
      .form-list-input {
        font-size: 28rpx;
        font-weight: 500;
        color: #333333;
      }
    }
    .complete-btn {
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
