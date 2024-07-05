<template>

	<!--Larger screen-->
	<div class="fixed w-full z-30 bg-dark-cyan hidden lg:block border-b-2 border-golden">
		<div class="relative flex justify-between h-16 mx-2 items-center">
			<!-- Language toggle -->
			<div>
				<button type="button" @click="changeLanguage()"
					class="absolute top-3 left-2 text-xs text-white border rounded-full px-3 py-2 bg-cyan-950 hover:bg-cyan-900 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0"
					stroke="currentColor" class="w-5 h-5 mr-2">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
					</svg>
					<span class="font-medium">{{ nextLanguage }}</span>
				</button>
			</div>

			<!-- Navlinks -->
			<div class="w-[640px]">
				<div class="items-center w-full">
					<ul class="flex justify-between font-bold p-0 bg-transparent mt-0 border-0">
						<li v-for="(link, index) in navLinks" :key="index">
							<router-link class="font-arabic nav-links bottom-border-animation" :to="link.to"> {{
					$t(link.label) }}
							</router-link>
						</li>
					</ul>
				</div>
			</div>

			<!-- Main logo -->
			<div class="whitespace-nowrap h-16 w-24 items-center -mt-8">
				<a href="/">
					<div>
						<img src="../../public/img/banner/logo.png"/>
					</div>
				</a>
			</div>
		</div>
	</div>























	<!--Medium screen-->
	<div class="relative w-full z-30 bg-cyan-900 lg:hidden">
		<div class="flex justify-between items-center max-h-18 mx-2">

			<!-- Menu icon-->
			<div @click="toggleMobileMenu()" class="cursor-pointer">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					stroke="white" class="w-10 h-10 mt-1.5">
					<path stroke-linecap="round" stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</div>

			<!-- Logo -->
			<div >
				<a href="/">
					<img src="../../public/img/banner/logo.png" class="h-20 w-24 items-center mb-0"/>
				</a>
			</div>
		</div>

		<div :class="{ 'hidden': !isMobileMenuOpen }"
			class="absolute top-12 w-1/3 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 rounded-b-md shadow-lg z-10">
			<router-link class="font-arabic block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
				:to="'/contact'"> {{ $t('contact') }} </router-link>
			<router-link class="font-arabic block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
				:to="'/alumni'"> {{
					$t('alumni') }} </router-link>
			<router-link class="font-arabic block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
				:to="'/fatwaheading'"> {{
					$t('fatwaheading') }} </router-link>
			<router-link class="font-arabic block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
				:to="'/research'"> {{
					$t('research') }} </router-link>
			<router-link class="font-arabic block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
				:to="'/departments'"> {{
					$t('departments') }} </router-link>
			<div @click="changeLanguage()" class="text-white px-10 py-2">
				<div class="flex justify-center bg-gray-500 rounded-xl py-1 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0"
						stroke="currentColor" class="w-5 h-5 ">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
					</svg>
					<span>{{ nextLanguage }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { changeLanguages } from '../stores/changeLanguage'

export default {
	name: "NavBar",
	name: "NavBar",
	//
	name: "NavBar",

	mounted() {
		// Add event listener to close mobile menu when clicking outside the menu
		document.body.addEventListener('click', this.closeMobileMenuOnClickOutside);
	},

	beforeDestroy() {
		// Remove event listener when component is destroyed
		document.body.removeEventListener('click', this.closeMobileMenuOnClickOutside);
	},
	//
	data() {
		return {
			languagesStore: changeLanguages(),
			isLanguageDropdownOpen: false,
			isMobileMenuOpen: false,
			navLinks: [
				{ to: "/contact", label: "contact" },
				{ to: "/fatwaheading", label: "fatwaheading" },
				{ to: "/research", label: "research" },
				{ to: "/departments", label: "departments" },
				{ to: "/", label: "home" },
			],
		}
	},


	beforeMount() {
	},
	computed: {

		language() {
			return this.languagesStore.currentLanguage;
		},

		nextLanguage() {
			return this.languagesStore.nextLanguage;
		},

	},

	methods: {

		toggleLanguageDropdown() {
			this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
		},

		toggleMobileMenu() {
			this.isMobileMenuOpen = !this.isMobileMenuOpen;
		},

		closeMobileMenuOnClickOutside(event) {
			// Check if the click is outside the mobile menu
			const mobileMenu = document.querySelector('.mobile-menu');
			if (mobileMenu && !mobileMenu.contains(event.target)) {
				this.isMobileMenuOpen = false;
			}
		},

		changeLanguage() {
			this.languagesStore.switchLanguage();
			let lang = this.language;
			console.log(lang)

			this.$i18n.locale = lang;
		},
	},
}
</script>

<style scoped>
.bottom-border-animation {
	position: relative;
	overflow: hidden;
}

.bottom-border-animation::after {
	content: "";
	position: absolute;
	bottom: 0px;
	left: 50%;
	width: 0;
	height: 2px;
	background-color: #E5B45B;
	transition: width 0.3s ease, left 0.3s ease;
}

.bottom-border-animation:hover::after {
	left: 0;
	width: 100%;
}

.nav-links {
	color: white;
	display: block;
	font-weight: bold;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	padding-bottom: 0.25rem;
	padding-top: 0.25rem;
}
</style>