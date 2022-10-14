<template>
  <!-- start shop-evaluation -->
  <view class="shop-evaluation">
    <!-- start shop-evaluation-award-card -->
    <view class="shop-evaluation-award-card">
      <view class="shop-evaluation-award-card-title">填写评价得100积分</view>
      <img src="" class="shop-evaluation-award-card-icon" />
    </view>
    <!-- end shop-evaluation-award-card -->
    <!-- start shop-evaluation-form-card -->
    <view class="shop-evaluation-form-card">
      <!-- start shop-evaluation-form-card-header -->
      <view class="shop-evaluation-form-card-header">
        <view class="shop-evaluation-form-card-header-name">湖南山水体验</view>
        <view class="evaluate-vessel">
          <img
            class="evaluate-vessel-icon"
            v-if="form.status == 0"
            src="/static/images/not-gouxuan-icon.png"
            @click="form.status = 1"
          />
          <img
            class="evaluate-vessel-icon"
            v-if="form.status == 1"
            src="/static/images/select-gouxuan-icon.png"
            @click="form.status = 0"
          />
          <text class="evaluate-vessel-name">匿名评价</text>
        </view>
      </view>
      <!-- end shop-evaluation-form-card-header -->
      <!-- start score-vessel -->
      <view class="score-vessel">
        <Score
          @compileScore="compileScore"
          :evaluationScore="scoreCount"
          iconType="score"
          :sizeIcon="{ width: 60, height: 58 }"
        ></Score>
      </view>
      <!-- end score-vessel -->
      <!-- start comment-vessel -->
      <view class="comment-vessel">
        <textarea placeholder="请输入评论内容" />
      </view>
      <!-- end comment-vessel -->
      <!-- start img-upload -->
      <view class="img-upload">
        <CommentUploadPicture />
      </view>
      <!-- end img-upload -->
    </view>
    <!-- end shop-evaluation-form-card -->
    <!-- start hint -->
    <view class="hint"
      >好评+上传商品图，立即获得100积分。积分可以用来购买优惠券</view
    >
    <!-- end hint -->
    <!-- start confirm-submit -->
    <view class="confirm-submit">确认提交</view>
    <!-- end confirm-submit -->
  </view>
  <!-- end shop-evaluation -->
</template>

<script>
import Score from "@/components/score/score.vue";
import CommentUploadPicture from "@/components/commentUploadPicture/commentUploadPicture.vue";
export default {
  data() {
    return {
      // 评分数
      scoreCount: 0,
      // 表单
      form: {
        status: 0,
      },
    };
  },
  mounted() {
    var a = document.getElementsByClassName("uni-page-head-hd")[0];
    a.style.opacity = 0;
  },
  components: { Score, CommentUploadPicture },
  methods: {
    // 评分编辑
    compileScore(score) {
      this.scoreCount = score;
    },
  },
};
</script>

<style lang="less" scoped>
.shop-evaluation {
  padding: 30rpx;
  box-sizing: border-box;
  .shop-evaluation-award-card {
    background: rgba(220, 174, 98, 0.11);
    border-radius: 16rpx;
    border: 2rpx solid #ded0bb;
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .shop-evaluation-award-card-title {
      font-size: 28rpx;
      font-weight: 500;
      color: #333333;
    }
    .shop-evaluation-award-card-icon {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50% 50%;
    }
  }
  .shop-evaluation-form-card {
    margin-top: 20rpx;
    background: #ffffff;
    border-radius: 16rpx;
    padding: 30rpx 20rpx;
    box-sizing: border-box;
    .shop-evaluation-form-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .shop-evaluation-form-card-header-name {
        font-size: 28rpx;
        font-weight: 500;
        color: #333333;
      }
      .evaluate-vessel {
        display: flex;
        align-items: center;
        .evaluate-vessel-icon {
          width: 24rpx;
          height: 24rpx;
        }
        .evaluate-vessel-name {
          margin-left: 6rpx;
          font-size: 24rpx;
          font-weight: 400;
          color: #999999;
        }
      }
    }
    .score-vessel {
      display: flex;
      justify-content: center;
      padding: 50rpx 0 42rpx 0;
    }
    .img-upload {
      margin-top: 30rpx;
    }
    .comment-vessel {
      width: 100%;
      height: 266rpx;
      background: #f9f9f9;
      border-radius: 16rpx;
      padding: 20rpx 28rpx;
      box-sizing: border-box;
      textarea {
        width: 100%;
        height: 100%;
        font-size: 28rpx;
        font-weight: 400;
        color: #333333;
      }
    }
  }
  .hint {
    margin-top: 24rpx;
    font-size: 20rpx;
    font-weight: 400;
    color: #c78125;
  }
  .confirm-submit {
    margin-top: 60rpx;
    width: 100%;
    padding: 18rpx 0;
    background: #c78125;
    border-radius: 16rpx;
    font-size: 32rpx;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
  }
}
</style>
