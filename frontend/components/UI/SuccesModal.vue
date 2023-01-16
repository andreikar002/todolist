<template>
  <div
    v-if="isShow"
    class="w-screen h-screen fixed background flex items-center justify-center top-0"
  >
    <div
      class="bg-white rounded-xl px-4 py-5 relative flex flex-col items-center justify-center w-72 h-48"
    >
      <button @click="closeModal" class="absolute top-0.5 right-0.5">
        <i class="icon-cancel-circled text-xl"></i>
      </button>
      <div class="text-green-500 flex flex-col items-center gap-5">
        <i class="icon-ok-circled2 text-5xl"></i>
        <p class="text-2xl font-semibold">Succes!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      if (this.isShow) this.$emit("close-modal");
    },
  },
  mounted() {
    window.document.addEventListener("click", (event) => {
      if (event.target.className.includes("background")) this.closeModal();
    });
  },
};
</script>

<style scoped>
.background {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
