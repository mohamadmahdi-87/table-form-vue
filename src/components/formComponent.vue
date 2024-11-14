<template>
	<!-- فرم اضافه کردن کاربر -->
	<div class="">
		<form @submit.prevent="submitForm" class="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
			<label for="firstName" class="block text-gray-600 font-bold mb-2">نام</label>
			<input v-model="newUser.firstName" type="text" id="firstName" placeholder="نام خود را وارد کنید" class="w-full p-2 border border-gray-300 rounded-lg mb-4" />

			<label for="lastName" class="block text-gray-600 font-bold mb-2">نام خانوادگی</label>
			<input v-model="newUser.lastName" type="text" id="lastName" placeholder="نام خانوادگی خود را وارد کنید" class="w-full p-2 border border-gray-300 rounded-lg mb-4" />

			<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">تایید</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "formComponent",
	data() {
		return {
			newUser: {
				firstName: "",
				lastName: "",
			},
		};
	},
	methods: {
		submitForm() {
			// ارسال اطلاعات کاربر به کامپوننت والد
			this.$emit("add-person", {...this.newUser});
			// خالی کردن فیلدها
			this.newUser.firstName = "";
			this.newUser.lastName = "";
		},
	},
};
</script>
