<template>
  <!-- start 消费记录 -->
  <view class="expense-calendar">
    <!-- start data-show -->
    <view class="data-show">
      <view class="data-show-list">
        <view class="data-show-list-data"
          >12.30<text class="data-show-list-unit">(元)</text></view
        >
        <view class="data-show-list-name">累积消费</view>
      </view>
      <view class="data-show-list">
        <view class="data-show-list-data"
          >12.30<text class="data-show-list-unit">(元)</text></view
        >
        <view class="data-show-list-name">累积省赚</view>
      </view>
    </view>
    <!-- end data-show -->
    <!-- start timing -->
    <view class="timing" @click="timeShow = !timeShow"> {{ selectTime }} </view>
    <!-- end timing -->

    <!-- start bill-content  -->
    <view class="bill-content">
      <view class="bill-list" v-for="(item, key) in 6" :key="key">
        <view class="bill-list-img-show">
          <img class="bill-list-img" src="" />
        </view>
        <view class="bill-list-info">
          <view class="info">
            <view class="info-name">升级会员卡：年费</view>
            <view class="info-price">-200</view>
          </view>
          <view class="bill-list-info-time">8月20日 11:24</view>
        </view>
      </view>
    </view>
    <!-- end bill-content  -->
    <!-- start 时间弹窗 -->
    <u-picker
      v-model="timeShow"
      mode="time"
      :params="params"
      @confirm="timeSorterSyntony"
    ></u-picker>
    <!-- end 时间弹窗 -->
  </view>
  <!-- end 消费记录 -->
</template>

<script>
export default {
  data() {
    return {
      timeShow: false, // 日期选择器显示
      selectTime: null, // 选择的时间
      params: {
        year: true,
        month: true,
      },
    };
  },
  created() {
    //初始化
    this.initTime();
  },
  methods: {
    // 初始化时间
    initTime() {
      var date = new Date();
      this.selectTime =
        date.getFullYear() + "年" + (date.getMonth() + 1) + "月";
    },
    // 时间选择器回调
    timeSorterSyntony(e) {
      this.selectTime = e.year + "年" + e.month + "月";
    },
  },
};
</script>

<style scoped lang="scss">
.expense-calendar {
  padding: 0 30rpx;
  padding-top: 20rpx;
  .data-show {
    background: #ffffff;
    box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
    border-radius: 16rpx;
    display: flex;
    .data-show-list {
      flex: 1;
      padding: 28rpx 0 32rpx 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .data-show-list-data {
        font-size: 36rpx;
        font-weight: 500;
        color: #c78125;
        .data-show-list-unit {
          font-size: 24rpx;
        }
      }
      .data-show-list-name {
        margin-top: 10rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #333333;
      }
    }
  }
  .timing {
    font-size: 28rpx;
    font-weight: 400;
    color: #000000;
    padding: 30rpx 0;
  }
  .bill-content {
    width: 100%;
    background: #ffffff;
    border-radius: 16rpx;
    .bill-list {
      width: 100%;
      display: flex;
      .bill-list-img-show {
        width: 138rpx;
        padding: 26rpx 0 24rpx 0;
        display: flex;
        justify-content: center;
        .bill-list-img {
          width: 84rpx;
          height: 84rpx;
        }
      }
      .bill-list-info {
        flex: 1;
        box-shadow: inset 0px -2rpx 0 0 #f3f3f3;
        padding: 28rpx 30rpx 26rpx 0;
        .info {
          display: flex;
          justify-content: space-between;
          .info-name {
            font-size: 28rpx;
            font-weight: 400;
            color: #000000;
          }
          .info-price {
            font-size: 28rpx;
            font-weight: 600;
            color: #000000;
          }
        }
        .bill-list-info-time {
          font-size: 24rpx;
          font-weight: 400;
          color: #b5b5b5;
          margin-top: 6rpx;
        }
      }
    }
  }
}
</style>
