<template>
	<div class="min-h-screen bg-gradient-to-b from-cyan-800 to-blue-500 transition-colors duration-500">
	  <NavBar />
	  <div class="max-w-7xl mx-auto pt-12">
		<h1 class="text-4xl font-bold text-center mb-6 text-white transition-colors duration-500">{{ surah.name }}</h1>
		<div class="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-400 transition-colors duration-500">
		  <div v-for="(ayah, index) in surah.ayahs" :key="ayah.number" class="ayah font-arabic py-2 border-b border-light-gray transition-colors duration-500">
			<Ayah :ayah="ayah" />
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import { changeLanguages } from '../stores/changeLanguage';
  import surahData from '../lang_files/quran.json';
  import Ayah from '../components/Ayah.vue';
  
  export default {
	name: "ResearchView",
	components: {
	  NavBar,
	  Ayah
	},
	data() {
	  return {
		languagesStore: changeLanguages(),
		surah: surahData.surahs[0]
	  };
	}
  };
  </script>
  
  <style scoped>
  body {
	font-family: 'Inter', sans-serif;
  }
  
  .ayah {
	transition: all 0.3s ease-in-out;
	max-width: 100%;
  }
  
  .ayah:hover {
	background-color: #e3f2fd; /* Lighter blue background on hover */
	cursor: pointer;
	transform: translateY(-3px);
  }
  
  .bg-white {
	transition: all 0.5s ease-in-out;
  }
  
  .border-light-gray {
	border-color: #d1d5db;
  }
  
  .border-blue-400 {
	border-color: #60a5fa;
  }
  
  .shadow-lg {
	box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
  </style>
  