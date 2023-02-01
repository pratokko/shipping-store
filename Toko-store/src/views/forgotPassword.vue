<template>
  <div class="min-h-screen bg-white">
    <div
      class="min-h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4"
    >
      <div class="flex flex-col items-center justify-center">
    <h2 class="text-lg font-medium mb-4">Forgot Password</h2>
    <form>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-medium text-gray-700" for="email">
          Email
        </label>
        <input
          class="w-full border border-gray-400 p-2 rounded-lg"
          type="email"
          id="email"
          v-model="email"
        />
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
        type="submit"
      >
        Reset password
      </button>
    </form>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
};
</script>
