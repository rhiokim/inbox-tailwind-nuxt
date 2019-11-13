<template>
  <div id="main" class="flex">
    <div id="menu" class="w-64 border-r border-gray-200">
      <div
        class="flex items-center justify-between border-b border-gray-100 px-8 py-5"
      >
        <div class="flex items-center">
          <svg
            class="flex-none w-4 h-4 font-bold text-blue-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        </div>
        <div class="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            class="flex-none w-4 h-4 text-gray-300 hover:text-gray-500"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </div>
      </div>
      <div class="flex px-8 py-10">
        <button
          class="flex-1 text-center bg-blue-500 hover:bg-blue-700 text-white rounded-sm py-3 px-4 inline-flex items-end"
        >
          <svg
            class="flex-none w-4 h-4 mr-3 text-gray-300 hover:text-blue-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
            <path
              d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
            ></path>
          </svg>
          <span>new message</span>
        </button>
      </div>
      <div class="px-8">
        <ul>
          <li class="py-4">
            <a href="#" class="flex items-center hover:text-blue-500">
              <svg
                class="flex-none w-4 h-4 mr-3 text-gray-300 hover:text-blue-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                <path
                  d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                ></path>
              </svg>
              <span>Inbox</span>
            </a>
          </li>
          <li class="py-4">
            <a href="#" class="flex items-center hover:text-blue-500">
              <svg
                class="flex-none w-4 h-4 mr-3 text-gray-300 hover:text-blue-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                ></polygon>
              </svg>
              <span>Marked</span>
            </a>
          </li>
          <li class="py-4">
            <a href="#" class="flex items-center hover:text-blue-500">
              <svg
                class="flex-none w-4 h-4 mr-3 text-gray-300 hover:text-blue-200"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                ></path>
              </svg>
              <span>Draft</span>
            </a>
          </li>
          <li class="py-4">
            <a href="#" class="flex items-center hover:text-blue-500">
              <svg
                class="flex-none w-4 h-4 mr-3 text-gray-300 hover:text-blue-200"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path
                  d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                ></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
              <span>Deleted</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex-1 flex">
      <div id="list" class="w-100 bg-gray-100 overflow-y-hidden">
        <div
          class="flex items-center justify-between border-b border-r border-gray-200 px-8 py-5"
        >
          <div class="flex items-center"></div>
          <div class="flex items-center">
            <svg
              class="flex-none w-4 h-4 mr-5 text-gray-500 hover:text-blue-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path
                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
              ></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            <svg
              class="flex-none w-4 h-4 mr-5 text-gray-500 hover:text-blue-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <svg
              class="flex-none w-4 h-4 text-gray-500 hover:text-blue-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex justify-between p-2 border-r border-gray-200">
          <div class="flex">Newest</div>
        </div>
        <div class="overflow-y-auto">
          <ul>
            <li class="flex h-20 p-5 border-b border-r border-gray-200 active">
              <div class="w-10 flex flex-none flex-col justify-between">
                <div class="flex-1">29</div>
                <div class="flex-1">
                  <svg
                    class="flex-none w-4 h-4 text-gray-500 hover:text-blue-500"
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
                </div>
              </div>
              <div class="flex-1 flex justify-between">
                <div class="flex-1 flex flex-col w-16">
                  <span class="flex-1 text-xs text-gray-500">Jedi Kim</span>
                  <h3 class="flex-1 font-bold py-1">Today metting opened!</h3>
                  <p
                    class="flex-1 items-end text-xs text-gray-400 truncate ..."
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, doloribus ullam minima beatae nostrum repellat
                    officiis quisquam, consequuntur cum iusto cupiditate minus
                    tempore. Ipsum quaerat ipsa eveniet odio vero amet.
                  </p>
                </div>
                <div class="flex-none flex flex-col w-16 items-end">
                  <div class="flex-none">
                    <svg
                      class="w-4 h-4"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      ></polygon>
                    </svg>
                  </div>
                  <div class="flex-1 flex items-end text-xs text-gray-400">
                    3 days ago
                  </div>
                </div>
              </div>
            </li>
            <li class="flex h-20 p-5 border-b border-r border-gray-200">
              <div class="w-10 flex flex-none flex-col justify-between">
                <div class="flex-1">12</div>
                <div class="flex-1">
                  <svg
                    class="flex-none w-4 h-4 text-gray-500 hover:text-blue-500"
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
                </div>
              </div>
              <div class="flex-1 flex justify-between">
                <div class="flex-1 flex flex-col w-16">
                  <span class="flex-1 text-xs text-gray-500">Rhio Kim</span>
                  <h3 class="flex-1 font-bold py-1">Rules of cooperation!</h3>
                  <p
                    class="flex-1 items-end text-xs text-gray-400 truncate ..."
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, doloribus ullam minima beatae nostrum repellat
                    officiis quisquam, consequuntur cum iusto cupiditate minus
                    tempore. Ipsum quaerat ipsa eveniet odio vero amet.
                  </p>
                </div>
                <div class="flex-none flex flex-col w-16 items-end">
                  <div class="flex-none">
                    <svg
                      class="w-4 h-4"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="hsla(1, 90%, 64%, 1)"
                      stroke="hsla(1, 90%, 64%, 1)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      ></polygon>
                    </svg>
                  </div>
                  <div class="flex-1 flex items-end text-xs text-gray-400">
                    3 days ago
                  </div>
                </div>
              </div>
            </li>
            <li class="flex h-20 p-5 border-b border-r border-gray-200">
              <div>bbb</div>
            </li>
            <li class="flex h-20 p-5 border-b border-r border-gray-200">
              <div>bbb</div>
            </li>
            <li class="flex h-20 p-5 border-b border-r border-gray-200">
              <div>bbb</div>
            </li>
            <li class="flex h-20 p-5 border-b border-r border-gray-200">
              <div>bbb</div>
            </li>
            <li class="flex h-20 p-5 border-b border-r border-gray-200">
              <div>bbb</div>
            </li>
            <li class="flex h-20 p-5 border-b border-r border-gray-200">
              <div>bbb</div>
            </li>
            <li class="flex h-20 p-5 border-b border-r border-gray-200">
              <div>bbb</div>
            </li>
          </ul>
        </div>
      </div>
      <div id="content" class="flex-1">
        <div
          class="flex items-center justify-between border-b border-r border-gray-100 px-8 py-5"
        >
          <div class="flex items-center"></div>
          <div class="flex items-center">
            <svg
              class="flex-none w-4 h-4 mr-3 text-gray-500 hover:text-blue-500"
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
          </div>
        </div>
        <div class="flex justify-between px-8 py-5 border-r border-gray-200">
          <div class="flex"></div>
          <div class="flex">
            <svg
              class="flex-none w-4 h-4 mr-3 text-gray-500 hover:text-blue-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            <svg
              class="flex-none w-4 h-4 mr-3 text-gray-500 hover:text-blue-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path
                d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
              ></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
          </div>
        </div>
        <div class="overflow-y-auto p-5">
          <nuxt />
        </div>
      </div>
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

.active
  @apply bg-white border-white
.h-20
  height: 6.6rem
.w-100
  width: 22rem
</style>
