<template>
  <!-- start comment-upload-picture -->
  <view class="comment-upload-picture">
    <img class="upload-icon" src="/static/images/upload-icon.png" />
    <template v-if="imgList.length != 0">
      <img
        :class="(key+1) % 4 == 0 ? '' : 'img-distance'"
        class="img-list"
        src=""
        v-for="(item, key) in imgList"
        :key="key"
      />
    </template>
  </view>
  <!-- end comment-upload-picture -->
</template>

<script>
export default {
  data() {
    return {
      // 图片列表
      imgList: [{}],
    };
  },
};
</script>

<style lang="less" scoped>
.comment-upload-picture {
  .upload-icon {
    width: 140rpx;
    height: 140rpx;
  }
  .img-list {
    width: 140rpx;
    height: 140rpx;
    border-radius: 14rpx 14rpx;
    margin-bottom: 20rpx;
  }
  .img-distance {
    margin-left: 30rpx;
    //4 8
  }
}
</style>
