<template>
      <swiper-bar class="detailswiper">
          <swiper-item v-for="(item,key) in topImage" :key="key">
              <img :src="item" alt="">
          </swiper-item>
      </swiper-bar>
</template>

<script>
import SwiperBar from '../../../components/common/swiper/SwiperBar'
import SwiperItem from '../../../components/common/swiper/SwiperItem'

export default {
    components: {
         SwiperBar,
         SwiperItem,
    },
    props: {
        topImage: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .detailswiper {
        height: 300px;
        overflow: hidden;
        margin-bottom: 12px;
    }
</style>