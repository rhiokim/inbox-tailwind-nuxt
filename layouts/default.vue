<template>
  <div id="main" class="flex">
    <div id="menu" class="relative w-64 border-r border-gray-200">
      <div class="h-screen absolute w-64 z-10 bg-white">
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
        <ul class="pt-8 px-8">
          <li class="py-2">
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
              <span class="text-gray-500">Personal</span>
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
              <span class="text-gray-500">Work</span>
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
            class="inline-block bg-red-200 text-red-600 text-xs border border-red-300 px-2 rounded-full font-semibold tracking-wide"
            >new</span
          >
        </div>
      </div>
      <div class="x-shadow">&nbsp;</div>
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
        <div class="overflow-y-auto">
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
        <div class="overflow-y-auto p-5">
          <nuxt />
        </div>
      </div>
    </div>
    <portal to="modal">
      <div
        class="modal absolute w-full h-full top-0 left-0 flex items-center justify-center z-50"
      >
        <div
          class="modal-overlay absolute w-full h-full bg-black opacity-0 top-0 left-0 cursor-pointer"
        ></div>
        <div
          class="absolute w-2/5 bg-white rounded-sm d-shadow-xl flex flex-col right-0 bottom-0 mb-10 mr-10 border border-gray-100"
        >
          <div class="flex justify-between border-b border-gray-100 px-10 py-4">
            <div class="flex-none flex">
              <select
                class="block appearance-none w-full text-xs bg-white bg-gray-100 border border-gray-200 hover:border-gray-500 px-3 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Type</option>
                <option selected>Todo</option>
                <option>Email</option>
                <option>Presentation</option>
                <option>Post</option>
              </select>
            </div>
            <div class="flex items-center">
              <svg
                class="w-4 h-4 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </div>
          </div>
          <div class="flex px-10 pt-4 pt-2">
            <textarea
              class="w-full h-32 border border-gray-100 p-3 leading-relaxed"
            >
    - [ ] Meeting with sloth
    - [ ] Study tc39 newest spec
    - [ ] Blog post about Pattern Matching spec
            </textarea>
          </div>
          <div class="flex justify-between px-10 pt-2 pb-4">
            <div class="flex-none flex items-center">
              <svg
                class="w-4 h-4 mr-3 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <svg
                class="w-4 h-4 mr-3 text-gray-500"
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
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                ></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
              <svg
                class="w-4 h-4 text-gray-500"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <div class="flex">
              <button
                class="flex-1 text-center bg-blue-500 hover:bg-blue-700
              text-white rounded-sm py-2 px-6 inline-flex items-end"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </portal>
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
#menu
  // box-shadow: 5px 0px 3px -4px gray
  height: 100%
  .x-shadow
    top: 0
    left: -3px
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
    @apply h-screen absolute z-0 ml-64 bg-gray-200
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
