<template>
	<div>
		<div class="container mx-auto text-right">
		<div :class="{ 'font-nastaliq text-sm': language == 'اردو', 'font-arabic': language != 'اردو' }">
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
	</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CardComponent from "@/components/CardComponent.vue";
import { changeLanguages } from '../stores/changeLanguage'

export default {
	name: "IntroductionJamia",
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