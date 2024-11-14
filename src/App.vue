<template>
	<div>
		<!-- ۱. دکمه‌ای برای نمایش یا پنهان کردن فرم اضافه کردن کاربر بنویس. این دکمه باید مقدار متغیر showForm را معکوس کند. -->
		<button @click="showForm = !showForm">اضافه کردن نفر</button>

		<!-- ۲. فرم اضافه کردن کاربر: -->
		<form action="#" v-if="showForm" @submit.prevent="addPerson">
			<label for="firstName">نام</label>
			<input v-model="newUser.firstName" type="text" id="firstName" placeholder=" نام خود را وارد کنید " />
			<label for="lastName">نام خانوادگی</label>
			<input v-model="newUser.lastName" type="text" id="lastName" placeholder=" نام خانوادگی خود را وارد کنید " />
			<button type="submit">تایید</button>
		</form>
		<!-- - از v-if استفاده کن تا فرم فقط زمانی نمایش داده شود که showForm برابر true باشد. -->
		<!-- - با استفاده از @submit.prevent از رفرش شدن صفحه جلوگیری کن. -->
		<!-- - درون فرم، دو فیلد ورودی ایجاد کن: -->
		<!-- - فیلد اول برای نام (firstName) با استفاده از v-model به newUser.firstName متصل شود. -->
		<!-- - فیلد دوم برای نام خانوادگی (lastName) با v-model به newUser.lastName متصل شود. -->
		<!-- - یک دکمه تایید هم برای ارسال فرم اضافه کن. -->
		<table>
			<thead>
				<tr>
					<th>نام</th>
					<th>نام خانوادگی</th>
					<th>اکشن</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="index in users" :key="index">
					<td>{{ newUser.firstName }}</td>
					<td>{{ newUser.lastName }}</td>
					<td @click="removeUser(index)">حذف</td>
				</tr>
			</tbody>
		</table>
		<!-- ۳. جدول نمایش کاربران:
			- یک جدول ایجاد کن که شامل سه ستون باشد: "نام"، "نام خانوادگی"، و "اکشن".
			- درون tbody از v-for استفاده کن تا لیست کاربران (users) را نمایش دهد.
			- هر سطر جدول باید دو ستون با داده‌های firstName و lastName از هر کاربر را نمایش دهد.
			- ستون سوم باید شامل گزینه‌ای برای حذف کاربر باشد. با کلیک روی این گزینه، تابع removeUser با index مربوطه فراخوانی شود. -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			newUser: {
				firstName: "",
				lastName: "",
			},
			showForm: false,
			// ۴. متغیر users به عنوان لیست کاربران تعریف کن و مقدار اولیه آن را آرایه خالی قرار بده.
			// ۵. متغیر newUser را به عنوان آبجکتی با دو ویژگی firstName و lastName تعریف کن و مقدار اولیه هر کدام را رشته خالی بگذار.
			// ۶. متغیر showForm را به عنوان یک بولین برای کنترل نمایش یا عدم نمایش فرم تعریف کن و مقدار اولیه‌اش را false بگذار.
		};
	},
	methods: {
		addPerson() {
			this.users.push({...this.newUser});
			this.newUser.firstName;
			this.newUser.lastName;
			this.showForm = false;
		},

		removeUser(index) {
			this.users.splice(index, 1);
		},
		// ۷. تابع addUser را برای اضافه کردن کاربر جدید به لیست بنویس:
		//    - این تابع باید newUser را به لیست users اضافه کند.
		//    - سپس مقدارهای firstName و lastName را خالی کند.
		//    - مقدار showForm را به false تغییر دهد تا فرم بسته شود.
		// ۸. تابع removeUser را بنویس:
		//    - این تابع یک index به عنوان پارامتر دریافت می‌کند.
		//    - با استفاده از splice کاربر مربوطه را از لیست users حذف کن.
	},
};
</script>
