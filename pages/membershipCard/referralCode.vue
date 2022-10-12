<template>
  <!-- start referral-code -->
  <view class="referral-code" :style="{height: swiperHeight}">
    <!-- start referral-code-bak -->
    <img class="referral-code-bak" src="" />
    <!-- end referral-code-bak -->
    <!-- start referral-code-vessel -->
    <view class="referral-code-vessel">
      <!-- start tewitch-versionst-vessel -->
      <view class="tewitch-versionst-vessel">
        <view class="tewitch-versionst" @click="isPulldown = !isPulldown">
          普通模版
          <img
            class="triangle-bottom-icon"
            src="/static/images/triangle-bottom-icon.png"
        />
        <view class="tewitch-versionst-pulldown" v-if="isPulldown">
          <view class="tewitch-versionst-pulldown-list">11</view>
          <view class="tewitch-versionst-pulldown-list">11</view>
        </view>
      </view>
      </view>
      <!-- end tewitch-versionst-vessel -->
      <!-- start bottom-vessel -->
      <view class="bottom-vessel">
        <!-- start referral-code-card -->
        <view class="referral-code-card">
          <!-- start referral-code-card-header -->
          <view class="referral-code-card-header">
            <view class="recommend-information">
              <view class="recommend-info">
                <img
                  class="recommend-info-icon"
                  src="/static/images/shangjiafuwu-icon.png"
                />
                <text class="recommend-info-name">小炒黄牛</text>
              </view>
              <view class="member-info"
                >年卡会员：<text style="color: #60b251">8.5折</text></view
              >
              <view class="shop-manager">店长：王心凌</view>
              <view class="tel">tel ：13566668888</view>
            </view>
            <view class="promotion-code">
              <img src="" class="promotion-code-icon" />
              <view class="promotion-code-name">扫码办理会员卡</view>
            </view>
          </view>
          <!-- end referral-code-card-header -->
          <view class="referral-code-card-footer">联盟会员管理中心</view>
        </view>
        <!-- end referral-code-card -->
        <!-- start operation-card -->
        <view class="operation-card">
          <view class="operation-card-list">
            <img
              class="operation-card-list-icon"
              src="/static/images/xiazai-icon.png"
            />
            <text class="operation-card-list-name">下载到手机</text>
          </view>
          <view class="operation-card-list-separator"></view>
          <view class="operation-card-list">
            <img
              class="operation-card-list-icon"
              src="/static/images/fuzai-icon.png"
            />
            <text class="operation-card-list-name">复制码牌连接</text>
          </view>
        </view>
        <!-- end operation-card -->
      </view>
      <!-- end bottom-vessel -->
    </view>
    <!-- end referral-code-vessel -->
  </view>
  <!-- end referral-code -->
</template>

<script>
export default {
  data(){
    return {
      swiperHeight: '',
      isPulldown: false,
    }
  },
  mounted() {
    var a = document.getElementsByClassName("uni-page-head-hd")[0];
    a.style.opacity = 0;

    document.addEventListener('click', (e)=> {
      if (e.target.className != 'tewitch-versionst' && e.target.className != 'tewitch-versionst-pulldown-list') {
        this.isPulldown = false;
      }
    });
 
    let that = this;
    uni.getSystemInfo({
      success: (resu) => {
        // resu 可以获取当前屏幕的高度
        const query = uni.createSelectorQuery();
        query.select(".referral-code").boundingClientRect();
        query.exec((res) => {
          that.swiperHeight = resu.windowHeight - res[0].top + "px";
        });
      },
      fail: (res) => {},
    });
  }
};
</script>

<style lang="less" scoped>
.referral-code {
  width: 100%;
  height: 100vh;
  position: relative;
  .referral-code-bak {
    width: 100%;
    height: 100%;
  }
  .referral-code-vessel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 30rpx;
    box-sizing: border-box;
    .tewitch-versionst-vessel {
      display: flex;
      .tewitch-versionst {
        margin-top: 30rpx;
        margin-left: auto;
        width: 168rpx;
        height: 50rpx;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 4rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28rpx;
        font-weight: 400;
        color: #ffffff;
        position: relative;
        z-index: 666;
        .triangle-bottom-icon {
          width: 14rpx;
          height: 10rpx;
          margin-left: 14rpx;
        }
        .tewitch-versionst-pulldown{
          width: 100%;
          position: absolute;
          left: 0;
          top: 50rpx;
          background: #ffffff;
          .tewitch-versionst-pulldown-list{
            width: 100%;
            height: 40rpx;
            color: #ffffff;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4rpx;
          }
        }
      }
    }
    .bottom-vessel {
      width: 100%;
      padding: 0 30rpx;
      box-sizing: border-box;
      position: absolute;
      bottom: 52rpx;
      left: 0;
      .referral-code-card {
        width: 100%;
        margin-top: 808rpx;
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
        border-radius: 16rpx;
        backdrop-filter: blur(20rpx);
        .referral-code-card-header {
          width: 100%;
          padding: 0 44rpx 20rpx 30rpx;
          box-sizing: border-box;
          border-bottom: 2rpx solid #dbdbdb;
          display: flex;
          justify-content: space-between;
          .recommend-information {
            .recommend-info {
              margin-top: 44rpx;
              display: flex;
              align-items: center;
              .recommend-info-icon {
                width: 30rpx;
                height: 28rpx;
              }
              .recommend-info-name {
                margin-left: 20rpx;
                font-size: 36rpx;
                font-weight: 500;
                color: #333333;
              }
            }
            .member-info {
              margin-top: 10rpx;
              margin-left: 50rpx;
              font-size: 24rpx;
              font-weight: 500;
              color: #666666;
            }
            .shop-manager {
              margin-top: 60rpx;
              font-size: 28rpx;
              font-weight: 400;
              color: #666666;
            }
            .tel {
              margin-top: 10rpx;
              font-size: 24rpx;
              font-weight: 400;
              color: #666666;
            }
          }
          .promotion-code {
            .promotion-code-icon {
              margin-top: 34rpx;
              width: 200rpx;
              height: 200rpx;
            }
            .promotion-code-name {
              margin-top: 20rpx;
              font-size: 24rpx;
              font-weight: 400;
              color: #999999;
              text-align: center;
            }
          }
        }
        .referral-code-card-footer {
          padding: 20rpx 0 24rpx 0;
          font-size: 24rpx;
          font-weight: 400;
          color: #999999;
          text-align: center;
        }
      }
      .operation-card {
        margin-top: 20rpx;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
        backdrop-filter: blur(20rpx);
        border-radius: 16rpx;
        display: flex;
        align-items: center;
        height: 100rpx;
        .operation-card-list-separator {
          width: 2rpx;
          height: 60rpx;
          background: rgba(0, 0, 0, 0.05);
        }
        .operation-card-list {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          .operation-card-list-icon {
            width: 40rpx;
            height: 40rpx;
          }
          .operation-card-list-name {
            margin: 20rpx;
            font-size: 28rpx;
            font-weight: 400;
            color: #333333;
          }
        }
      }
    }
  }
}
</style>
