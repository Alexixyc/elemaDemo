<template>
<div>
	<!-- <router-view></router-view> -->
	<v-header></v-header>
	<div class="tab">
		<div class="tab-item">
			<router-link :to="{ name: 'goods', params: {} }">商品</router-link>
		</div>
		<div class="tab-item">
			<router-link :to="{ name: 'ratings', params: {} }">评价</router-link>
		</div>
		<div class="tab-item">
			<router-link :to="{ name: 'seller', params: {} }">商家</router-link>
		</div>
	</div>
	<router-view></router-view>
</div>
</template>
<script type="text/ecmscript-6">
import header from 'components/header/header'
export default {
	data: function() {
		return {

		}
	},
	components: {
		'v-header': header
	}
}
</script>

<style lang="less">
@import './common/style/index.less';
.tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    .border-1px(rgba(7, 17, 27, 0.1));
    .tab-item {
        /*?????*/
        flex: 1;
        /*?????*/
        text-align: center;
        a {
            display: block;
            font-size: 14px;
            color: rgb(77, 85, 93);
            &.active {
                color: rgb(240, 20, 20);
            }
        }
    }
}
</style>
