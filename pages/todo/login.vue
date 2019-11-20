<template>
  <div class="relative flex justify-center text-center">
    <div class="mt-20">
      <img
        class="inline rounded-lg w-56 h-56"
        src="https://avatars1.githubusercontent.com/u/28773357?s=400&u=481de97e9d07e1948ee4927c521ec0fd7db47bd7&v=4"
      />
      <h1 class="text-5xl py-10">Hello there!</h1>
      <span class="block py-2 text-gray-700"
        >Connect GipsyBot with your email & calendar to keep everything
        synchronized. It's totally safe and easy to do -- just a few
        clicks</span
      >
      <div class="py-5 flex items-center justify-center">
        <div class="w-6 h-2 mx-1 bg-purple-500 rounded-full"></div>
        <div class="w-6 h-2 mx-1 bg-purple-200 rounded-full"></div>
        <div class="w-6 h-2 mx-1 bg-purple-200 rounded-full"></div>
      </div>
      <button
        class="bg-purple-600 text-white font-bold py-6 px-16 my-16 mx-2 rounded-full"
      >
        <svg
          class="inline w-4 h-4 mx-1"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        <span>Sign in with Google</span>
      </button>
      <button
        class="bg-purple-600 text-white font-bold py-6 px-16 my-16 mx-2 rounded-full"
      >
        <svg class="inline w-4 h-4 mx-1" viewBox="0 0 291.346 291.346">
          <g>
            <path
              style="fill:#26A6D1;"
              d="M117.547,266.156L0,249.141v-94.296h117.547V266.156z"
            ></path>
            <path
              style="fill:#3DB39E;"
              d="M291.346,136.51H136.31l0.055-114.06L291.346,0.009V136.51z"
            ></path>
            <path
              style="fill:#F4B459;"
              d="M291.346,291.337l-155.091-22.459l0.182-114.015h154.909V291.337z"
            ></path>
            <path
              style="fill:#E2574C;"
              d="M117.547,136.51H0V42.205l117.547-17.024V136.51z"
            ></path>
          </g>
        </svg>
        <span>Sign in with Microsoft</span>
      </button>
      <a href="#" class="block py-4 underline">I'm new around here</a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty'
}
</script>
