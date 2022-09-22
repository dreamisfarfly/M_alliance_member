<template>
  <!-- start 结账 -->
  <view>
    <!-- start settle-accounts-header -->
    <view class="settle-accounts-header">
      <view class="settle-accounts-header-title">结账</view>
      <view class="settle-accounts-header-info">
        <img src="" class="user-avatar-icon" />
        <view class="user-info">
          <view class="user-name"
            >李丽丽<img
              src="/static/images/year-member-icon.png"
              class="user-identity"
            />
          </view>
          <view class="user-phone">156****9999</view>
          <view class="separator"></view>
          <view class="consumption-information">
            <view class="consumption-information-hint">会员累积消费</view>
            <view class="consumption-information-price">2,3253.00元</view>
          </view>
        </view>
      </view>
    </view>
    <!-- end settle-accounts-header -->
    <!-- start settle-accounts-content -->
    <view class="settle-accounts-content">
      <!-- start column-list -->
      <view class="column-list">
        <!-- start column-list-header -->
        <view class="column-list-header">
          <text>消费总额</text>
          <text>巢爷老味（洞井路店）</text>
        </view>
        <!-- end column-list-header -->
        <!-- start column-list-content -->
        <view class="column-list-content">
          <!-- start consume-vessel -->
          <view class="consume-vessel">
            <input
              class="consume-vessel-input"
              placeholder="输入本次消费总金额"
            />
            <view class="separator"></view>
            <view class="price-unit">元</view>
          </view>
          <!-- end consume-vessel -->
        </view>
        <!-- end column-list-content -->
      </view>
      <!-- end column-list -->
      <!-- start column-list -->
      <view class="column-list">
        <!-- start column-list-header -->
        <view class="column-list-header">
          <text>门店折扣</text>
        </view>
        <!-- end column-list-header -->
        <!-- start column-list-content -->
        <view class="column-list-content">
          <!-- start discount-list -->
          <view
            class="discount-list"
            v-for="(item, key) in discountList"
            :key="key"
          >
            <view class="discount-list-info">
              <view class="discount-info">
                <img
                  v-if="item.type == 0"
                  src="/static/images/break-icon.png"
                  class="discount-icon"
                />
                <img
                  v-if="item.type == 1"
                  src="/static/images/actor-icon.png"
                  class="discount-icon"
                />
                <img
                  v-if="item.type == 2"
                  src="/static/images/present-icon.png"
                  class="discount-icon"
                />

                <view class="discount-info-title">{{ item.title }}</view>
              </view>
              <view class="discount-info-hint">{{ item.hint }}</view>
            </view>
            <view class="discount-list-operation">
              <text class="operation-hint">{{ item.condition }}</text>
              <img
                v-if="key == selectIndex"
                @click="selectRadio(key, true)"
                src="/static/images/yes-radio-icon.png"
                class="radio-icon"
              />
              <img
                v-if="key != selectIndex"
                @click="selectRadio(key, false)"
                src="/static/images/not-radio-icon.png"
                class="radio-icon"
              />
            </view>
          </view>
          <!-- end discount-list -->
        </view>
        <!-- end column-list-content -->
      </view>
    </view>
    <!-- end settle-accounts-content -->
    <!-- start affirm-vessel -->
    <view class="affirm-vessel">
      <view class="affirm-vessel-card">
        <view class="affirm-btn">确认</view>
      </view>
    </view>
    <!-- end affirm-vessel -->
  </view>
  <!-- start 结账 -->
</template>

