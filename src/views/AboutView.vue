<template>
	<div>
		<NavBar></NavBar>
		<div class="mt-14 grid grid-flow-col gap-4 container mx-auto">

			<!-- Left Column -->
			<div class="w-[85%] text-right border border-black h-[80vh] overflow-hidden" :class="{ 'font-nastaliq text-sm': language == 'اردو', 'font-arabic': language != 'اردو' }">
				<div class="p-4 border-b border-black bg-gray-200 text-center">
					{{ universityInfo.currentTeachers }}
				</div>
				<div class="mx-10 overflow-auto h-[calc(80vh-4rem)]">
					<div class="leading-8 ">
						<h2 class="font-black">{{ universityInfo.name }}</h2>
						<p> {{ universityInfo.description }} </p>
					</div>
					<div class="leading-8">
						<h2 class="font-black">{{ universityInfo.foundingDate }}</h2>
						<p> {{ universityInfo.foundingDateDetails }} </p>
					</div>
					<div class="leading-8">
						<h2 class="font-black">{{ universityInfo.location }}</h2>
						<p> {{ universityInfo.locationDetails }} </p>
					</div>
					<div class="leading-8">
						<h2 class="font-black">{{ universityInfo.facilities }}</h2>
						<ul>
							<li v-for="facility in universityInfo.facilitiesList" :key="facility">{{ facility }}</li>
						</ul>
					</div>

					<div class="leading-8">
						<h2 class="font-black">{{ universityInfo.founders }}</h2>
						<ul>
							<li v-for="founder in universityInfo.foundersList" :key="founder">{{ founder }}</li>
						</ul>
					</div>

					<div class="leading-8">
						<h2 class="font-black">{{ universityInfo.committee }}</h2>
						<p> {{ universityInfo.committeeDetails }} </p>
					</div>

					<div class="leading-8">
						<h2 class="font-black">{{ universityInfo.history }}</h2>
						<p> {{ universityInfo.historyDetails }} </p>
					</div>

					<div class="leading-8">
						<h2 class="font-black">{{ universityInfo.administrators }}</h2>
						<ul>
							<li v-for="administrator in universityInfo.administratorsList" :key="administrator">{{ administrator }}</li>
						</ul>
					</div>

					<div class="leading-8">
						<h2 class="font-black">{{ universityInfo.teachers }}</h2>
					</div>

					<div class="leading-8">
						<h2 class="font-black">{{ universityInfo.oldTeachers }}</h2>
						<ul>
							<li v-for="teacher in universityInfo.oldTeachersList" :key="teacher">{{ teacher }}</li>
						</ul>
					</div>

					<div class="leading-8">
						<h2 class="font-black">{{ universityInfo.currentTeachers }}</h2>
						<ul>
							<li v-for="teacher in universityInfo.currentTeachersList" :key="teacher">{{ teacher }}</li>
						</ul>
					</div>

					<div class="leading-8">
						<p>{{ universityInfo.end }}</p>
					</div>
				</div>
			</div>

			<div class="relative w-80 max-w-xs border h-[80vh] border-black overflow-hidden">
				<!-- Fixed Header -->
				<div class="p-4 border-b border-black bg-gray-200 text-center">
					{{ universityInfo.currentTeachers }}
				</div>

				<!-- Scrollable Content -->
				<div class="overflow-auto h-[calc(80vh-4rem)]">
					<!-- Repeat content using v-for -->
					<div class="p-4 grid grid-flow-row gap-4">
						<div class="p-2 bg-slate-200 cursor-pointer" v-for="index in 20" :key="index">
							{{ universityInfo.currentTeachers }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CardComponent from "@/components/CardComponent.vue";

import { changeLanguages } from '../stores/changeLanguage'

export default {
	name: "AboutView",
	components: {
		CardComponent,
		NavBar
	},

	mounted() {
		console.log()
	},

	data() {
		return {
			languagesStore: changeLanguages(),
		}
	},

	computed: {
		universityInfo() {
			return this.language == 'اردو' ? this.$i18n.messages.اردو.universityInfo : this.$i18n.messages.العربية.universityInfo
		},
		language() {
			return this.languagesStore.currentLanguage
		}
	}
}
</script>