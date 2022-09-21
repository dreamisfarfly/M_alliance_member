<template>
    <!-- start recorded-securities -->
    <view class="recorded-securities">
        <coupon-card v-for="(item,key) in usageRecordList" :key="key" :coupon="item"></coupon-card>
    </view>
    <!-- end recorded-securities -->
</template>

<script>
import couponCard from '@/components/couponCard/couponCard.vue';
export default {
  components: { couponCard },
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

  }
};
</script>

<style scoped lang="scss">
    .recorded-securities{
        padding: 0 14rpx;
        padding-top: 12rpx;
    }
</style>
