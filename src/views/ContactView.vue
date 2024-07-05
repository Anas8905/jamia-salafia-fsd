<template>
	<div>
		<NavBar></NavBar>
		Contact
	</div>
  </template>
  
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/NavBar.vue";
import { changeLanguages } from '../stores/changeLanguage'

	export default {
		name: "ContactView",
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
  