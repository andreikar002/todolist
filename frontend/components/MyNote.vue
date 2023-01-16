<template>
  <div class="border border-black rounded-lg w-[1000px]">
    <div class="w-full relative px-4 py-2 flex flex-row justify-center">
      <p class="text-lg text-gray-800 font-bold">{{ title }}</p>
      <div class="flex flex-col absolute right-1 top-[1px] text-xl">
        <NuxtLink :to="'/note/correct/' + id"
          ><i class="icon-pencil text-gray-500"></i
        ></NuxtLink>
        <button @click="$emit('remove-item', id)">
          <i class="icon-trash-empty text-red-600"></i>
        </button>
      </div>
    </div>
    <div class="px-6 pb-2">
      <p class="text-base">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "No title",
    },
    content: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    async removeNote() {
      await $fetch(`http://localhost:8000/notes/${this.id}`, {
        method: "DELETE",
      });
    },
  },
};
</script>
