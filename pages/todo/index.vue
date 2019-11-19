<template>
  <div class="mt-20 flex-1">
    <h1 class="text-6xl">Today</h1>
    <ul class="text-2xl text-gray-900 leading-loose">
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
          <span> Catchup with engineering team lead 👏🏻</span>
        </label>
        <div class="w-56 text-xl text-right text-gray-500">
          Done at 08:00 AM
        </div>
        <div class="w-24 ml-5 text-right text-xl text-gray-500">30min</div>
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
          <span>Talk to HR manager and sales team</span>
        </label>
        <div class="w-56 text-xl text-right text-gray-500">
          Done at 08:00 AM
        </div>
        <div class="w-24 ml-5 text-right text-xl text-gray-500">6h 30min</div>
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
        <div class="w-24 ml-5 text-right text-xl text-gray-500">6h 30min</div>
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
        <div class="w-24 ml-5 text-right text-xl text-gray-500">6h 30min</div>
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
          <div class="w-24 ml-5 text-right text-xl text-gray-500">6h 30min</div>
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
          <div class="w-24 ml-5 text-right text-xl text-gray-500">6h 30min</div>
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
          <div class="w-24 ml-5 text-right text-xl text-gray-500">6h 30min</div>
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
          <div class="w-24 ml-5 text-right text-xl text-gray-500">6h 30min</div>
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
          <div class="w-24 ml-5 text-right text-xl text-gray-500">6h 30min</div>
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
          <div class="w-24 ml-5 text-right text-xl text-gray-500">6h 30min</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'task'
}
</script>

<style lang="sass" scoped>
.checkbox-wrap
  background-color: hsla(161, 64%, 57%, 1)
  padding: 4px 0 0 4px
  width: 1.6rem
  height: 1.6rem
  margin-top: 0.7rem
  border-radius: 0.65rem

  input:checked + svg
    display: block !important
</style>
