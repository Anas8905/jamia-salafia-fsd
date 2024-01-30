<template>
	<div class="relative w-full flex justify-between md:justify-normal z-10 bg-stone-600 -500 max-h-14 mx-auto">


		<div @click="toggleMobileMenu" class="md:w-3/5 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8 h-8 m-2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		</div>

		<div v-if="isMobileMenuOpen" class="md:hidden absolute top-10 z-30">
			<div class="items-center w-46">
				<ul class="flex flex-col font-bold p-2 bg-transparent">
					<li v-for="(link, index) in navLinks" :key="index">
						<!-- Assuming 'link.to' is the route and 'link.label' is the translation key -->
						<router-link v-if="link.to" class="w-36 px-2 block py-2 bg-transparent border-b border-black"  :class="{ 'font-nastaliq py-3': language === 'اردو', 'font-arabic pt-3 pb-2': language !== 'اردو' }" :to="link.to"> {{ $t(link.label) }} </router-link>
						<a v-else href="#" class="w-36 px-2 block py-2 bg-transparent border-b border-black"  :class="{ 'font-nastaliq py-3': language === 'اردو', 'font-arabic pt-3 pb-2': language !== 'اردو'}"> {{ $t(link.label) }} </a>
					</li>
				</ul>
			</div>
		</div>


		<div class="md:w-1/5">
			<a href="/" class="flex items-center justify-center">
				<div class="h-10 w-10">
					<img src="../../public/img/logos/simple-white-logo.png" :style="{ transform: 'scale(1.0)' }"/>
				</div>
				<h2 class="self-center text-xl font-semibold whitespace-nowrap text-white">{{ $t("name") }}</h2>
			</a>
		</div>

		<div class="md:w-3/5 hidden md:block">
			<div class="items-center w-full">
				<ul class="flex justify-between font-bold p-0 bg-transparent mt-0 border-0">
					<li v-for="(link, index) in navLinks" :key="index">
						<!-- Assuming 'link.to' is the route and 'link.label' is the translation key -->
						<router-link v-if="link.to"  :class="{ 'font-nastaliq py-3': language === 'اردو', 'font-arabic pt-3 pb-2': language !== 'اردو' }" class=" text-white block font-bold px-3 md:hover:bg-transparent md:hover:text-white border-b-2 border-black/10 hover:border-white " :to="link.to"> {{ $t(link.label) }} </router-link>
						<a v-else href="#" :class="{ 'font-nastaliq py-3': language === 'اردو', 'font-arabic pt-3 pb-2': language !== 'اردو'}" class=" text-white block font-bold px-3 md:hover:bg-transparent md:hover:text-white border-b-2 border-black/10 hover:border-white "> {{ $t(link.label) }} </a>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="md:w-1/5">
			<button type="button"  @click="changeLanguage()" class="absolute top-2 right-2 text-sm flex items-center text-white cursor-pointer border-b hover:border-white">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="w-5 h-5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
				</svg>
				<span >{{nextLanguage}}</span>
			</button>
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
	//
  data() {
    return {
      languagesStore: changeLanguages(),
      isLanguageDropdownOpen: false,
      isMobileMenuOpen: false,
      navLinks: [
			{ to: null, label: "contact" },
			{ to: null, label: "alumni" },
			{ to: null, label: "fatwaheading" },
			{ to: null, label: "research" },
			{ to: null, label: "departments" },
			{ to: "/about", label: "about" },
			{ to: "/", label: "home" }
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

   changeLanguage() {
		this.languagesStore.switchLanguage();
		let lang = this.language;
		console.log(lang)

		this.$i18n.locale = lang;
	},
  },
}
</script>
