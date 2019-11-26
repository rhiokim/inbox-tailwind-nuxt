<template>
  <div
    class="relative flex-1 bg-gray-100 min-h-screen h-screen overflow-y-auto"
  >
    <div class="flex-1 mt-32 mx-32">
      <div class="text-2xl font-bold">
        <span class="block text-sm text-gray-400">Nice to see you. Rhio</span>
        <span class="block"
          >You have
          <nuxt-link to="/todo/my" class="underline">1 task</nuxt-link> for
          today 🔥</span
        >
        <div>
          <span class="block">오늘도 한걸음 나아가 볼까? 응원할께!</span>
          <span class="block"
            >천천히 걷자! 퇴근 시간이야. 오늘 충분히 잘했어</span
          >
          <button
            class="block px-5 py-1 mt-2 text-white text-sm bg-purple-600 rounded-lg"
          >
            Add new task
          </button>
        </div>
      </div>
      <div class="my-10">
        * 매주 혹은 매일의 성취율을 한눈에 볼 수 있는 그래프 * adv (할일의
        카테고리, 미팅, 번역, 회사업무, 개인업무)
      </div>
      <div class="my-10">
        <span class="block text-sm text-gray-400"
          >Your friends are encourage you.</span
        >
        <span class="text-2xl font-bold"
          >You've got <a href="#" class="underline">5 cheers</a> and
          <a href="#" class="underline">3 favorites</a> from friends</span
        >
        <ul class="ml-5 my-1 text-lg">
          <li class="py-3">
            <span>Catchup with enginnering team lead</span>
            <ul class="flex">
              <li class="mx-1">
                <div
                  class="relative w-6 h-6 p-0 text-2xl rounded-full bg-indigo-300"
                >
                  <span class="emotion">❤️</span>
                </div>
              </li>
              <li class="mx-1">
                <div class="relative w-6 h-6 rounded-full bg-teal-300">
                  <span class="emotion">❤️</span>
                </div>
              </li>
              <li class="mx-1">
                <div class="relative w-6 h-6 rounded-full bg-orange-300">
                  <span class="emotion">❤️</span>
                </div>
              </li>
              <li class="mx-1">
                <div class="relative w-6 h-6 rounded-full bg-blue-300">
                  <span class="emotion">💪🏻</span>
                </div>
              </li>
              <li class="mx-1">
                <div class="relative w-6 h-6 rounded-full bg-green-300">
                  <span class="emotion">❤️</span>
                </div>
              </li>
            </ul>
          </li>
          <li class="py-3">
            <span>Translation https://react.reconciler</span>
            <ul class="flex">
              <li class="mx-1">
                <div class="relative w-6 h-6 rounded-full bg-indigo-300">
                  <span class="emotion">❤️</span>
                </div>
              </li>
              <li class="mx-1">
                <div class="relative w-6 h-6 rounded-full bg-teal-300">
                  <span class="emotion">❤️</span>
                </div>
              </li>
              <li class="mx-1">
                <div class="relative w-6 h-6 rounded-full bg-blue-300">
                  <span class="emotion">👀</span>
                </div>
              </li>
              <li class="mx-1">
                <div class="relative w-6 h-6 rounded-full bg-green-300">
                  <span class="emotion">❤️</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="my-10">
        <h2 class="text-2xl font-bold">Friends are</h2>
        <ul class="text-lg">
          <li class="p-3 text-gray-800">
            <svg
              class="inline rounded-lg bg-gray-200 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
            <span>Rhio: Finished for today</span>
          </li>
          <li class="p-3 text-gray-800">
            <svg
              class="inline rounded-lg bg-gray-200 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
            <span>Mayke: Remained 3 tasks / 65% productivity</span>
          </li>
          <li class="p-3 text-gray-800">
            <svg
              class="inline rounded-lg bg-gray-200 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
            <span>Torsten: Finished for today</span>
          </li>
          <li class="p-3 text-gray-800">
            <svg
              class="inline rounded-lg bg-gray-200 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
            <span>Wilhelm: Remained 8 tasks / 25% productivity</span>
          </li>
          <li class="p-3 text-gray-800">
            <svg
              class="inline rounded-lg bg-gray-200 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
            <span>Longo: Remained 1 tasks / 95% productivity</span>
          </li>
          <li class="p-3 text-gray-800">
            <svg
              class="inline rounded-lg bg-gray-200 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
            <span>Riak: Finished for today</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'task'
}
</script>

<style lang="sass" scoped>
.emotion
  @apply absolute bottom-0 right-0 text-xs
  margin-bottom: -5px
  margin-right: -5px
</style>
