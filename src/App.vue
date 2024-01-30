<template>
	<router-view/>
</template>
<script>
import NavBar from "./components/NavBar.vue"

export default {
	 components: {
		NavBar,
	 }

}
</script>
<style>
	#app {
	font-family: Helvetica, Arial, sans-serif, 'Noto Nastaliq Urdu';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	}

	/* Additional CSS styles for full-screen image */
	body {
	height: 100%;
	margin: 0;
	font-family: 'Noto Nastaliq Urdu', serif;
	}
</style>