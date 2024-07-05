<template>
	<!-- Header -->
	<header>
		<NavBar></NavBar>
	</header>
	<div>
		<img src="../../public/img/banner/banner-pic-2.jpg" alt="..." class="w-full h-96 mb-0" />
	</div>

	<!-- Body -->
	<div class="font-arabic bg-cyan-950">

		<!-- Hero Section -->
		<section class="hero-section relative overflow-hidden">
			<div class="h-full flex items-center">
				<!-- Hero Content -->
				<div class="hero-content text-white ml-6 z-10">
					<h1 class="text-2xl md:text-4xl font-bold mb-4">اسلاف کے منہج کا مظہر</h1>
					<p class="text-lg md:text-xl mb-6">جہاں دونوں جہانوں کی کامیابی ملتی ہے۔</p>
					<a href="#"
						class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full inline-block">
						{{ $t("readMore") }}
					</a>
				</div>
				<!-- Hero Image -->
				<div class="hero-image absolute top-0 right-0 bottom-0 left-0 z-0">
					<img src="https://via.placeholder.com/1200x800" alt="Hero Image"
						class="w-full h-full object-cover" />
				</div>
			</div>
		</section>

		<!-- Event Cards Section -->
		<section class="events-section py-8">
			<div class="mx-12">
				<h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Upcoming Events</h2>
				<div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-20">
					<!-- Event Card 1 -->
					<div class="event-card bg-white rounded-lg shadow-md overflow-hidden">
						<img src="https://via.placeholder.com/400x200" alt="Event Image"
							class="w-full h-40 object-cover">
						<div class="p-4">
							<p class="text-sm text-gray-600 mb-2">Date: May 15, 2024</p>
							<p class="text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed tempus lectus sit amet diam porttitor, eu consequat urna tristique.</p>
						</div>
						<div class="bg-gray-100 py-2 px-4 flex justify-between items-center">
							<span class="text-xs text-gray-600">Location: University Auditorium</span>
							<a href="#" class="text-blue-600 font-semibold hover:underline">Read More</a>
						</div>
					</div>
					<!-- Event Card 2 -->
					<div class="event-card bg-white rounded-lg shadow-md overflow-hidden">
						<img src="https://via.placeholder.com/400x200" alt="Event Image"
							class="w-full h-40 object-cover">
						<div class="p-4">
							<p class="text-sm text-gray-600 mb-2">Date: June 10, 2024</p>
							<p class="text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed tempus lectus sit amet diam porttitor, eu consequat urna tristique.</p>
						</div>
						<div class="bg-gray-100 py-2 px-4 flex justify-between items-center">
							<span class="text-xs text-gray-600">Location: Conference Hall</span>
							<a href="#" class="text-blue-600 font-semibold hover:underline">Read More</a>
						</div>
					</div>
					<!-- Event Card 3 -->
					<div class="event-card bg-white rounded-lg shadow-md overflow-hidden">
						<img src="https://via.placeholder.com/400x200" alt="Event Image"
							class="w-full h-40 object-cover">
						<div class="p-4">
							<p class="text-sm text-gray-600 mb-2">Date: July 20, 2024</p>
							<p class="text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed tempus lectus sit amet diam porttitor, eu consequat urna tristique.</p>
						</div>
						<div class="bg-gray-100 py-2 px-4 flex justify-between items-center">
							<span class="text-xs text-gray-600">Location: Seminar Room</span>
							<a href="#" class="text-blue-600 font-semibold hover:underline">Read More</a>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-12 mx-12">
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
					<!-- Event Card 1 -->
					<div class="event-card bg-white rounded-lg shadow-md overflow-hidden">
						<img src="https://via.placeholder.com/400x200" alt="Event Image"
							class="w-full h-40 object-cover">
						<div class="p-4">
							<p class="text-sm text-gray-600 mb-2">Date: May 15, 2024</p>
							<p class="text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed tempus lectus sit amet diam porttitor, eu consequat urna tristique.</p>
						</div>
						<div class="bg-gray-100 py-2 px-4 flex justify-between items-center">
							<span class="text-xs text-gray-600">Location: University Auditorium</span>
							<a href="#" class="text-blue-600 font-semibold hover:underline">Read More</a>
						</div>
					</div>
					<!-- Event Card 2 -->
					<div class="event-card bg-white rounded-lg shadow-md overflow-hidden">
						<img src="https://via.placeholder.com/400x200" alt="Event Image"
							class="w-full h-40 object-cover">
						<div class="p-4">
							<p class="text-sm text-gray-600 mb-2">Date: June 10, 2024</p>
							<p class="text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed tempus lectus sit amet diam porttitor, eu consequat urna tristique.</p>
						</div>
						<div class="bg-gray-100 py-2 px-4 flex justify-between items-center">
							<span class="text-xs text-gray-600">Location: Conference Hall</span>
							<a href="#" class="text-blue-600 font-semibold hover:underline">Read More</a>
						</div>
					</div>
					<!-- Event Card 3 -->
					<div class="event-card bg-white rounded-lg shadow-md overflow-hidden">
						<img src="https://via.placeholder.com/400x200" alt="Event Image"
							class="w-full h-40 object-cover">
						<div class="p-4">
							<p class="text-sm text-gray-600 mb-2">Date: July 20, 2024</p>
							<p class="text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed tempus lectus sit amet diam porttitor, eu consequat urna tristique.</p>
						</div>
						<div class="bg-gray-100 py-2 px-4 flex justify-between items-center">
							<span class="text-xs text-gray-600">Location: Seminar Room</span>
							<a href="#" class="text-blue-600 font-semibold hover:underline">Read More</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- University Stats Section -->
		<section class="university-stats bg-gray-100 py-20">
			<div class="mx-12">
				<h2 class="text-4xl font-bold text-center text-gray-800 mb-12">University Statistics</h2>
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-16">
					<!-- Students -->
					<div class="statistic-card bg-white rounded-lg shadow-md p-4 flex items-center h-20">
						<div
							class="circle-indicator bg-indigo-300 rounded-full h-12 w-12 flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
								viewBox="0 0 24 24">
								<path stroke="currentColor" stroke-linecap="round" stroke-width="2"
									d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
							</svg>
						</div>
						<div>
							<h4 class="text-lg font-semibold text-gray-800 m-0">Students</h4>
							<p class="text-gray-600 m-0">10,000+</p>
						</div>
					</div>
					<!-- Teachers -->
					<div class="statistic-card bg-white rounded-lg shadow-md p-4 flex items-center h-20">
						<div
							class="circle-indicator bg-blue-300 rounded-full h-12 w-12 flex items-center justify-center mr-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
								stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
							</svg>


						</div>
						<div>
							<h4 class="text-lg font-semibold text-gray-800 m-0">Teachers</h4>
							<p class="text-gray-600 m-0">500+</p>
						</div>
					</div>
					<!-- Alumni -->
					<div class="statistic-card bg-white rounded-lg shadow-md p-4 flex items-center h-20">
						<div
							class="circle-indicator bg-green-300 rounded-full h-12 w-12 flex items-center justify-center mr-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
								stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
							</svg>


						</div>
						<div>
							<h4 class="text-lg font-semibold text-gray-800 m-0">Alumni</h4>
							<p class="text-gray-600 m-0">1000+</p>
						</div>
					</div>
					<!-- Staff -->
					<div class="statistic-card bg-white rounded-lg shadow-md p-4 flex items-center h-20">
						<div
							class="circle-indicator bg-yellow-300 rounded-full h-12 w-12 flex items-center justify-center mr-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
								stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
							</svg>


						</div>
						<div>
							<h4 class="text-lg font-semibold text-gray-800 m-0">Staff</h4>
							<p class="text-gray-600 m-0">300+</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="features pb-48 pt-32 bg-gray-100">
			<!--Deartments Section-->
			<div class="mx-12">

				<!--Deartments Headings-->
				<div class="flex justify-center">
					<h1 class="w-full mx-16 mt-2 text-4xl font-bold">
						{{ $t("departments") }}
					</h1>
				</div>

				<!--Deartments First Row-->
				<div class="flex justify-center">
					<div
						class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 mb-2 sm:mb-10 gap-2 sm:gap-14">

						<!--First-->
						<div class="w-60">
							<div class="p-2 bg-white rounded-xl shadow-md hover-translate hover:shadow-xl">
								<h3 class="text-xl font-semibold text-gray-800 m-0">
									{{ $t("departmentsNames.fourth") }}
								</h3>
							</div>
						</div>

						<!--First-->
						<div class="w-60">
							<div class="p-2 bg-white rounded-xl shadow-md hover-translate hover:shadow-xl">
								<h3 class="text-xl font-semibold text-gray-800 m-0">
									{{ $t("departmentsNames.third") }}
								</h3>
							</div>
						</div>

						<!--First-->
						<div class="w-60">
							<div class="p-2 bg-white rounded-xl shadow-md hover-translate hover:shadow-xl">
								<h3 class="text-xl font-semibold text-gray-800 m-0">
									{{ $t("departmentsNames.second") }}
								</h3>
							</div>
						</div>

						<!--First-->
						<div class="w-60">
							<div class="p-2 bg-white rounded-xl shadow-md hover-translate hover:shadow-xl">
								<h3 class="text-xl font-semibold text-gray-800 m-0">
									{{ $t("departmentsNames.first") }}
								</h3>
							</div>
						</div>
					</div>
				</div>

				<!--Deartments Second Row-->
				<div class="flex justify-center">
					<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-14">

						<!--First-->
						<div class="w-60">
							<div class="p-2 bg-white rounded-xl shadow-md hover-translate hover:shadow-xl">
								<h3 class="text-xl font-semibold text-gray-800 m-0">
									{{ $t("departmentsNames.eighth") }}
								</h3>
							</div>
						</div>

						<!--First-->
						<div class="w-60">
							<div class="p-2 bg-white rounded-xl shadow-md hover-translate hover:shadow-xl">
								<h3 class="text-xl font-semibold text-gray-800 m-0">
									{{ $t("departmentsNames.seventh") }}
								</h3>
							</div>
						</div>

						<!--First-->
						<div class="w-60">
							<div class="p-2 bg-white rounded-xl shadow-md hover-translate hover:shadow-xl">
								<h3 class="text-xl font-semibold text-gray-800 m-0">
									{{ $t("departmentsNames.sixth") }}
								</h3>
							</div>
						</div>

						<!--First-->
						<div class="w-60">
							<div class="p-2 bg-white rounded-xl shadow-md hover-translate hover:shadow-xl">
								<h3 class="text-xl font-semibold text-gray-800 m-0">
									{{ $t("departmentsNames.fifth") }}
								</h3>
							</div>
						</div>
					</div>
				</div>

				<!--Deartments Third Row-->
				<div class="flex justify-center">
					<div
						class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-2 sm:my-10 gap-2 sm:gap-14">

						<!--First-->
						<div class="w-60">
							<div class="p-2 bg-white rounded-xl shadow-md hover-translate hover:shadow-xl">
								<h3 class="text-xl font-semibold text-gray-800 m-0">
									{{ $t("departmentsNames.twelfth") }}
								</h3>
							</div>
						</div>


						<!--First-->
						<div class="w-60">
							<div class="p-2 bg-white rounded-xl shadow-md hover-translate hover:shadow-xl">
								<h3 class="text-xl font-semibold text-gray-800 m-0">
									{{ $t("departmentsNames.eleventh") }}
								</h3>
							</div>
						</div>

						<!--First-->
						<div class="w-60">
							<div class="p-2 bg-white rounded-xl shadow-md hover-translate hover:shadow-xl">
								<h3 class="text-xl font-semibold text-gray-800 m-0">
									{{ $t("departmentsNames.tenth") }}
								</h3>
							</div>
						</div>

						<!--First-->
						<div class="w-60">
							<div class="p-2 bg-white rounded-xl shadow-md hover-translate hover:shadow-xl">
								<h3 class="text-xl font-semibold text-gray-800 m-0">
									{{ $t("departmentsNames.ninth") }}
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- News Section -->
		<section class="news-section py-12 bg-gray-100">
			<div class="mx-12">
				<h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Latest News</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<!-- News Card 1 -->
					<div class="news-card bg-white rounded-lg shadow-md overflow-hidden">
						<img src="https://via.placeholder.com/400x250" alt="News Image"
							class="w-full h-40 object-cover">
						<div class="p-6">
							<h3 class="text-xl font-semibold text-gray-800 m-0 mb-2">News Title 1</h3>
							<p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed tempus lectus sit amet diam porttitor, eu consequat urna tristique.</p>
							<a href="#" class="text-blue-600 font-semibold hover:underline">Read More</a>
						</div>
					</div>
					<!-- News Card 2 -->
					<div class="news-card bg-white rounded-lg shadow-md overflow-hidden">
						<img src="https://via.placeholder.com/400x250" alt="News Image"
							class="w-full h-40 object-cover">
						<div class="p-6">
							<h3 class="text-xl font-semibold text-gray-800 m-0 mb-2">News Title 2</h3>
							<p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed tempus lectus sit amet diam porttitor, eu consequat urna tristique.</p>
							<a href="#" class="text-blue-600 font-semibold hover:underline">Read More</a>
						</div>
					</div>
					<!-- News Card 3 -->
					<div class="news-card bg-white rounded-lg shadow-md overflow-hidden">
						<img src="https://via.placeholder.com/400x250" alt="News Image"
							class="w-full h-40 object-cover">
						<div class="p-6">
							<h3 class="text-xl font-semibold text-gray-800 m-0 mb-2">News Title 3</h3>
							<p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed tempus lectus sit amet diam porttitor, eu consequat urna tristique.</p>
							<a href="#" class="text-blue-600 font-semibold hover:underline">Read More</a>
						</div>
					</div>
				</div>
			</div>
		</section>


		<!-- Scholars' Opinions Section -->
		<section class="scholars-opinions bg-gray-200 py-20">
			<div class="mx-12">
				<h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Scholars' Opinions</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<!-- Opinion 1 -->
					<div class="opinion-card bg-white rounded-lg shadow-md p-6">
						<h3 class="text-xl font-semibold text-gray-800 m-0 mb-4">"Great facilities and excellent faculty
							members. A truly enriching experience!"</h3>
						<p class="text-gray-600">- Prof. John Doe, Department of Science</p>
					</div>
					<!-- Opinion 2 -->
					<div class="opinion-card bg-white rounded-lg shadow-md p-6">
						<h3 class="text-xl font-semibold text-gray-800 m-0 mb-4">"The university provides a conducive
							environment for research and learning. Highly recommended!"</h3>
						<p class="text-gray-600">- Dr. Jane Smith, Department of Humanities</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Introductory Section -->
		<section class="intro-section bg-gradient-to-r from-blue-400 to-purple-600 py-20">
			<div class="mx-12">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<!-- Text Content -->
					<div class="text-content text-white">
						<h2 class="text-4xl font-bold mb-4">Welcome to Our University</h2>
						<p class="text-lg mb-6">Empowering minds, shaping futures</p>
						<p class="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
							odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
							elementum imperdiet.</p>
						<a href="#"
							class="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full inline-block hover:bg-purple-700 hover:text-white">Explore
							More</a>
					</div>
					<!-- Image -->
					<div class="image-container">
						<img src="https://via.placeholder.com/400x300" alt="University Image"
							class="mx-auto md:ml-auto md:mr-0 rounded-lg shadow-md">
					</div>
				</div>
			</div>
		</section>

		<!-- Footer Section -->
		<footer class="bg-gray-800 text-white py-12">
			<div class="container mx-auto">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<!-- Contact Info -->
					<div class="contact-info">
						<h3 class="text-xl font-bold mb-4">Contact Us</h3>
						<p><i class="fas fa-map-marker-alt"></i> 123 University St, City, Country</p>
						<p><i class="fas fa-phone-alt"></i> +123 456 7890</p>
						<p><i class="fas fa-envelope"></i> info@example.com</p>
					</div>
					<!-- Quick Links -->
					<div class="quick-links">
						<h3 class="text-xl font-bold mb-4">Quick Links</h3>
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Courses</a></li>
							<li><a href="#">Admissions</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>
					<!-- Social Media -->
					<div class="social-media">
						<h3 class="text-xl font-bold mb-4">Connect With Us</h3>
						<div class="flex items-center space-x-4">
							<a href="#" class="text-2xl"></a>
							<a href="#" class="text-2xl"></a>
							<a href="#" class="text-2xl"></a>
							<a href="#" class="text-2xl"></a>
						</div>
					</div>
				</div>
				<!-- Copyright -->
				<div class="text-center mt-8">
					<p>&copy; 2024 University Name. All rights reserved.</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/NavBar.vue";
import { changeLanguages } from "../stores/changeLanguage";

export default {
	name: "HomeView",
	components: {
		HelloWorld,
		NavBar,
	},

	computed: {
		language() {
			return this.languagesStore.currentLanguage;
		}
	},

	data() {
		return {
			languagesStore: changeLanguages(),
		};
	},
};
</script>