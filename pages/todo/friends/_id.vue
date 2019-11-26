<template>
  <div
    class="relative flex-1 flex flex-col bg-gray-100 min-h-screen h-screen overflow-y-auto"
  >
    <div
      id="contents"
      class="fixed px-32 h-20 flex-1 flex items-center justify-between"
    >
      <div class="relative flex items-end">
        <div
          class="flex-1 flex h-12 w-48 text-center items-center rounded-full bg-gray-200"
        >
          <svg
            class="w-4 h-4 ml-5 mr-2 text-gray-300 hover:text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
            ></path>
          </svg>
          <span class="font-bold text-gray-500">Show the archive</span>
        </div>
        <div
          class="absolute w-6 h-6 top-0 right-0 rounded-full border-4 border-white bg-red-600"
          style="margin-top: -2px; margin-right: 10px;"
        ></div>
      </div>
      <div class="flex-1 flex">
        <div class="flex-1"></div>
        <div class="">
          <svg
            class="w-6 h-6 ml-8 text-gray-300 hover:text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </div>
        <div class="">
          <svg
            class="w-6 h-6 ml-8 text-gray-300 hover:text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
            ></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
        </div>
        <div class="">
          <svg
            class="w-6 h-6 ml-8 text-gray-300 hover:text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>
    </div>
    <div class="flex-1 mt-32 mx-32">
      <div class="flex pb-10 items-center">
        <div class="w-24 mr-6">
          <img
            src="https://avatars2.githubusercontent.com/u/145777?s=400&u=2a1095688741c9edd8b8d96c882b5a42a1fbfff3&v=4"
            alt="lovely avatar"
            class="object-cover object-center w-full h-full rounded-3xl visible group-hover:hidden"
          />
        </div>
        <div class="flex-1">
          <span class="block text-5xl">{{ id }}</span>
          <span class="block text-sm text-gray-700"
            >24 todo / 56 archived / 85% productivity</span
          >
        </div>
        <div class="w-54">
          <button
            class="bg-purple-600 text-white font-bold py-3 px-8 rounded-full"
          >
            <span class="inline pr-5">send message</span>
            <svg
              class="inline w-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <h1 class="text-6xl">Today</h1>
      <ul class="text-xl text-gray-900 leading-loose">
        <li class="flex py-2 select-none">
          <label class="flex-1 flex">
            <div class="checkbox-wrap shadow mr-4">
              <input type="checkbox" class="hidden" checked />
              <svg
                class="hidden w-4 h-4 text-white pointer-events-none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span class="font-bold">
              Catchup with engineering team lead 👏🏻</span
            >
          </label>
          <div class="w-56 text-xl text-right text-gray-500">
            Done at 08:00 AM
          </div>
          <div class="w-24 ml-5 text-right text-xl text-gray-500">30min</div>
        </li>
        <li class="flex py-2">
          <label class="flex-1 flex">
            <div class="checkbox-wrap un shadow mr-4">
              <input type="checkbox" class="hidden" />
              <svg
                class="hidden w-4 h-4 text-white pointer-events-none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span>Talk to HR manager and sales team</span>
          </label>
          <div class="w-56 text-xl text-right text-gray-500">
            Done at 08:00 AM
          </div>
          <div class="w-24 ml-5 text-right text-xl text-gray-500">
            6h 30min
          </div>
        </li>
        <li class="flex py-2">
          <label class="flex-1 flex">
            <div class="checkbox-wrap shadow mr-4">
              <input type="checkbox" class="hidden" checked />
              <svg
                class="hidden w-4 h-4 text-white pointer-events-none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span>Review midas list</span>
          </label>
          <div class="w-56 text-xl text-right text-gray-500">
            Removed at 08:00 AM
          </div>
          <div class="w-24 ml-5 text-right text-xl text-gray-500">
            6h 30min
          </div>
        </li>
        <li class="flex py-2">
          <label class="flex-1 flex">
            <div class="checkbox-wrap shadow mr-4">
              <input type="checkbox" class="hidden" checked />
              <svg
                class="hidden w-4 h-4 text-white pointer-events-none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span>Review Jura points in metrics</span>
          </label>
          <div class="w-56 text-xl text-right text-gray-500">
            ETA 08:00 AM
          </div>
          <div class="w-24 ml-5 text-right text-xl text-gray-500">
            6h 30min
          </div>
        </li>
      </ul>
      <div class="mt-10">
        <h1 class="text-6xl">
          Tomorrow
          <small class="text-3xl text-gray-500">- 13th November</small>
        </h1>
        <ul class="text-2xl text-gray-900 leading-loose">
          <li class="flex py-2">
            <label class="flex-1 flex">
              <div class="checkbox-wrap shadow mr-4">
                <input type="checkbox" class="hidden" checked />
                <svg
                  class="hidden w-4 h-4 text-white pointer-events-none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Review Jura points in metrics</span>
            </label>
            <div class="w-56 text-xl text-right text-gray-500">
              ETA 08:00 AM
            </div>
            <div class="w-24 ml-5 text-right text-xl text-gray-500">
              6h 30min
            </div>
          </li>
        </ul>
      </div>
      <div class="mt-10">
        <h1 class="text-6xl">Someday</h1>
        <ul class="text-2xl text-gray-900 leading-loose">
          <li class="flex py-2">
            <label class="flex-1 flex">
              <div class="checkbox-wrap shadow mr-4">
                <input type="checkbox" class="hidden" checked />
                <svg
                  class="hidden w-4 h-4 text-white pointer-events-none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Finish copy for landing page</span>
            </label>
            <div class="w-56 text-xl text-right text-gray-500">
              ETA 08:00 AM
            </div>
            <div class="w-24 ml-5 text-right text-xl text-gray-500">
              6h 30min
            </div>
          </li>
          <li class="flex py-2">
            <label class="flex-1 flex">
              <div class="checkbox-wrap shadow mr-4">
                <input type="checkbox" class="hidden" checked />
                <svg
                  class="hidden w-4 h-4 text-white pointer-events-none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Travel to bangkok</span>
            </label>
            <div class="w-56 text-xl text-right text-gray-500">
              ETA 08:00 AM
            </div>
            <div class="w-24 ml-5 text-right text-xl text-gray-500">
              6h 30min
            </div>
          </li>
          <li class="flex py-2">
            <label class="flex-1 flex">
              <div class="checkbox-wrap shadow mr-4">
                <input type="checkbox" class="hidden" checked />
                <svg
                  class="hidden w-4 h-4 text-white pointer-events-none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Review all new GB designs on inVison</span>
            </label>
            <div class="w-56 text-xl text-right text-gray-500">
              ETA 08:00 AM
            </div>
            <div class="w-24 ml-5 text-right text-xl text-gray-500">
              6h 30min
            </div>
          </li>
          <li class="flex py-2">
            <label class="flex-1 flex">
              <div class="checkbox-wrap shadow mr-4">
                <input type="checkbox" class="hidden" checked />
                <svg
                  class="hidden w-4 h-4 text-white pointer-events-none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Write weekly Slack update</span>
            </label>
            <div class="w-56 text-xl text-right text-gray-500">
              ETA 08:00 AM
            </div>
            <div class="w-24 ml-5 text-right text-xl text-gray-500">
              6h 30min
            </div>
          </li>
          <li class="flex py-2">
            <label class="flex-1 flex">
              <div class="checkbox-wrap shadow mr-4">
                <input type="checkbox" class="hidden" checked />
                <svg
                  class="hidden w-4 h-4 text-white pointer-events-none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Review Jura points in metrics</span>
            </label>
            <div class="w-56 text-xl text-right text-gray-500">
              ETA 08:00 AM
            </div>
            <div class="w-24 ml-5 text-right text-xl text-gray-500">
              6h 30min
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'task',
  asyncData({ params }) {
    return { ...params }
  }
}
</script>

<style lang="sass" scoped>
.checkbox-wrap
  background-color: hsla(161, 64%, 57%, 1)
  padding: 4px 0 0 4px
  width: 1.6rem
  height: 1.6rem
  margin-top: 0.5rem
  border-radius: 0.65rem

  input:checked + svg
    display: block !important

.checkbox-wrap.un
  background-color: hsla(0, 0%, 100%, 1)
  @apply border-2 border-gray-200 shadow-none

#contents
  width: calc(100vw - 14rem)
  background-image: linear-gradient(to top, hsla(220, 43%, 97%, 0), hsla(220, 43%, 97%, 1))
</style>
