<template>
  <div class="w-full pt-2 flex flex-col items-center">
    <h1 class="text-2xl font-semibold">Correct note</h1>
    <div class="w-[500px] mt-24">
      <NuxtLink to="/" class="bg-blue-500 text-white rounded-xl px-4 py-2"
        >Back</NuxtLink
      >
    </div>
    <div
      class="w-[500px] border rounded-xl px-4 h-[210px] pt-4 flex flex-col gap-5 mt-5 items-center"
    >
      <input
        placeholder="Title"
        class="border rounded-xl px-2 py-1 w-full"
        v-model="form.title"
      />
      <textarea
        placeholder="Content"
        class="border rounded-xl px-2 py-1 w-full"
        v-model="form.content"
      ></textarea>
      <div>
        <button
          @click="correctNote"
          class="bg-gray-700 rounded-full text-white w-[120px] h-[40px] hover:bg-gray-800 active:bg-gray-900 duration-300 hover:text-lg hover:w-[130px] hover:h-[45px]"
        >
          Send<i class="icon-pencil text-base"></i>
        </button>
      </div>
    </div>
    <UISuccesModal
      :isShow="isShowSucces"
      @close-modal="closeSucces"
    ></UISuccesModal>
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
      form: {
        title: "",
        content: "",
      },
      isShowSucces: false,
    };
  },
  mounted() {
    // console.log(this.apiURL, "api");
    $fetch(this.apiURL + `notes/${this.$route.params.id}`).then((data) => {
      this.form.title = data.title;
      this.form.content = data.content;
    });
  },
  methods: {
    correctNote() {
      $fetch(this.apiURL + `notes/${this.$route.params.id}`, {
        method: "PUT",
        body: formToNormal(this.form),
      }).then((data) => {
        this.openSucces();
      });
    },
    openSucces() {
      this.isShowSucces = true;
    },
    closeSucces() {
      this.isShowSucces = false;
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
.background {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
