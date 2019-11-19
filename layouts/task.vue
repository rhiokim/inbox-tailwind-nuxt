<template>
  <div class="flex">
    <div
      class="w-24 flex flex-col min-h-screen h-screen flex border-r border-gray-200 justify-between items-center"
    >
      <div class="w-full flex-1 flex-col items-center">
        <div class="my-8 relative ml-auto mr-auto text-center">
          <img
            src="https://avatars0.githubusercontent.com/u/28773357?s=200&v=4"
            alt="lovely avatar"
            class="inline w-16 h-16"
          />
          <div
            class="absolute w-4 h-4 top-0 right-0 rounded-full border-2 border-white bg-red-600"
            style="margin-right: 12px;"
          ></div>
        </div>
        <div class="relative flex h-16 items-center">
          <svg
            class="flex-1 w-8 h-8 my-5 text-gray-300 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
        </div>
        <div
          class="relative flex h-16 items-center border-l-4 border-purple-600"
        >
          <svg
            class="flex-1 w-8 h-8 my-5 text-purple-600 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <div
            class="absolute w-4 h-4 top-0 right-0 rounded-full border-2 border-white bg-red-600"
            style="margin-top: 10px; margin-right: 16px;"
          ></div>
        </div>
      </div>
      <div class="flex-1 flex flex-col items-center">
        <div class="flex-1"></div>
        <div>
          <svg
            class="w-6 h-6 mb-8 text-gray-300 hover:text-purple-600 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
          </svg>
        </div>
        <div>
          <svg
            class="w-6 h-6 mb-8 text-gray-300 hover:text-purple-600 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
            ></path>
          </svg>
        </div>
        <div class="">
          <div class="w-10 h-10 relative mb-4">
            <div
              class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
            >
              <img
                src="https://avatars2.githubusercontent.com/u/145777?s=400&u=2a1095688741c9edd8b8d96c882b5a42a1fbfff3&v=4"
                alt="lovely avatar"
                class="object-cover object-center w-full h-full visible group-hover:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-32 min-h-screen h-screen flex flex-col border-r border-gray-200 bg-gray-100 overflow-y-auto"
    >
      <div>
        <div class="relative mx-6 my-8">
          <div
            class="absolute w-8 h-8 font-bold text-sm text-center rounded-full border-4 border-white bg-gray-400 text-white"
            style="margin-top: -5px; margin-left: -5px;"
          >
            10
          </div>
          <div
            class="absolute w-6 h-6 right-0 rounded-full border-4 border-white bg-red-600"
            style="margin-top: -2px; margin-right: -2px;"
          ></div>
          <div
            class="active group w-full rounded-full overflow-hidden shadow-inner text-center table cursor-pointer"
          >
            <img
              src="https://avatars2.githubusercontent.com/u/145777?s=400&u=2a1095688741c9edd8b8d96c882b5a42a1fbfff3&v=4"
              alt="lovely avatar"
              class="object-cover object-center w-full h-full visible group-hover:hidden"
            />
          </div>
          <span class="block text-center font-bold pt-1">Rhio</span>
        </div>
        <div class="relative mx-6 my-8">
          <div
            class="absolute w-8 h-8 font-bold text-sm text-center rounded-full border-4 border-white bg-gray-400 text-white"
            style="margin-top: -5px; margin-left: -5px;"
          >
            8
          </div>
          <div
            class="absolute w-6 h-6 right-0 rounded-full border-4 border-white bg-red-600"
            style="margin-top: -2px; margin-right: -2px;"
          ></div>
          <div
            class="group w-full rounded-full overflow-hidden shadow-inner text-center table cursor-pointer"
          >
            <img
              src="data:image/jpeg;base64,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"
              alt="lovely avatar"
              class="object-cover object-center w-full h-full visible group-hover:hidden"
            />
          </div>
          <span class="block text-center font-bold pt-1">Mayke</span>
        </div>
        <div class="relative mx-6 my-8">
          <div
            class="absolute w-8 h-8 font-bold text-sm text-center rounded-full border-4 border-white bg-gray-400 text-white"
            style="margin-top: -5px; margin-left: -5px;"
          >
            2
          </div>
          <div
            class="absolute w-6 h-6 right-0 rounded-full border-4 border-white bg-red-600"
            style="margin-top: -2px; margin-right: -2px;"
          ></div>
          <div
            class="group w-full rounded-full overflow-hidden shadow-inner text-center table cursor-pointer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhZYbEGQvAuGbO4OWbu_CuPgU-cy07Tz0W9Jn-omXGj7kAl7-&s"
              alt="lovely avatar"
              class="object-cover object-center w-full h-full visible group-hover:hidden"
            />
          </div>
          <span class="block text-center font-bold pt-1">Torsten</span>
        </div>
        <div class="relative mx-6 my-8">
          <div
            class="absolute w-8 h-8 font-bold text-sm text-center rounded-full border-4 border-white bg-gray-400 text-white"
            style="margin-top: -5px; margin-left: -5px;"
          >
            9
          </div>
          <div
            class="hidden absolute w-6 h-6 right-0 rounded-full border-4 border-white bg-red-600"
            style="margin-top: -2px; margin-right: -2px;"
          ></div>
          <div
            class="group w-full rounded-full overflow-hidden shadow-inner text-center table cursor-pointer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbGr13unPzFuQ3WdJ775DFLwqdNdJ8BSUvCXmzrGCpwZGkUoT&s"
              alt="lovely avatar"
              class="object-cover object-center w-full h-full visible group-hover:hidden"
            />
          </div>
          <span class="block text-center font-bold pt-1">Wilhelm</span>
        </div>
        <div class="relative mx-6 my-8">
          <div
            class="absolute w-8 h-8 font-bold text-sm text-center rounded-full border-4 border-white bg-gray-400 text-white"
            style="margin-top: -5px; margin-left: -5px;"
          >
            3
          </div>
          <div
            class="hidden absolute w-6 h-6 right-0 rounded-full border-4 border-white bg-red-600"
            style="margin-top: -2px; margin-right: -2px;"
          ></div>
          <div
            class="group w-full rounded-full overflow-hidden shadow-inner text-center table cursor-pointer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPr17e8rw6n_H1HoFNbAFPpwiYSO9AlOJeaKN4QQpoJexdGsuL&s"
              alt="lovely avatar"
              class="object-cover object-center w-full h-full visible group-hover:hidden"
            />
          </div>
          <span class="block text-center font-bold pt-1">Longo</span>
        </div>
        <div class="relative mx-6 my-8">
          <div
            class="absolute w-8 h-8 font-bold text-sm text-center rounded-full border-4 border-white bg-gray-400 text-white"
            style="margin-top: -5px; margin-left: -5px;"
          >
            8
          </div>
          <div
            class="hidden absolute w-6 h-6 right-0 rounded-full border-4 border-white bg-red-600"
            style="margin-top: -2px; margin-right: -2px;"
          ></div>
          <div
            class="group w-full rounded-full overflow-hidden shadow-inner text-center table cursor-pointer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjk8F0fdq4VC-3GQf4aueB876wt8RETFAASKRrR5st5H-R43n3&s"
              alt="lovely avatar"
              class="object-cover object-center w-full h-full visible group-hover:hidden"
            />
          </div>
          <span class="block text-center font-bold pt-1">Riak</span>
        </div>
      </div>
    </div>
    <div
      class="relative flex-1 flex flex-col bg-gray-100 min-h-screen h-screen overflow-y-auto"
    >
      <div
        id="contents"
        class="fixed p-10 h-20 flex-1 flex items-center justify-between"
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
            style="margin-top: -2px; margin-right: -2px;"
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
      <div class="flex-1 flex m-10">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
#contents
  width: calc(100vw - 14rem)
  background-image: linear-gradient(to top, hsla(220, 43%, 97%, 0), hsla(220, 43%, 97%, 1))
.active
  @apply border-4 border-purple-600
</style>
