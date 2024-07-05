<template>
	<div>
		<NavBar></NavBar>
		Departments
	</div>
  </template>
  
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/NavBar.vue";
import { changeLanguages } from '../stores/changeLanguage'

	export default {
		name: "DepartmentsView",
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
  