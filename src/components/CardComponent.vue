<template>
	<div class="w-full flex justify-center absolute top-56">
		<div class="max-w-[16rem]  bg-white border border-gray-200 rounded-lg">
			<a href="#">
				<img class="rounded-t-lg" src="../../public/img/studio/pic3.jpg" alt="" />
			</a>
			<div class="p-4">
				<a href="#">
						<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800">المصباح اسلامک سٹوڈیو</h5>
				</a>
				<p class="mb-3 text-center font-normal text-gray-700">المصباح عربی زبان میں چراغ کو کہتے ہیں۔ چراغ اندھیرے کو مات دیتا ہے۔ چراغ کا لفظ پڑھتے ہی روشنی کا احساس پیدا ہو جاتا ہے۔</p>
				<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
					{{ $t("readMore") }}
					<svg class="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</template>

  <script>
  export default {
    name: 'CardComponent',

  }
  </script>
  