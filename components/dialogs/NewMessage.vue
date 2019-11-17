<template>
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
            class="w-full h-48 border border-gray-100 p-3 leading-relaxed"
          >
  - [ ] Meeting with sloth
  - [ ] Study tc39 newest spec
  - [ ] Blog post about Pattern Matching spec
          </textarea>
        </div>
        <div class="flex justify-between px-10 pt-3 pb-4">
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
</template>
