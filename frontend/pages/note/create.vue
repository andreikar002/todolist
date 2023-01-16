<template>
  <div class="w-full pt-2 flex flex-col items-center">
    <h1 class="text-2xl font-semibold">Create note</h1>
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
          @click="postNote"
          class="bg-gray-700 rounded-full text-white w-[120px] h-[40px] hover:bg-gray-800 active:bg-gray-900 duration-300 hover:text-lg hover:w-[130px] hover:h-[45px]"
        >
          Send<i class="icon-plus text-base"></i>
        </button>
      </div>
    </div>
    <UISuccesModal
      :isShow="isShowSucces"
      @close-modal="closeSucces"
    ></UISuccesModal>
    <UIErrorModal
      :message="errorMessage"
      :isShow="isShowError"
      @close-modal="closeError"
    ></UIErrorModal>
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
      isShowError: false,
      errorMessage: "",
    };
  },
  methods: {
    postNote() {
      $fetch(this.apiURL + "notes", {
        method: "POST",
        body: formToNormal(this.form),
      })
        .then((data) => {
          this.openSucces();
        })
        .catch((error) => {
          this.openError(error?.data?.errors[0]?.msg || "Error!");
        });
    },
    openSucces() {
      this.isShowSucces = true;
    },
    closeSucces() {
      this.isShowSucces = false;
      this.$router.push({ path: "/" });
    },
    openError(message) {
      this.isShowError = true;
      this.errorMessage = message;
    },
    closeError() {
      this.isShowError = false;
    },
  },
};
</script>
