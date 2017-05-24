<template>
	<div class="free-spinner">
		<div class="page-title">Spinner</div>
		<div class="snake"></div>
	</div>
</template>

<script type="text/babel">
	export default {
		name: 'Spinner'
	}
</script>

<style>
		.snake {
			width: 28px;
			height: 28px;
			border: 4px solid transparent;
			border-top-color: rgb(38, 162, 255);
		    border-left-color: rgb(38, 162, 255);
		    border-bottom-color: rgb(38, 162, 255);
    		border-radius: 50%;
    		animation: snake-rotate 0.8s infinite linear;
    		-webkit-animation: snake-rotate 0.8s infinite linear;
    		margin-bottom: 30px;
		}

		@keyframes snake-rotate {
			0% {
				transform: rotate(0deg);
				-webkit-transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
				-webkit-transform: rotate(360deg);
			}
		}


		@-webkit-keyframes mint-spinner-rotate {
			0% {
				transform: rotate(0deg);
				-webkit-transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
				-webkit-transform: rotate(360deg);
			}
		}
</style>