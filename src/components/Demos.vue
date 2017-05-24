<template>
	<div class="page-demos">
		<div class="page-title">Vue组件</div>
		<ul class="page-demos-list">
			<li><router-link to="Spinner">loading加载样式</router-link></li>
			<li><a href="/Spinner">图片轮播</a></li>
			<li><a href="/Spinner">下拉刷新</a></li>
			<li><a href="/Spinner">上拉加载</a></li>
		</ul>
	</div>
</template>

<script type="text/babel">
	export default {
		name: "Demos"
	}
</script>

<style >
	.page-demos-list li {
		background: #fff;
		border-bottom: 1px solid #efefef;
		position: relative;
		font-size: 16px;
		
	}
	.page-demos-list li:before {
		position: absolute;
		width: 12px;
		height: 12px;
		border-radius: 100%;
		background-color: rgb(38, 162, 255);
		content: '';
		display: block;
		left: 15px;
		top: 50%;
		margin-top:-6px;
	}
	.page-demos-list li a {
		padding: 15px 0px;
		text-indent: 35px;
		display: block;
		width: 100%;
		height: 100%;
	}
	.page-demos-list li a:after {
		content: '';
		display: block;
		position: absolute;
		height: 8px;
		width: 8px;
		border: 2px solid #cdcdcd;
		border-left: none;
		border-bottom: none;
		top: 50%;
		right: 20px;
		transform: translateY(-50%) rotate(45deg);
		-webkit-transform: translateY(-50%) rotate(45deg);

	}
	.page-demos-list li:after {
		position: absolute;
		width: 8px;
		height: 8px;
		border-radius: 100%;
		background-color: #fff;
		content: '';
		display: block;
		left: 17px;
		top: 50%;
		margin-top:-4px;
	}
</style>