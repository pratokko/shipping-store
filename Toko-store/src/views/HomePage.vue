<template>
  <div>
    <div class="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9">
      <div class="relative rounded-md">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="city view"
          class="w-full h-full rounded-md object-center object-fill absolute sm:block hidden"
        />
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="city view"
          class="w-full h-full rounded-md absolute object-center object-fill sm:hidden"
        />
        <div
          class="text-xl relative z-20 bg-gradient-to-r from-sky-700 to-transparent w-full h-full top-0 md:p-16 p-6 flex flex-col justify-between rounded-md"
        >
          <div>
            <h1
              class="md:text-5xl text-3xl pt-2 font-bold md:leading-10 leading-9 text-white sm:w-auto w-64"
            >
              Act Before It’s Too Late!
            </h1>
            <p
              class="text-2xl leading-12 text-white xl:w-5/12 lg:w-8/12 md:w-10/12 2xl:pr-12 mt-4"
            >
              A good idiom for kids is "It's raining cats and dogs." Kids know
              what both cats and dogs are from an early age.
            </p>
          </div>
          <div class="md:mt-12 mt-20">
            <button
              @click="$router.push({ name: 'MainView' })"
              class="text-base font-medium leading-4 text-white-700 bg-orange-700 sm:w-auto w-full rounded-xl p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- what we have -->

  <div class="bg-sky-200">
    <div class="2xl:mx-auto 2xl:container overflow-y-hidden">
      <div class="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <h1 class="lg:text-4xl text-3xl font-semibold text-black text-center">
          View Our Featured Products
        </h1>
      </div>
    </div>
    <!-- Remove py-8 -->
    <div class="mx-auto container">
      <div
        class="flex flex-wrap items-center lg:justify-between justify-center"
      >
        <div
          v-for="index in 4"
          v-bind:key="index"
          class="mx-2 w-72 lg:mb-0 mb-8"
        >
          <div>
            <img v-bind:src="cardImage" class="w-full h-44" />
          </div>
          <div class="bg-white">
            <div class="flex items-center justify-between px-4 pt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bookmark"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  stroke-linecap="round"

                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"
                  />
                </svg>
              </div>
              <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                <p class="text-xs text-yellow-500">Featured</p>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-center">
                <h2 class="text-lg font-semibold">
                  {{ item }}
                </h2>
                <p class="text-xs text-gray-600 pl-5">4 days ago</p>
              </div>
              <p class="text-xs text-gray-600 mt-2">
                {{ description }}
              </p>
              <div class="flex mt-4">
                <div>
                  <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                    12 months warranty
                  </p>
                </div>
                <div class="pl-2">
                  <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                    Complete box
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between py-4">
                <h2 class="text-indigo-700 text-xs font-semibold">
                  Bay Area, San Francisco
                </h2>
                <h3 class="text-indigo-700 text-xl font-semibold">$350</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16"
      >
        <div
          v-for="index in 4"
          v-bind:key="index"
          class="mx-2 w-72 lg:mb-0 mb-8"
        >
          <div>
            <img v-bind:src="cardImage2" class="w-full h-44" />
          </div>
          <div class="bg-white">
            <div class="flex items-center justify-between px-4 pt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bookmark"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"
                  />
                </svg>
              </div>
              <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                <p class="text-xs text-yellow-500">Featured</p>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-center">
                <h2 class="text-lg font-semibold">
                  {{ item }}
                </h2>
                <p class="text-xs text-gray-600 pl-5">4 days ago</p>
              </div>
              <p class="text-xs text-gray-600 mt-2">
                {{ description }}
              </p>
              <div class="flex mt-4">
                <div>
                  <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                    12 months warranty
                  </p>
                </div>
                <div class="pl-2">
                  <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                    Complete box
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between py-4">
                <h2 class="text-indigo-700 text-xs font-semibold">
                  Bay Area, San Francisco
                </h2>
                <h3 class="text-indigo-700 text-xl font-semibold">$350</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Pricing -->

  <div class="pt-16">
    <div class="w-full bg-gray-200 py-12">
      <div class="container mx-auto">
        <div class="w-4/5 mx-auto mb-12">
          <h1
            class="xl:text-4xl text-3xl text-center text-gray-800 mb-4 font-extrabold"
          >
            Simple & Easy Steps
          </h1>
          <p class="text-xl text-center text-gray-600 font-normal">
            Focus on your business goals and we take care of the rest. From
            ready-made components to perfect templates to highly customizable
            design. All you need to do is choose your plan according to your
            next project.
          </p>
          <!-- <div class="flex justify-center mt-8 items-center" role="button">
            <p class="mr-2 text-lg font-bold text-gray-600">Bill Monthly</p>
            <div
              class="cursor-pointer w-12 h-6 rounded-full bg-indigo-700 relative shadow-sm"
            >
              <input
                checked
                type="checkbox"
                name="toggle"
                id="toggle2"
                class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
              />
              <label
                for="toggle2"
                class="toggle-label block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <p class="ml-2 text-lg font-bold text-gray-800">Bill Annually</p>
          </div> -->
        </div>
        <div class="w-11/12 mx-auto">
          <div class="xl:flex lg:flex items-end">
            <div
              class="flex flex-wrap xl:w-1/4 bg-white items-center justify-center pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-2 sm:mb-2 mb-2 shadow"
            >
              <img src="https://cdn.tuk.dev/assets/calculator-img.png" alt="" />
            </div>
            <div class="xl:flex lg:flex md:flex sm:flex shadow">
              <div
                class="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200"
              >
                <div class="mb-6">
                  <img
                    src="https://cdn.tuk.dev/assets/paper-plane.png"
                    alt=""
                  />
                </div>
                <p class="text-center text-2xl font-bold text-gray-800 mb-3">
                  Create Account
                </p>
                <p
                  class="text-center text-sm text-gray-600 mb-6 font-normal w-full"
                >
                  create your account on TokoStore easily
                </p>
                <button
                  class="focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-indigo-600 px-6 py-2 text-sm"
                >
                  Get Quotation
                </button>
              </div>
              <div
                class="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200"
              >
                <div class="mb-5">
                  <img src="https://cdn.tuk.dev/assets/plane.png" alt="" />
                </div>
                <p class="text-center text-2xl font-bold text-gray-800 mb-3">
                  pay & wait for delivery
                </p>
                <p
                  class="text-center text-sm text-gray-600 mb-6 font-normal w-full"
                >
                  More power for company sites and heavy traffic. Growing
                  business.
                </p>
                <button
                  class="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm border"
                >
                  Newsletter
                </button>
              </div>
              <div
                class="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200"
              >
                <div class="mb-6">
                  <img
                    src="https://cdn.tuk.dev/assets/start-button.png"
                    alt=""
                  />
                </div>
                <p class="text-center text-2xl font-bold text-gray-800 mb-3">
                  Track an Order
                </p>
                <p
                  class="text-center text-sm text-gray-600 mb-6 font-normal w-full"
                >
                  Support multi-complex sites and high-resolution photos and
                  videos.
                </p>
                <button
                  class="focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-indigo-600 px-6 py-2 text-sm"
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
          <div class="shadow">
            <div>
              <div class="flex items-center w-full">
                <p
                  class="pl-4 pt-3 pb-3 font-bold text-sm text-gray-600 w-3/12"
                >
                  Create Account
                </p>
                <p
                  class="w-3/12 text-sm text-center text-gray-800 font-bold lg:hidden"
                >
                  Get Quotation
                </p>
                <p
                  class="w-3/12 text-sm text-center text-gray-800 font-bold lg:hidden"
                >
                  Pay & Wait
                </p>
                <p
                  class="w-3/12 text-sm text-center text-gray-800 font-bold lg:hidden"
                >
                  Track Order
                </p>
              </div>
              <table class="sm:table-fixed table-auto w-full bg-white">
                <tbody>
                  <tr>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words"
                    >
                      Plan Cost
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      $49 per month
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      $49 per month
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      $49 per month
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words"
                    >
                      Platform Fee
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      $10 per month
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      $10 per month
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      $10 per month
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 pt-3 pb-4 break-words"
                    >
                      Processing Fee
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      2% plus tax
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      2% plus tax
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      2% plus tax
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p class="pl-4 pt-3 pb-3 font-bold text-sm text-gray-600">
                Features
              </p>
              <table class="sm:table-fixed table-auto w-full bg-white">
                <tbody>
                  <tr>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words"
                    >
                      Access to Funds
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words"
                    >
                      UX Consultancy
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words"
                    >
                      Team Augmentation
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words"
                    >
                      SEO Package
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    ></td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words"
                    >
                      Marketing Services
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    ></td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words"
                    >
                      Development Team
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    ></td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    ></td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words"
                    >
                      On-Call Support
                    </td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    ></td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    ></td>
                    <td
                      class="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"
                    >
                      <div
                        class="h-2 w-2 rounded-full bg-indigo-700 mx-auto"
                      ></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardImage:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",

      cardImage2:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      item: "iphone XS",
      description:
        "The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos",
      isClicked: "none",
    };
  },
};
</script>
