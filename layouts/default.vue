<template>
  <div id="main" class="flex overflow-hidden">
    <div
      id="sidebar"
      class="h-screen min-h-screen flex-none flex w-64 border-r border-gray-200"
    >
      <div class="w-64 z-10 bg-white">
        <div>
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
                stroke-width="3"
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
              class="flex-1 text-center bg-blue-700 hover:bg-blue-800 text-white rounded-sm py-3 px-4 inline-flex items-end"
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
          <div id="menus" class="overflow-y-auto">
            <ul class="px-8">
              <li class="py-3">
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
                    <polyline
                      points="22 12 16 12 14 15 10 15 8 12 2 12"
                    ></polyline>
                    <path
                      d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                    ></path>
                  </svg>
                  <span>Inbox</span>
                </a>
              </li>
              <li class="py-3">
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
              <li class="py-3">
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
              <li class="py-3">
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
            <ul class="pt-8 px-8">
              <li class="py-1">
                <a href="#" class="flex items-center hover:text-blue-500">
                  <svg
                    class="w-2 h-2 mr-3 text-teal-500 hover:text-blue-200"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  <span class="">Personal</span>
                </a>
              </li>
              <li class="py-2">
                <a href="#" class="flex items-center hover:text-blue-500">
                  <svg
                    class="w-2 h-2 mr-3 text-red-500 hover:text-blue-200"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  <span class="">Work</span>
                </a>
              </li>
              <li class="py-2">
                <a href="#" class="flex items-center hover:text-blue-500">
                  <svg
                    class="w-2 h-2 mr-3 text-gray-500 hover:text-blue-200"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  <span class="text-gray-500">Personal</span>
                </a>
              </li>
            </ul>
            <hr class="my-10 border-gray-200" />
            <div class="my-10 text-center">
              <span
                class="inline-block bg-orange-200 text-orange-400 text-xs border border-orange-300 px-2 rounded-full font-semibold tracking-wide"
                >new</span
              >
              <h3 class="font-bold pt-3">Michal Parulski</h3>
              <span class="text-xs text-gray-500">rhio.kim@gmail.com</span>
              <div class="my-8 mx-10">
                <div class="h-1 w-auto bg-gray-100 rounded">
                  <div
                    class="h-1 bg-yellow-500 text-xs leading-none text-center text-white rounded"
                    style="width: 45%"
                  ></div>
                </div>
                <div class="w-auto text-xs text-gray-500 text-right pt-1">
                  34/50GB
                </div>
                <div class="flex items-center py-10">
                  <div class="flex-1">
                    <div class="font-bold">25</div>
                    <span class="text-xs text-gray-400">Uploads</span>
                  </div>
                  <div class="flex-1">
                    <div class="font-bold">45</div>
                    <span class="text-xs text-gray-400">Messages</span>
                  </div>
                  <div class="flex-1">
                    <div class="font-bold">33</div>
                    <span class="text-xs text-gray-400">Contacts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="x-shadow">&nbsp;</div>
    </div>
    <div class="h-screen min-h-screen flex-1 flex">
      <div class="w-100 bg-gray-100">
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
        <div class="flex justify-between p-2 border-r border-b border-gray-200">
          <div class="flex items-end">
            <svg
              class="w-4 h-4 ml-3 mr-3 text-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            <span class="ml-1 text-xs text-gray-500">Newest</span>
          </div>
        </div>
        <div id="list" class="overflow-y-auto">
          <ul>
            <li class="flex h-20 p-5 border-b border-r border-gray-200 active">
              <div class="w-10 flex flex-none flex-col justify-between">
                <div class="flex-1">
                  <svg
                    class="flex-none w-4 h-4 mr-3 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline
                      points="22 12 16 12 14 15 10 15 8 12 2 12"
                    ></polyline>
                    <path
                      d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                    ></path>
                  </svg>
                </div>
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
                  <span class="flex-1 text-xs text-gray-500">Andrw J</span>
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
                <div class="flex-1">
                  <svg
                    class="flex-none w-4 h-4 mr-3 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path
                      d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                    ></path>
                  </svg>
                </div>
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
              <div class="w-10 flex flex-none flex-col justify-between">
                <div class="flex-1">
                  <svg
                    class="flex-none w-4 h-4 mr-3 text-purple-500"
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
                      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                    ></path>
                    <path
                      d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                    ></path>
                  </svg>
                </div>
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
                  <span class="flex-1 text-xs text-gray-500">Mark Lee</span>
                  <h3 class="flex-1 font-bold py-1">Never ending story</h3>
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
                  <div class="flex-none"></div>
                  <div class="flex-1 flex items-end text-xs text-gray-400">
                    3 days ago
                  </div>
                </div>
              </div>
            </li>
            <li class="flex h-20 p-5 border-b border-r border-gray-200">
              <div class="w-10 flex flex-none flex-col justify-between">
                <div class="flex-1">
                  <svg
                    class="flex-none w-4 h-4 mr-3 text-yellow-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
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
                  <span class="flex-1 text-xs text-gray-500">Jimmy Moon</span>
                  <h3 class="flex-1 font-bold py-1">
                    Start tc39 study with Seoul.js
                  </h3>
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
                  <div class="flex-none"></div>
                  <div class="flex-1 flex items-end text-xs text-gray-400">
                    12 months ago
                  </div>
                </div>
              </div>
            </li>
            <li class="flex h-20 p-5 border-b border-r border-gray-200">
              <div class="w-10 flex flex-none flex-col justify-between">
                <div class="flex-1">
                  <svg
                    class="flex-none w-4 h-4 mr-3 text-purple-500"
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
                      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                    ></path>
                    <path
                      d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                    ></path>
                  </svg>
                </div>
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
                  <h3 class="flex-1 font-bold py-1">What's new deno 0.24.0</h3>
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
                  <div class="flex-none"></div>
                  <div class="flex-1 flex items-end text-xs text-gray-400">
                    3 days ago
                  </div>
                </div>
              </div>
            </li>
            <li class="flex h-20 p-5 border-b border-r border-gray-200">
              <div class="w-10 flex flex-none flex-col justify-between">
                <div class="flex-1">
                  <svg
                    class="flex-none w-4 h-4 mr-3 text-purple-500"
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
                      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                    ></path>
                    <path
                      d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                    ></path>
                  </svg>
                </div>
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
                  <span class="flex-1 text-xs text-gray-500">Austin</span>
                  <h3 class="flex-1 font-bold py-1">Promethous setup guide</h3>
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
                  <div class="flex-none"></div>
                  <div class="flex-1 flex items-end text-xs text-gray-400">
                    3 days ago
                  </div>
                </div>
              </div>
            </li>
            <li class="flex h-20 p-5 border-b border-r border-gray-200">
              <div class="w-10 flex flex-none flex-col justify-between">
                <div class="flex-1">
                  <svg
                    class="flex-none w-4 h-4 mr-3 text-purple-500"
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
                      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                    ></path>
                    <path
                      d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                    ></path>
                  </svg>
                </div>
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
                  <span class="flex-1 text-xs text-gray-500">Brian Kim</span>
                  <h3 class="flex-1 font-bold py-1">
                    Study pattern matching spec
                  </h3>
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
                  <div class="flex-none"></div>
                  <div class="flex-1 flex items-end text-xs text-gray-400">
                    3 days ago
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="bottom-0 bg-gray-100 m-10 w-auto text-center">
            <button class="rounded-full p-3 bg-blue-500">
              <svg
                class="w-3 h-3 text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1">
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
        <div id="content" class="overflow-y-auto p-5">
          <nuxt />
        </div>
      </div>
    </div>
    <portal-target name="modal"></portal-target>
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
#sidebar
  // box-shadow: 5px 0px 3px -4px gray
  height: 100%
  .x-shadow
    top: 0
    left: -3px
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
    @apply h-screen absolute z-0 ml-64 bg-gray-200
#menus
  height: calc(100vh - 159px)
#list
  height: calc(100vh - 80px)
#content
  height: calc(100vh - 99px)
.d-shadow-xl
  box-shadow: 0 5px 25px -3px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
.modal
  transition: opacity 0.25s ease
.active
  @apply bg-white border-white
.h-20
  height: 6.6rem
.w-100
  width: 22rem
</style>
