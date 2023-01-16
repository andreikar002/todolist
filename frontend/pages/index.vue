<template>
  <div class="w-full flex flex-col items-center pt-2">
    <h1 class="text-2xl font-semibold">Notes<i class="icon-book"></i></h1>
    <div class="mt-5">
      <NuxtLink
        to="/note/create"
        class="bg-blue-500 text-white rounded-xl px-4 py-2"
      >
        Add note<i class="icon-plus-circled"></i>
      </NuxtLink>
      <div class="w-full flex flex-col items-center justify-start gap-4 mt-5">
        <MyNote
          v-for="note in notes"
          :key="note._id"
          :title="note.title"
          :content="note.content"
          :id="note._id"
          @remove-item="deleteNote"
        ></MyNote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const apiURL = useRuntimeConfig().public.apiURL;
    return { apiURL };
  },
  data() {
    return {
      notes: [],
    };
  },
  mounted() {
    this.getNotes();
  },
  methods: {
    getNotes() {
      $fetch(this.apiURL + "notes").then((data) => {
        this.notes = data;
      });
    },
    deleteNote(id) {
      $fetch(this.apiURL + `notes/${id}`, {
        method: "DELETE",
      }).then(() => {
        this.getNotes();
      });
    },
  },
};
</script>
