<template>
	<div class="mt-10 flex flex-col gap-15">
		<div class="w-full relative">
			<button
				@click="showForm = !showForm"
				class="bg-blue-500 hover:bg-blue-700 mx-auto w-fit absolute left-0 right-0 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
				اضافه کردن نفر
			</button>
		</div>
		<formComponent v-if="showForm" @add-person="addPerson"></formComponent>

		<table v-if="users.length > 0" class="table-auto w-full border-collapse border text-center border-gray-300">
			<thead>
				<tr>
					<th class="px-4 py-2 text-gray-600 font-bold">نام</th>
					<th class="px-4 py-2 text-gray-600 font-bold">نام خانوادگی</th>
					<th class="px-4 py-2 text-gray-600 font-bold">اکشن</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user, index) in users" :key="index" class="border-b border-gray-300">
					<td id="userFirstName" class="px-4 py-2">
						<!-- ورودی برای ویرایش -->
						<span v-if="!user.isEditing">{{ user.firstName }}</span>
						<input v-else v-model="user.firstName" class="px-2 py-1 border border-gray-300 rounded-md" />
					</td>
					<td id="userLastName" class="px-4 py-2">
						<!-- ورودی برای ویرایش -->
						<span v-if="!user.isEditing">{{ user.lastName }}</span>
						<input v-else v-model="user.lastName" class="px-2 py-1 border border-gray-300 rounded-md" />
					</td>
					<td class="px-4 py-2 cursor-pointer flex gap-3 justify-center">
						<!-- دکمه حذف -->
						<span class="text-red-500 hover:text-red-600" @click="removeUser(index)">حذف</span>
						<!-- دکمه ویرایش / تایید -->
						<span v-if="!user.isEditing" class="text-blue-400 hover:text-blue-600" @click="editUser(index)">ویرایش</span>
						<span v-else class="text-green-500 hover:text-green-600" @click="confirmEdit(index)">تایید</span>
					</td>
				</tr>
			</tbody>
		</table>
		<div v-else class="w-full flex justify-center text-3xl text-neutral-400">لیست شما خالیه</div>
	</div>
</template>

<script>
import formComponent from "./components/formComponent.vue";

export default {
	data() {
		return {
			users: [],
			showForm: false,
		};
	},
	methods: {
		addPerson(newUser) {
			this.users.push(newUser);
			this.showForm = false;
		},
		removeUser(index) {
			this.users.splice(index, 1);
		},
		editUser(index) {
			// فعال کردن حالت ویرایش
			this.users[index].isEditing = true;
		},
		confirmEdit(index) {
			// تایید و غیرفعال کردن حالت ویرایش
			this.users[index].isEditing = false;
		},
	},
	components: {formComponent},
};
</script>
