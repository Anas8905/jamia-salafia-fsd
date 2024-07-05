<style>
.container {
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin-top: 1.5em;
	margin-bottom: 0.5em;
}

p {
	margin-bottom: 1.5em;
}

img {
	max-width: 100%;
	height: auto;
	margin-bottom: 1.5em;
}
</style>
<template>
	<div>
		<NavBar></NavBar>
		<!-- Main Content -->
		<div class="container">
			<h1 class="text-3xl font-bold">Article Title</h1>
			<p class="text-gray-600">Published on <span class="font-semibold">March 25, 2024</span> by <span
					class="font-semibold">Author Name</span></p>
			<img src="https://via.placeholder.com/800x400" alt="Article Image" class="mb-4">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus fermentum quam, nec hendrerit lorem
				finibus ut. Integer et est a magna consectetur pharetra. Vivamus id turpis efficitur, feugiat mi sit
				amet, fermentum dolor. Nullam quis tortor nulla. Aliquam non quam eu enim iaculis placerat eu non nisl.
				Cras sagittis elit id justo ultricies, id accumsan tellus posuere. Nam nec urna id nisi euismod placerat
				vel sit amet leo. Nulla facilisi.</p>
			<p>Integer quis urna non magna malesuada vestibulum non non urna. Vivamus mattis neque nec lorem laoreet,
				nec fermentum ipsum vehicula. Fusce aliquam velit in quam pharetra, at consequat felis consequat. Proin
				tincidunt erat vel arcu feugiat aliquet. Aliquam quis justo quis sem tempor sollicitudin. Vestibulum sit
				amet enim non enim rhoncus accumsan. Cras laoreet lobortis nibh. Nam auctor risus eget est vulputate
				commodo.</p>
			<p>Nulla facilisi. Donec vel est augue. Curabitur ut felis a libero consequat tempus. Vestibulum ante ipsum
				primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer rutrum tellus vitae metus
				gravida, ac ultrices ex scelerisque. Fusce vitae semper dolor. Aenean lacinia, eros vel fringilla
				eleifend, enim libero posuere justo, id tincidunt odio lectus nec lectus. Duis a metus nec lectus
				tincidunt rutrum a eget orci. Donec et metus augue.</p>
			<p>Mauris at dignissim est. Proin eu metus nec nisl dignissim tristique. Integer volutpat enim orci, nec
				eleifend dui suscipit sed. Morbi a magna vehicula, suscipit lorem ac, feugiat tellus. Curabitur sed elit
				id lacus fermentum tristique sit amet et lectus. Nullam semper felis nec luctus ultrices. Sed blandit
				nibh in risus dapibus tempus. Duis ultricies nisi in ipsum dictum ultrices. Suspendisse commodo sem eu
				metus rhoncus laoreet. Pellentesque at magna sit amet urna mattis faucibus ac sed ligula. Duis non velit
				id elit tincidunt dapibus. Vestibulum vestibulum, turpis vel congue ultricies, sapien leo aliquam risus,
				id posuere ex enim vitae lorem. Nam id tincidunt turpis. Aenean id arcu ut nisi pharetra finibus. Nam
				tristique lectus at elit lacinia suscipit.</p>
		</div>

	</div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/NavBar.vue";
import { changeLanguages } from '../stores/changeLanguage'

export default {
	name: "AlumniView",
	components: {
		HelloWorld,
		NavBar
	},

	data() {
		return {
			languagesStore: changeLanguages(),
		};
	},
};
</script>