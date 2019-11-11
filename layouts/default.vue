<template>
  <div id="main" class="flex">
    <div id="menu" class="w-1/5 border-r border-gray-200">
      <div
        class="flex items-center justify-between border-b border-gray-200 px-8 py-5"
      >
        <div class="flex items-center">
          <svg
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="flex-none w-5 h-5 mr-3 text-gray-500 hover:text-blue-500"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            ></path>
          </svg>
        </div>
        <div class="flex items-center">
          <svg
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="flex-none w-5 h-5 mr-3 text-gray-300 hover:text-gray-500"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="flex px-8 py-10">
        <button
          class="flex-1 text-center bg-blue-500 hover:bg-blue-700 text-white rounded-sm py-3 px-4 inline-flex items-center"
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>new message</span>
        </button>
      </div>
      <div class="px-8">
        <ul>
          <li class="py-4">
            <a href="#" class="flex items-center">
              <svg
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="flex-none w-5 h-5 mr-3 text-blue-500 hover:text-blue-200"
              >
                <path
                  d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                ></path>
              </svg>
              <span>Inbox</span>
            </a>
          </li>
          <li class="py-4">
            <a href="#" class="flex items-center">
              <svg
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="flex-none w-5 h-5 mr-3 text-gray-300 hover:text-gray-500"
              >
                <path
                  d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                ></path>
              </svg>
              <span>Marked</span>
            </a>
          </li>
          <li class="py-4">
            <a href="#" class="flex items-center">
              <svg
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="flex-none w-5 h-5 mr-3 text-gray-300 hover:text-gray-500"
              >
                <path
                  d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                ></path>
              </svg>
              <span>Draft</span>
            </a>
          </li>
          <li class="py-4">
            <a href="#" class="flex items-center">
              <svg
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="flex-none w-5 h-5 mr-3 text-gray-300 hover:text-gray-500"
              >
                <path
                  d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                ></path>
              </svg>
              <span>Deleted</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="list" class="w-1/5 border-r border-gray-200 bg-gray-100 p-5">
      list
    </div>
    <div id="content" class="w-3/5">
      <nuxt />
    </div>
  </div>
</template>

<style lang="sass">
html, body
  height: 100%
  font-family: 'Noto Sans KR', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  @apply text-sm
#__nuxt, #__layout, #main
  height: 100%
#menu
  // box-shadow: 5px 0px 3px -4px gray
  height: 100%
</style>
