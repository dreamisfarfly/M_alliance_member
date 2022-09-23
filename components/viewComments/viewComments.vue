<template>
    <!-- start 查看评论-->
    <view class="see-evaluation">
      <!-- start evaluate-vessel -->
      <view class="evaluate-vessel">
        <!-- start evaluate-header -->
        <view class="evaluate-header">
          <!-- start score-info -->
          <view class="score-info">
            <view class="score">5.0<text style="font-size: 24rpx">分</text></view>
            <view class="score-detail-info">
              <view class="score-detail">
                <score :evaluationScore="4" />
              </view>
              <view class="score-detail-info-title">总评分</view>
            </view>
          </view>
          <!-- end score-info -->
          <!-- start separator -->
          <view class="separator"></view>
          <!-- end separator -->
          <!-- start comment-info -->
          <view class="comment-info">
            <view class="comment-info-data">2268条</view>
            <view class="comment-info-name">评价</view>
          </view>
          <!-- end comment-info -->
          <!-- start separator -->
          <view class="separator"></view>
          <!-- end separator -->
          <!-- start comment-info -->
          <view class="comment-info">
            <view class="comment-info-data">98%</view>
            <view class="comment-info-name">好评率</view>
          </view>
          <!-- end comment-info -->
        </view>
        <!-- end evaluate-header -->
        <!-- start evaluate-content -->
        <view class="evaluate-content">
          <!-- start evaluate-content-header -->
          <view class="evaluate-content-header">
            <!-- start comment-label -->
            <view
              class="comment-label"
              v-for="(item, key) in commentLabel"
              :key="key"
            >
              {{ item.name }}
              <template v-if="item.count != 0">（{{ item.count }}）</template>
            </view>
            <!-- end comment-label -->
          </view>
          <!-- end evaluate-content-header -->
          <!-- start evaluate-content-comment -->
          <view class="evaluate-content-comment">
            <!-- start comment-list -->
            <view
              class="comment-list"
              v-for="(item, key) in 9"
              :key="key"
              @click="seeEvaluation"
            >
              <view class="comment-list-header">
                <img class="user-buddha" src="" />
                <view class="comment-info">
                  <view class="user-comment-info">
                    <view class="user-name">王丽丽</view>
                    <view class="user-time">2020-08-08</view>
                  </view>
                  <score :evaluationScore="4" />
                </view>
              </view>
              <view class="comment-list-content">
                <view class="comment-content"
                  >不好意思评价晚了，非常好的店家，东西很喜欢！买来这个是送人的她很喜欢卖家的贴心让我感到很温暖。</view
                >
                <view class="comment-img-content">
                  <img
                    src=""
                    class="comment-img"
                    v-for="(item, key) in 3"
                    :key="key"
                  />
                </view>
              </view>
              <view class="comment-list-footer">
                <view class="comment-data-info">
                  <view class="browse">
                    <img
                      class="comment-data-icon"
                      src="/static/images/browse-icon.png"
                    />
                    <text class="comment-data-count">1000</text>
                  </view>
                  <view class="msg">
                    <img
                      class="comment-data-icon"
                      src="/static/images/msg-icon.png"
                    />
                    <text class="comment-data-count">1</text>
                  </view>
                </view>
              </view>
            </view>
            <!-- end comment-list -->
          </view>
          <!-- end evaluate-content-comment -->
        </view>
        <!-- end evaluate-content -->
      </view>
      <!-- end evaluate-vessel -->
    </view>
    <!-- end 查看评论-->
  </template>
  
  <script>
  import score from "@/components/score/score.vue";
  export default {
    components: { score },
    data() {
      return {
        // 评论标签
        commentLabel: [
          {
            name: "最新",
            count: 0,
          },
          {
            name: "有图",
            count: 0,
          },
          {
            name: "好评",
            count: 0,
          },
          {
            name: "服务好",
            count: 80,
          },
          {
            name: "最新",
            count: 0,
          },
          {
            name: "有图",
            count: 0,
          },
          {
            name: "干净又卫生",
            count: 0,
          },
        ],
      };
    },
    methods: {
      // 查看评价
      seeEvaluation() {
        uni.navigateTo({
          url: "/pages/my/responseEvaluation",
        });
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  .see-evaluation {
    padding: 0 30rpx;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
  }
  
  .evaluate-vessel {
    .evaluate-header {
      width: 100%;
      background: #ffffff;
      box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
      border-radius: 16rpx;
      display: flex;
      align-items: center;
      .score-info {
        padding: 22rpx 68rpx 22rpx 28rpx;
        box-sizing: border-box;
        display: flex;
        .score {
          font-size: 40rpx;
          font-weight: 600;
          color: #c78125;
        }
        .score-detail-info {
          margin-left: 12rpx;
          .score-detail {
            display: flex;
            .star-icon {
              width: 24rpx;
              height: 24rpx;
              margin-right: 2rpx;
            }
          }
          .score-detail-info-title {
            margin-top: 8rpx;
            font-size: 20rpx;
            font-weight: 400;
            color: #999999;
          }
        }
      }
      .separator {
        width: 2rpx;
        height: 44rpx;
        background: rgba(0, 0, 0, 0.1);
      }
      .comment-info {
        padding: 18rpx 68rpx 18rpx 22rpx;
        box-sizing: border-box;
        .comment-info-data {
          font-size: 24rpx;
          font-weight: 600;
          color: #333333;
        }
        .comment-info-name {
          margin-top: 2rpx;
          font-size: 20rpx;
          font-weight: 400;
          color: #999999;
        }
      }
    }
    .evaluate-content {
      margin-top: 20rpx;
      background: #ffffff;
      box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
      border-radius: 16rpx;
      padding: 0 30rpx;
      .evaluate-content-header {
        display: flex;
        flex-flow: wrap;
        padding-bottom: 30rpx;
        .comment-label {
          margin-right: 20rpx;
          margin-top: 30rpx;
          padding: 4rpx 20rpx 6rpx 20rpx;
          box-sizing: border-box;
          border-radius: 8rpx;
          border: 2rpx solid #c78125;
          font-size: 24rpx;
          font-weight: 400;
          color: #c78125;
        }
      }
      .evaluate-content-comment {
        .comment-list {
          box-sizing: border-box;
          padding-bottom: 24rpx;
          border-bottom: 2rpx solid rgba(0, 0, 0, 0.05);
          .comment-list-header {
            padding: 30rpx 0;
            display: flex;
            .user-buddha {
              width: 70rpx;
              height: 70rpx;
              border-radius: 50% 50%;
            }
            .comment-info {
              flex: 1;
              margin-left: 26rpx;
              .user-comment-info {
                display: flex;
                justify-content: space-between;
                .user-name {
                  font-size: 28rpx;
                  font-weight: 500;
                  color: #333333;
                }
                .user-time {
                  font-size: 20rpx;
                  font-weight: 400;
                  color: #999999;
                }
              }
            }
          }
          .comment-list-content {
            .comment-content {
              font-size: 24rpx;
              font-weight: 400;
              color: #333333;
              line-height: 34rpx;
            }
            .comment-img-content {
              display: flex;
              margin-top: 24rpx;
              .comment-img {
                margin-right: 20rpx;
                width: 120rpx;
                height: 120rpx;
              }
            }
          }
          .comment-list-footer {
            display: flex;
            margin-top: 48rpx;
            .comment-data-info {
              margin-left: auto;
              display: flex;
              .comment-data-icon {
                width: 28rpx;
                height: 28rpx;
              }
              .browse {
                display: flex;
                align-items: center;
              }
              .msg {
                margin-left: 44rpx;
                display: flex;
                align-items: center;
              }
              .comment-data-count {
                margin-left: 10rpx;
                font-size: 20rpx;
                font-weight: 400;
                color: #333333;
              }
            }
          }
        }
      }
    }
  }
  </style>
  