<template>
	<div class="vip-header">
	    <base-logo :title="'VIP会员'"></base-logo>
	    <base-search-box></base-search-box>
	</div>
</template>

<script>
    import BaseLogo from '@/components/base/base-logo'
    import BaseSearchBox from '@/components/base/base-search-box'

    const components = { BaseLogo, BaseSearchBox }

	export default {
		name: 'VipHeader',
		components
	}
</script>

<style scoped>
	.vip-header{
	    flex: none;
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
		width: 100%;
		height: 39px;
		background-color: var(--common-header-bg-color);
	}
</style>