<script>
export default {
  data() {
    return {
      // 选择坐标
      selectIndex: null,
      // 折扣列表
      discountList: [
        {
          type: 0,
          title: "会员折扣",
          hint: "会员折扣周六周末不可用",
          condition: "8.5折",
        },
        {
          type: 1,
          title: "代金券10元",
          hint: "代金券不可以用于酒水",
          condition: "满100可用",
        },
        {
          type: 2,
          title: "现金券10元",
          hint: "现金券不可以用于酒水",
          condition: "",
        },
      ],
    };
  },
  methods: {
    // 选择
    selectRadio(key, sign) {
      if (sign) {
        this.selectIndex = null;
      } else {
        this.selectIndex = key;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.settle-accounts-header {
  width: 100%;
  height: 474rpx;
  background: linear-gradient(270deg, #c9a88b 0%, #996f52 100%);
  padding: 0 32rpx;
  box-sizing: border-box;
  .settle-accounts-header-title {
    padding-top: 98rpx;
    font-size: 36rpx;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
  }
  .settle-accounts-header-info {
    margin-top: 78rpx;
    display: flex;
    .user-avatar-icon {
      width: 116rpx;
      height: 116rpx;
      border-radius: 50% 50%;
    }
    .user-info {
      margin-left: 12rpx;
      margin-top: 12rpx;
      flex: 1;
      .user-name {
        font-size: 32rpx;
        font-weight: 500;
        color: #ffffff;
        display: flex;
        align-items: center;
        .user-identity {
          margin-left: 20rpx;
          width: 94rpx;
          height: 30rpx;
        }
      }
      .user-phone {
        margin-top: 12rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #ffffff;
      }
      .separator {
        margin-top: 40rpx;
        width: 100%;
        height: 2rpx;
        background: rgba(255, 255, 255, 0.1);
      }
      .consumption-information {
        margin-top: 28rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .consumption-information-hint {
          font-size: 24rpx;
          font-weight: 400;
          color: #ffffff;
        }
        .consumption-information-price {
          font-size: 32rpx;
          font-weight: 600;
          color: #ffffff;
        }
      }
    }
  }
}

.settle-accounts-content {
  padding: 0rpx 30rpx;
  padding-bottom: 250rpx;
  .column-list-header {
    padding: 40rpx 0 30rpx 0;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    font-size: 28rpx;
    font-weight: 600;
    color: #333333;
  }
//   .column-list-content {
//   }
}

.consume-vessel {
  background: #ffffff;
  box-shadow: 0 8rpx 14rpx 0 rgba(0, 0, 0, 0.07);
  border-radius: 16rpx;
  border: 2rpx solid #c78125;
  padding: 28rpx 0rpx;
  display: flex;
  align-items: center;
  .consume-vessel-input {
    flex: 1;
    font-size: 32rpx;
    font-weight: 600;
    color: #b8b7b7;
    padding: 0 40rpx;
    box-sizing: border-box;
  }
  .separator {
    width: 2rpx;
    height: 64rpx;
    background: rgba(0, 0, 0, 0.05);
  }
  .price-unit {
    font-size: 40rpx;
    font-weight: 600;
    color: #333333;
    padding: 0 50rpx 0 42rpx;
    box-sizing: border-box;
  }
}

.discount-list {
  display: flex;
  justify-content: space-between;
  box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
  background: #ffffff;
  border-radius: 16rpx;
  padding: 20rpx 40rpx 18rpx 20rpx;
  box-sizing: border-box;
  margin-bottom: 20rpx;
  .discount-list-info {
    .discount-info {
      display: flex;
      align-items: center;
      .discount-icon {
        width: 32rpx;
        height: 32rpx;
      }
      .discount-info-title {
        margin-left: 20rpx;
        font-size: 28rpx;
        font-weight: 400;
        color: #333333;
      }
    }
    .discount-info-hint {
      margin-top: 8rpx;
      padding-left: 52rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #999999;
    }
  }
  .discount-list-operation {
    display: flex;
    align-items: center;
    .radio-icon {
      margin-left: 18rpx;
      width: 30rpx;
      height: 30rpx;
    }
    .operation-hint {
      font-size: 28rpx;
      font-weight: 400;
      color: #333333;
    }
  }
}

.affirm-vessel {
  width: 100%;
  position: fixed;
  bottom: 34rpx;
  padding: 0 30rpx;
  box-sizing: border-box;
  .affirm-vessel-card {
    width: 100%;
    background: #ffffff;
    box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
    border-radius: 16rpx;
    padding: 40rpx 30rpx;
    box-sizing: border-box;
    .affirm-btn {
      padding: 18rpx 0;
      background: #c78125;
      border-radius: 16rpx;
      text-align: center;
      font-size: 32rpx;
      color: #ffffff;
      font-weight: 600;
    }
  }
}
</style>
