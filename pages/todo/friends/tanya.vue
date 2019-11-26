<template>
  <div class="relative flex-1 flex items-center min-h-screen h-screen">
    <div class="flex-1 text-center">
      <img
        class="inline rounded-lg w-56 h-56"
        src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
      />
      <h1 class="text-5xl py-10">Tanya Zahra</h1>
      <span class="block py-2 text-gray-700"
        >Need me to complete a task or review an output of your works?</span
      >
      <span class="block py-2 text-gray-700"
        >Add it to my list on GipsyBot!</span
      >
      <button
        class="bg-purple-600 text-white font-bold py-6 px-16 mt-16 rounded-full"
      >
        Request a Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'task'
}
</script>
