<template>
	<div class="free-spinner">
		<div class="page-title">Spinner</div>
		<ul>
			<li class="free-spinner-cell">
				<div class="free-spinner-cell-label">Snake</div>
				<div class="free-spinner-cell-val">jajajaj</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/babel">
	import Spinner from '../packages/Spinner/index.js'
	export default {
		name: 'page-Spinner',
		components: {
			Spinner
		} 
	}
</script>

<style lang="less" type="text/css">
@component-namespace mint {
  @component indicator {
    transition: opacity .2s linear;

    @descendent wrapper {
      position: fixed 50% * * 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      box-sizing: border-box;
      text-align: center;
    }

    @descendent text {
      display: block;
      color: #fff;
      text-align: center;
      margin-top: 10px;
      font-size: 16px;
    }

    @descendent spin {
      display: inline-block;
      text-align: center;
    }

    @descendent mask {
      position: fixed 0 * * 0;
      size: 100%;
      opacity: 0;
      background: transparent;
    }
  }
}

.mint-indicator-enter,
.mint-indicator-leave-active {
  opacity: 0;
}
</style>