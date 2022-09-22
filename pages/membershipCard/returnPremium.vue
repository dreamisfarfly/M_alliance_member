<template>
  <!-- start 退费 -->
  <view>
    <!-- start 导航栏 -->
    <u-navbar
      :is-back="false"
      title="刘小姐"
      :background="background"
      title-color="#333333"
      title-size="32"
      :title-bold="true"
      :title-width="400"
    >
    </u-navbar>
    <!-- end 导航栏 -->
    <!-- start return-premium -->
    <view class="return-premium">
      <!-- start return-premium-card -->
      <view class="return-premium-card">
        <!-- start column-list -->
        <view class="column-list justification">
          <view class="column-list-name">会员卡类型</view>
          <view class="column-list-operation">
            <text>会员-年费（200元）</text>
            <img
              src="/static/images/fine-right-icon.png"
              class="operation-icon"
            />
          </view>
        </view>
        <!-- end column-list -->
        <!-- start column-list -->
        <view class="column-list justification">
          <view class="column-list-name">是否满足颓废要求</view>
          <view class="column-list-operation">
            <text>否</text>
          </view>
        </view>
        <!-- end column-list -->
        <!-- start column-list -->
        <view class="column-list">
          <view class="column-list-name">原因</view>
          <view class="column-list-operation">
            <input
              class="operation-input"
              placeholder="请输入原因"
              v-model="cause"
            />
          </view>
        </view>
        <!-- end column-list -->
        <!-- start separator -->
        <view class="separator"></view>
        <!-- end separator -->
        <!-- start remark -->
        <view class="remark">
          备注：七天无理由退费，仅支持会员卡在没有使用任何权益的情况下，方可退款
        </view>
        <!-- end remark -->
        <!-- start confirm-btn -->
        <view class="confirm-btn">确定</view>
        <!-- end confirm-btn -->
      </view>
      <!-- end return-premium-card -->
    </view>
    <!-- end return-premium -->
  </view>
  <!-- end 退费 -->
</template>

<script>
export default {
  data() {
    return {
      // 导航栏背景
      background: {
        backgroundColor: "#FFFFFF",
      },
      cause: "该会员卡已经使用会员权益，无法退费。",
    };
  },
};
</script>

<style lang="less" scoped>
.return-premium {
  padding: 0 30rpx;
  padding-top: 20rpx;
  box-sizing: border-box;
  .return-premium-card {
    box-shadow: 0 8rpx 16px 0 rgba(108, 119, 128, 0.05);
    border-radius: 16rpx;
    background: #ffffff;
    padding: 0 50rpx;
    padding-bottom: 40rpx;
  }
}

.column-list {
  padding-top: 36rpx;
  .column-list-name {
    font-size: 24rpx;
    font-weight: 400;
    color: #999999;
  }
  .column-list-operation {
    font-size: 28rpx;
    font-weight: 500;
    color: #333333;
    display: flex;
    align-items: center;
    .operation-icon {
      margin-left: 12rpx;
      width: 14rpx;
      height: 24rpx;
    }
    .operation-input {
      width: 100%;
      margin-top: 22rpx;
      font-size: 28rpx;
      font-weight: 500;
      color: #333333;
    }
  }
}

.separator {
  margin-top: 30rpx;
  width: 100%;
  height: 2rpx;
  background: rgba(0, 0, 0, 0.1);
}

.remark {
  margin-top: 18rpx;
  font-size: 24rpx;
  font-weight: 400;
  color: #999999;
  line-height: 34rpx;
}

.confirm-btn {
  margin-top: 60rpx;
  width: 100%;
  padding: 18rpx 0;
  background: #c78125;
  border-radius: 16rpx;
  text-align: center;
  font-size: 32rpx;
  font-weight: 600;
  color: #ffffff;
}

.justification {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
