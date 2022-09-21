<template>
  <!-- start score -->
  <view class="score">
    <view v-for="(item, key) in fullStarsCount" :key="key">
      <img
        v-if="key < evaluationScore"
        :key="key"
        :style="[
          { width: sizeIcon.width + 'rpx' },
          { height: sizeIcon.height + 'rpx' },
        ]"
        :class="[
          iconType == 'default' ? 'star-icon' : '',
          iconType == 'score' ? 'big-icon' : '',
        ]"
        :src="scoreIcon"
        @click="compileScore(key, 0)"
      />
      <img
        v-if="key >= evaluationScore"
        :key="key + 100"
        :class="[
          iconType == 'default' ? 'star-icon' : '',
          iconType == 'score' ? 'big-icon' : '',
        ]"
        :style="[
          { width: sizeIcon.width + 'rpx' },
          { height: sizeIcon.height + 'rpx' },
        ]"
        :src="notScoreIcon"
        @click="compileScore(key, 1)"
      />
    </view>
  </view>
  <!-- end score -->
</template>

<script>
export default {
  data() {
    return {
      // 评分图标
      scoreIcon: "",
      // 未评分图标
      notScoreIcon: "",
    };
  },
  created() {
    switch (this.iconType) {
      case "default":
        this.scoreIcon = "/static/images/yes-star-icon.png";
        this.notScoreIcon = "/static/images/not-star-icon.png";
        break;
      case "score":
        this.scoreIcon = "/static/images/big-yes-star-icon.png";
        this.notScoreIcon = "/static/images/big-not-star-icon.png";
        break;
    }
  },
  props: {
    // 满星数量
    fullStarsCount: {
      typeof: Number,
      default: 5,
    },
    // 评分数
    evaluationScore: {
      type: Number,
      default: 0,
    },
    // 图标大小
    sizeIcon: {
      type: Object,
      default: function () {
        return {
          width: "24",
          height: "24rpx",
        };
      },
    },
    // 图标类型
    iconType: {
      type: String,
      default: "default",
    },
  },
  methods: {
    // 选择评分
    compileScore(key, status) {
      if (this.iconType == "score") {
        if ((key+1) == this.evaluationScore && status == 0) {
          status == 0
            ? this.$emit("compileScore", 0)
            : this.$emit("compileScore", key + 1);
          return;
        } else {
          this.$emit("compileScore", key + 1);
          return;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.score {
  display: flex;
}
.star-icon {
  margin-right: 2rpx;
}

.big-icon {
  margin-right: 20rpx;
}
</style>
