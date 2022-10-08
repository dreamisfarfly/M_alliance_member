<template>
  <!-- start login -->
  <view class="login">
    <!-- start login-card -->
    <view class="login-card">
      <!-- start login-card -->
      <img
        class="login-card-header-img"
        src="@/static/images/login-card-header-img.png"
      />
      <!-- end login-card -->
      <!-- start login-form -->
      <view class="login-form">
        <!-- start form-list -->
        <view class="form-list">
          <img class="form-list-icon" src="@/static/images/user-icon.png" />
          <input class="form-list-input" type="text" placeholder="请输入账号" />
        </view>
        <!-- end form-list -->
        <!-- start form-list -->
        <view class="form-list" style="margin-top: 14rpx">
          <img class="form-list-icon" src="@/static/images/password-icon.png" />
          <input
            class="form-list-input"
            type="password"
            placeholder="请输入密码"
          />
        </view>
        <!-- end form-list -->
        <!-- start form-operation -->
        <view class="form-operation">
          <!-- start rememb -->
          <view class="rememb">
            <img
              v-if="!isRememb"
              @click="isRememb = true"
              class="rememb-icon"
              src="@/static/images/not-rememb-icon.png"
            />
            <img
              @click="isRememb = false"
              v-if="isRememb"
              class="rememb-icon"
              src="@/static/images/yes-rememb-icon.png"
            />
            <text class="rememb-text">记住密码</text>
          </view>
          <!-- end rememb -->
          <!-- start register -->
          <view class="register" @click="$utils.jump('/pages/register')">注册 ></view>
          <!-- end register -->
        </view>
        <!-- end form-operation -->
        <!-- start login-btn -->
        <view class="login-btn">登录</view>
        <!-- end login-btn -->
        <!-- start form-hint -->
        <view class="form-hint">登录即表示您同意</view>
        <!-- end form-hint -->
        <!-- start form-agreement -->
        <view class="form-agreement">万家联盟会员【服务商/商家/】合作协议</view>
        <!-- end form-agreement -->
      </view>
      <!-- end login-form -->
    </view>
    <!-- end login-card -->
  </view>
  <!-- end login -->
</template>

<script>
export default {
  data() {
    return {
      isRememb: false, // 记住密码
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  background: url("@/static/images/login-bak.png");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  padding: 0 30rpx;
  box-sizing: border-box;
  .login-card {
    width: 100%;
    .login-card-header-img {
      width: 100%;
      height: 322rpx;
    }
    .login-form {
      margin-top: -10rpx;
      height: 594rpx;
      background: #ffffff;
      border-radius: 0px 0px 8px 8px;
      padding: 0 50rpx;
      padding-top: 50rpx;
      box-sizing: border-box;
      .form-list {
        padding: 20rpx 0;
        box-sizing: border-box;
        border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
        display: flex;
        .form-list-icon {
          width: 44rpx;
          height: 44rpx;
        }
        .form-list-input {
          margin-left: 50rpx;
          font-size: 28rpx;
          font-weight: 500;
          color: #bfbfbf;
        }
      }
      .form-operation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 44rpx 0;
        .rememb {
          display: flex;
          align-items: center;
          .rememb-icon {
            width: 28rpx;
            height: 28rpx;
          }
          .rememb-text {
            font-size: 24rpx;
            font-weight: 400;
            color: #999999;
            margin-left: 12rpx;
          }
        }
        .register {
          font-size: 24rpx;
          font-weight: 400;
          color: #999999;
        }
      }
      .login-btn {
        margin-top: 20rpx;
        width: 100%;
        height: 80rpx;
        background: #c78125;
        border-radius: 16rpx;
        font-size: 32rpx;
        font-weight: 600;
        color: #ffffff;
        text-align: center;
        line-height: 80rpx;
      }
      .form-hint {
        margin-top: 36rpx;
        font-size: 24rpx;
        color: #999999;
        text-align: center;
      }
      .form-agreement {
        font-size: 24rpx;
        color: #c78125;
        text-align: center;
      }
    }
  }
}
</style>
