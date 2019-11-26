<template>
  <div
    class="relative flex-1 bg-gray-100 min-h-screen h-screen overflow-y-auto"
  >
    <div class="flex-1 mt-32 mx-32">
      <div class="flex pb-10 overflow-x-auto items-center">
        <div class="date">
          <div class="percent">
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle cx="15" cy="15" r="15"></circle>
            </svg>
            <div class="number">
              <span>29</span>
            </div>
            <div class="week">
              M
            </div>
          </div>
        </div>
        <div class="date">
          <div class="percent">
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle
                cx="15"
                cy="15"
                r="15"
                style="stroke-dashoffset: 40"
              ></circle>
            </svg>
            <div class="number">
              <span>28</span>
            </div>
            <div class="week">
              T
            </div>
          </div>
        </div>
        <div class="date">
          <div class="percent">
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle
                cx="15"
                cy="15"
                r="15"
                style="stroke-dashoffset: 60"
              ></circle>
            </svg>
            <div class="number">
              <span>27</span>
            </div>
            <div class="week">
              W
            </div>
          </div>
        </div>
        <div class="date">
          <div class="percent">
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle cx="15" cy="15" r="15"></circle>
            </svg>
            <div class="number">
              <span>26</span>
            </div>
            <div class="week">
              T
            </div>
          </div>
        </div>
        <div class="date">
          <div class="percent">
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle cx="15" cy="15" r="15"></circle>
            </svg>
            <div class="number">
              <span>25</span>
            </div>
            <div class="week">
              F
            </div>
          </div>
        </div>
        <div class="date">
          <div class="percent">
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle cx="15" cy="15" r="15"></circle>
            </svg>
            <div class="number">
              <span>24</span>
            </div>
            <div class="week">
              S
            </div>
          </div>
        </div>
        <div class="date">
          <div class="percent">
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle cx="15" cy="15" r="15"></circle>
            </svg>
            <div class="number">
              <span>23</span>
            </div>
            <div class="week">
              S
            </div>
          </div>
        </div>
        <div class="date">
          <div class="percent">
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle cx="15" cy="15" r="15"></circle>
            </svg>
            <div class="number">
              <span>22</span>
            </div>
            <div class="week">
              S
            </div>
          </div>
        </div>
        <div class="date">
          <div class="percent">
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle cx="15" cy="15" r="15"></circle>
            </svg>
            <div class="number">
              <span>21</span>
            </div>
            <div class="week">
              S
            </div>
          </div>
        </div>
        <div class="date">
          <div class="percent">
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle cx="15" cy="15" r="15"></circle>
            </svg>
            <div class="number">
              <span>20</span>
            </div>
            <div class="week">
              S
            </div>
          </div>
        </div>
        <div class="date">
          <div class="percent">
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle cx="15" cy="15" r="15"></circle>
            </svg>
            <div class="number">
              <span>19</span>
            </div>
            <div class="week">
              S
            </div>
          </div>
        </div>
        <div class="date">
          <div class="percent">
            <svg>
              <circle cx="15" cy="15" r="15"></circle>
              <circle cx="15" cy="15" r="15"></circle>
            </svg>
            <div class="number">
              <span>18</span>
            </div>
            <div class="week">
              S
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
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
      </div>

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
  layout: 'task'
}
</script>

<style lang="sass" scoped>
.date
  @apply block mt-5 mr-2
  svg
    @apply relative
    width: 40px
    height: 40px
    circle
      width: 100%
      height: 100%
      fill: none
      stroke: hsla(220, 43%, 93%, 1)
      stroke-width: 4
      stroke-linecap: round
      transform: translate(5px, 5px)
    circle:nth-child(2)
      stroke-dasharray: 100
      stroke-dashoffset: 90
  .percent
    @apply relative w-full h-full text-gray-500
    .number
      @apply absolute top-0 left-0 w-full h-full flex justify-center items-center
    .week
      @apply absolute top-0 left-0 w-full h-full flex justify-center
      margin-top: -1.25rem
  .percent:nth-child(1) svg
    circle:nth-child(2)
      stroke: hsla(1, 100%, 70%, 1)

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
</style>
