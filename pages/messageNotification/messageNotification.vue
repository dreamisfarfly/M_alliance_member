<template>
  <view>
    <!-- start message-notification -->
    <view class="message-notification">
      <!-- start message-notification-content -->
      <view class="message-notification-content">
        <u-waterfall v-model="messageList">
          <template v-slot:left="{ leftList }">
            <view
              class="message-list"
              v-for="(item, index) in leftList"
              :key="index"
            >
              <view class="img-box">
                <img class="img-box-icon" :src="item.image" />
                <view class="img-info">
                  <view class="address-information">
                    <img class="site-icon" src="/static/images/site-icon.png" />
                    <text class="site-name">{{ item.address }}</text>
                  </view>
                  <view class="browse-info">
                    <img
                      class="browse-info-icon"
                      src="/static/images/bai-browse-icon.png"
                    />
                    <text class="browse-info-count">{{ $utils.numberTransformation(item.count) }}</text>
                  </view>
                </view>
              </view>
              <view class="message-list-title">
                {{ item.title }}
              </view>
            </view>
          </template>
          <template v-slot:right="{ rightList }">
            <view
              class="message-list"
              style="margin-left: 12rpx"
              v-for="(item, index) in rightList"
              :key="index"
            >
              <view class="img-box">
                <img class="img-box-icon" :src="item.image" />
                <view class="img-info">
                  <view class="address-information">
                    <img class="site-icon" src="/static/images/site-icon.png" />
                    <text class="site-name">{{ item.address }}</text>
                  </view>
                  <view class="browse-info">
                    <img
                      class="browse-info-icon"
                      src="/static/images/bai-browse-icon.png"
                    />
                    <text class="browse-info-count">{{ $utils.numberTransformation(item.count)  }}</text>
                  </view>
                </view>
              </view>
              <view class="message-list-title">
                {{ item.title }}
              </view>
            </view>
          </template>
        </u-waterfall>
      </view>
      <!-- end message-notification-content -->
    </view>
    <!-- end message-notification -->
    <!-- start ???????????? -->
    <u-tabbar
      v-model="current"
      :list="bottomMenuList"
      inactive-color="#999999"
      active-color="#C78125"
      height="110"
      icon-size="48"
      countLabelBgColor="#C78125"
      countLabelFontSize="16"
    ></u-tabbar>
    <!-- end ???????????? -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      // ??????????????????
      bottomMenuList: [
        {
          iconPath: "/static/images/membership-card-menu-icon.png",
          selectedIconPath:
            "/static/images/select-membership-card-menu-icon.png",
          text: "?????????",
          pagePath: "/pages/membershipCard/membershipCard",
        },
        {
          iconPath: "/static/images/shop-list-icon.png",
          selectedIconPath: "/static/images/select-shop-list-icon.png",
          text: "????????????",
          pagePath: "/pages/storeList/storeList",
        },
        {
          iconPath: "/static/images/more-discount-icon.png",
          selectedIconPath: "/static/images/select-more-discount-icon.png",
          text: "????????????",
          pagePath: "",
        },
        {
          iconPath: "/static/images/message-notification-icon.png",
          selectedIconPath:
            "/static/images/select-message-notification-icon.png",
          text: "????????????",
          pagePath: "/pages/messageNotification/messageNotification",
          count: 100,
        },
      ],
      // ???????????????
      current: 3,
      // ????????????
      messageList: [
        {
          address: "????????? ????????????????????????",
          image:
            "http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg",
          count: 10,
          title: "???????????????????????????????????????????????????",
        },
        {
          address: "????????? ????????????????????????",
          image:
            "http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg",
          count: 10,
          title: "????????????????????????",
        },
        {
          address: "????????? ????????????????????????",
          image:
            "https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1663866000&t=dd6c54f6994c9a937449567225badfed",
          count: 10,
          title: "????????????????????????",
        },
        {
          address: "????????? ????????????????????????",
          image:
            "http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg",
          count: 10,
          title: "????????????????????????",
        },
        {
          address: "????????? ????????????????????????",
          image:
            "https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1663866000&t=dd6c54f6994c9a937449567225badfed",
          count: 10,
          title: "????????????????????????",
        },
        {
          address: "????????? ????????????????????????",
          image:
            "http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg",
          count: 10,
          title: "????????????????????????",
        },
        {
          address: "????????? ????????????????????????",
          image:
            "https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1663866000&t=dd6c54f6994c9a937449567225badfed",
          count: 10000,
          title: "????????????????????????",
        },
      ],
    };
  },
  mounted() {
    var a = document.getElementsByClassName("uni-page-head-hd")[0];
    a.style.opacity = 0;
  },
};
</script>

<style lang="less" scoped>
.message-notification {
  padding: 30rpx;
  box-sizing: border-box;
  .message-notification-content {
    .message-list {
      background: #ffffff;
      border-radius: 16rpx;
      margin-bottom: 20rpx;
      .img-box {
        width: 100%;
        height: auto;
        position: relative;
        .img-box-icon {
          width: 100%;
          height: 100%;
          border-radius: 16rpx 16rpx 0 0;
        }
        .img-info {
          width: 100%;
          position: absolute;
          display: flex;
          justify-content: space-between;
          bottom: 20rpx;
          padding-left: 22rpx;
          padding-right: 22rpx;
          .address-information {
            display: flex;
            align-items: center;
            .site-icon {
              margin-top: 6rpx;
              width: 20rpx;
              height: 20rpx;
            }
            .site-name {
              width: 180rpx;
              margin-left: 8rpx;
              font-size: 20rpx;
              font-weight: 400;
              color: #ffffff;
              overflow: hidden; //????????????
              white-space: nowrap; //????????????
              text-overflow: ellipsis;
            }
          }
          .browse-info {
            display: flex;
            align-items: center;
            .browse-info-icon {
              margin-top: 4rpx;
              width: 24rpx;
              height: 18rpx;
            }
            .browse-info-count {
              font-size: 20rpx;
              margin-left: 10rpx;
              font-weight: 400;
              color: #ffffff;
            }
          }
        }
      }
      .message-list-title {
        padding: 20rpx 16rpx;
        font-size: 24rpx;
        font-weight: 500;
        color: #333333;
        box-sizing: border-box;
        line-height: 34rpx;
      }
    }
  }
}
</style>