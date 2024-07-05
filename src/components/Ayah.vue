<template>
	<div class="relative inline-block w-full text-right" @click="clearActiveIndices">
		<div class="flex flex-row-reverse items-start flex-wrap" @click.stop>
			<span
				v-for="(word, index) in ayah.words"
				:key="word.arabic"
				:class="['word-wrapper', 'group', 'inline-block', 'relative', 'cursor-pointer', 'mx-2', { 'active': activeIndices.includes(index) }]"
				@mouseover="showTooltip(index)"
				@mouseleave="hideTooltip(index)"
			>
				<span class="arabic">{{ word.arabic }}</span>
				<span class="block mt-1 text-sm translation">{{ word.urdu }}</span>
				<span class="tooltip" :class="{ 'show': activeIndices.includes(index) }">
					{{ word.urdu }}
					<span class="arrow"></span>
				</span>
			</span>
			<span class="text-gray-500 text-3lg" v-if="ayah.words.length > 0">۞</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		ayah: Object
	},

	data() {
		return {
			activeIndices: []
		};
	},

	methods: {
		showTooltip(index) {
			if (!this.activeIndices.includes(index)) {
				this.activeIndices.push(index);
			}
		},
		hideTooltip(index) {
			const activeIndex = this.activeIndices.indexOf(index);
			if (activeIndex !== -1) {
				this.activeIndices.splice(activeIndex, 1);
			}
		},
		clearActiveIndices() {
			this.activeIndices = [];
		}
	}
};
</script>

<style>
.tooltip {
	position: absolute;
	left: 50%;
	bottom: 4rem;
	transform: translateX(-50%);
	margin-bottom: 10px;
	background: #ffffff;
	color: #000000;
	font-size: 18px;
	border-radius: 8px;
	padding: 12px;
	z-index: 30;
	width: 200px;
	box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	text-align: center;
	pointer-events: none;
	border: 2px solid #03a9f4;
}

.word-wrapper {
	position: relative;
	display: inline-block;
	cursor: pointer;
	margin: 15px 8px;
	text-align: center;
	transition: color 0.3s ease;
}

.word-wrapper.active .arabic {
	color: #03a9f4;
}

.word-wrapper.active .translation {
	color: #0288d1;
}

.arabic {
	display: block;
	font-size: 40px;
	font-weight: 500;
	color: #333;
}

.tooltip.show {
	opacity: 1;
	pointer-events: auto;
}

.arrow {
	position: absolute;
	width: 10px;
	height: 10px;
	background: #ffffff;
	transform: rotate(45deg);
	bottom: -4px;
	left: 50%;
	transform: translateX(-50%) rotate(45deg);
	border-bottom: 2px solid #03a9f4;
	border-right: 2px solid #03a9f4;
}
</style>
