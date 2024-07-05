<template>

	<!-- Main Content -->
	<div class="container mx-auto mt-8">
		<h1 class="text-4xl font-bold mb-8">Articles</h1>

		<!-- Article Categories -->
		<div class="flex justify-center space-x-4 mb-8">
			<a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Technology</a>
			<a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Science</a>
			<a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Health</a>
			<a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Education</a>
		</div>

		<!-- Article Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Article Card 1 -->
			<div class="article-card shadow-lg">
				<img src="https://via.placeholder.com/400x200" alt="Article Image" class="article-image">
				<div class="p-6">
					<h2 class="text-xl font-semibold mb-2">Article Title 1</h2>
					<p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<a href="#" class="text-blue-600 font-semibold hover:underline">Read More</a>
				</div>
			</div>
			<!-- Article Card 2 -->
			<div class="article-card shadow-lg">
				<img src="https://via.placeholder.com/400x200" alt="Article Image" class="article-image">
				<div class="p-6">
					<h2 class="text-xl font-semibold mb-2">Article Title 2</h2>
					<p class="text-gray-600 mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<a href="#" class="text-blue-600 font-semibold hover:underline">Read More</a>
				</div>
			</div>
			<!-- Article Card 3 -->
			<div class="article-card shadow-lg">
				<img src="https://via.placeholder.com/400x200" alt="Article Image" class="article-image">
				<div class="p-6">
					<h2 class="text-xl font-semibold mb-2">Article Title 3</h2>
					<p class="text-gray-600 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat.</p>
					<a href="#" class="text-blue-600 font-semibold hover:underline">Read More</a>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import { changeLanguages } from "../stores/changeLanguage";
export default {
	name: "HomeView",

	data() {
		return {
			languagesStore: changeLanguages(),
		};
	},
};
</script>


<style>
.article-card {
	background-color: #f3f4f6;
	border-radius: 1rem;
	overflow: hidden;
	transition: transform 0.3s ease-in-out;
}

.article-card:hover {
	transform: translateY(-5px);
}

.article-image {
	object-fit: cover;
	width: 100%;
	height: 200px;
}
</style>
