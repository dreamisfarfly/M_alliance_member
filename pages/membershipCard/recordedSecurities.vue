<template>
    <!-- start recorded-securities -->
    <view class="recorded-securities">
        <CouponRecordedSecuritiesCard v-for="(item,key) in usageRecordList" :key="key" :coupon="item"></CouponRecordedSecuritiesCard>
    </view>
    <!-- end recorded-securities -->
</template>

<script>
import CouponRecordedSecuritiesCard from '@/components/couponRecordedSecuritiesCard/couponRecordedSecuritiesCard.vue';
export default {
  components: { CouponRecordedSecuritiesCard },
  data() {
    return {
        // 使用记录
        usageRecordList: [
            {
                type: 0,
                title: '价值188元洁牙卡',
                subheading: '一次'
            },
            {
                type: 1,
                title: '10元消费券',
                subheading: '满100减10元现金券'
            },
            {
                type: 2,
                title: '5元现金券',
                subheading: '现金直接抵扣'
            }
        ]
    }
  },
  methods: {

  },
  mounted() {
    var a = document.getElementsByClassName("uni-page-head-hd")[0];
    a.style.opacity = 0;
  },
};
</script>

<style scoped lang="scss">
    .recorded-securities{
        padding: 0 14rpx;
        padding-top: 12rpx;
    }
</style>
