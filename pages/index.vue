<script setup lang="ts"></script>

<template>
  <div>
    <section
      id="hero"
      class="bg-blue-600 text-white sm:h-screen grid place-items-center -mt-1 sm:mt-0"
    >
      <div
        class="container mx-auto px-4 sm:px-0 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-20 py-6 sm:py-20"
      >
        <div class="w-full sm:w-6/12">
          <h1 class="text-4xl sm:text-6xl font-bold xl:leading-[4rem]">
            Nuxt 3 + Tailwind
          </h1>
          <p class="text-xl mt-4 mb-14 text-blue-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa
            eius laborum ipsam ea repellendus mollitia quia placeat optio, sed
            dolores aut error magnam illo modi vel a. Alias, corporis.
          </p>
          <div class="space-x-4">
            <a
              href="#feature"
              class="px-6 py-4 rounded-lg transition duration-300 border text-lg bg-white border-white text-blue-600 font-semibold hover:bg-blue-100"
            >
              Get Started
            </a>
          </div>
        </div>
        <div class="w-full sm:w-6/12 flex justify-end p-6 sm:p-0">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
            alt=""
            class="w-auto max-w-full rounded-lg"
          />
        </div>
      </div>
    </section>

    <section id="about" class="bg-blue-100 py-6 sm:py-20 px-4 sm:px-0">
      <div class="container mx-auto lg:text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-600">About</h2>
          <p class="mt-4 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            nesciunt assumenda exercitationem tenetur, sint, perspiciatis
            dolorem, esse eligendi ad sit id doloremque cum officiis accusamus.
            Nam ipsum vero fugit esse.
          </p>
          <div class="mt-10 mb-4">
            <a
              class="px-6 py-4 cursor-pointer rounded-lg transition duration-300 border text-lg bg-blue-600 border-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="feature" class="bg-white py-10 sm:py-20">
      <div class="px-4 sm:px-0 container mx-auto">
        <div class="text-center sm:mx-auto sm:max-w-xl">
          <h2 class="text-4xl font-semibold text-gray-900">Features</h2>
          <p class="mt-2 text-lg text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div
          class="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20"
        >
          <div class="order-2 sm:order-1">
            <h2 class="text-3xl font-semibold text-gray-800">Feature 1</h2>
            <p class="mt-1 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              obcaecati autem est! Nisi, fugit! Asperiores quisquam similique
              pariatur minus nulla ducimus eveniet natus perferendis, harum
              illum minima perspiciatis sed. Autem.
            </p>
            <div class="mt-8">
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div
                    class="grid h-10 w-10 flex-shrink-0 place-items-center rounded bg-blue-600 text-white"
                  >
                    <!-- Heroicon name: outline/globe-alt -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="-mt-1.5 text-lg font-semibold">Feature</h3>
                    <p class="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum dolores deserunt, est error placeat voluptas soluta
                      officiis delectus dicta cum culpa doloremque voluptates
                      ipsum rem, ad fuga voluptatibus deleniti odio.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div
                    class="grid h-10 w-10 flex-shrink-0 place-items-center rounded bg-blue-600 text-white"
                  >
                    <!-- Heroicon name: outline/globe-alt -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="-mt-1.5 text-lg font-semibold text-gray-800">
                      Feature
                    </h3>
                    <p class="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo, adipisci expedita consequuntur eius aliquam eos id
                      repellat itaque repudiandae, deleniti sint excepturi
                      accusantium nihil quasi numquam reprehenderit veniam nobis
                      quisquam!
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div
                    class="grid h-10 w-10 flex-shrink-0 place-items-center rounded bg-blue-600 text-white"
                  >
                    <!-- Heroicon name: outline/globe-alt -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="-mt-1.5 text-lg font-semibold text-gray-800">
                      Feature
                    </h3>
                    <p class="text-gray-500">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Necessitatibus dignissimos ipsam nisi culpa aliquid iure
                      beatae magnam vitae repellat praesentium nemo explicabo
                      possimus maxime nostrum quos veritatis, hic aut. Odit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 sm:order-2">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1446941303752-a64bb1048d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              alt=""
              class="max-w-full sm:max-w-md mx-auto rounded-lg border"
            />
          </div>
        </div>

        <div
          class="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 border-t sm:border-none py-10 sm:py-20"
        >
          <div class="order-2 sm:order-1">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1614315517650-3771cf72d18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
              alt=""
              class="max-w-full rounded-lg border"
            />
          </div>
          <div class="order-1 sm:order-2">
            <div>
              <div
                class="grid h-20 w-20 flex-shrink-0 place-items-center rounded bg-blue-600 text-white"
              >
                <!-- Heroicon name: outline/globe-alt -->
                <svg
                  class="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 class="mt-6 text-3xl font-semibold text-gray-800">
                Feature 2
              </h3>
              <p class="mt-2 text-lg text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                iure maiores totam eveniet, repellat quod voluptatem? Minima,
                reprehenderit magnam odio molestias ullam eum, voluptates labore
                eligendi, animi harum id recusandae.
              </p>
              <div class="mt-8">
                <div class="space-y-6">
                  <div class="flex items-start gap-4">
                    <div
                      class="grid h-10 w-10 flex-shrink-0 place-items-center rounded bg-blue-600 text-white"
                    >
                      <!-- Heroicon name: outline/globe-alt -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 class="-mt-1.5 text-lg font-semibold">Feature</h3>
                      <p class="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum dolores deserunt, est error placeat voluptas
                        soluta officiis delectus dicta cum culpa doloremque
                        voluptates ipsum rem, ad fuga voluptatibus deleniti
                        odio.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <div
                      class="grid h-10 w-10 flex-shrink-0 place-items-center rounded bg-blue-600 text-white"
                    >
                      <!-- Heroicon name: outline/globe-alt -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 class="-mt-1.5 text-lg font-semibold text-gray-800">
                        Feature
                      </h3>
                      <p class="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo, adipisci expedita consequuntur eius aliquam eos id
                        repellat itaque repudiandae, deleniti sint excepturi
                        accusantium nihil quasi numquam reprehenderit veniam
                        nobis quisquam!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-blue-600 text-white py-10 sm:py-20 px-4 sm:px-0">
      <div
        class="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20 items-start justify-between"
      >
        <div>
          <h3 class="mt-6 text-3xl font-semibold text-white">Feature 3</h3>
          <p class="mt-2 text-lg text-blue-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            debitis voluptatibus quae ut esse rem voluptatum aperiam asperiores
            iusto commodi, quibusdam, molestias vero laudantium voluptate id
            vitae? Perspiciatis, eius corporis.
          </p>

          <div class="mt-8">
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div
                  class="grid h-10 w-10 flex-shrink-0 place-items-center rounded bg-white text-blue-600"
                >
                  <!-- Heroicon name: outline/globe-alt -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="-mt-1.5 text-lg font-semibold">Feature</h3>
                  <p class="text-blue-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum dolores deserunt, est error placeat voluptas soluta
                    officiis delectus dicta cum culpa doloremque voluptates
                    ipsum rem, ad fuga voluptatibus deleniti odio.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div
                  class="grid h-10 w-10 flex-shrink-0 place-items-center rounded bg-white text-blue-600"
                >
                  <!-- Heroicon name: outline/globe-alt -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="-mt-1.5 text-lg font-semibold text-white">
                    Feature
                  </h3>
                  <p class="text-blue-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, adipisci expedita consequuntur eius aliquam eos id
                    repellat itaque repudiandae, deleniti sint excepturi
                    accusantium nihil quasi numquam reprehenderit veniam nobis
                    quisquam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1447433865958-f402f562b843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
            alt=""
            class="max-w-full rounded-lg"
          />
        </div>
      </div>
    </section>

    <section class="bg-white py-6 px-4 sm:px-0 sm:py-20">
      <div class="container mx-auto lg:text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-600">Quote Title</h2>
          <p class="mt-4 text-gray-600 leading-6">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            enim quis incidunt fugiat, quisquam aspernatur eaque necessitatibus
            sit ipsum voluptas excepturi rerum in mollitia, iusto, id velit
            optio commodi odio?"
          </p>
        </div>
      </div>
    </section>

    <div id="contact" c class="px-4 xl:px-0 py-6 sm:py-20 bg-blue-600">
      <div class="container mx-auto">
        <div class="flex flex-col sm:flex-row justify-between gap-10 sm:gap-20">
          <div class="w-full sm:w-6/12">
            <h3 class="font-semibold text-4xl mb-1 text-white">Title</h3>
            <div class="text-blue-300 mb-5 sm:mb-8">
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days.
            </div>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="flex gap-2 items-center text-white hover:text-blue-300"
                >
                  <div
                    class="w-10 h-10 bg-white text-blue-600 rounded-full grid place-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  app@example.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  class="flex gap-2 items-center text-white hover:text-blue-300"
                >
                  <div
                    class="w-10 h-10 bg-white text-blue-600 rounded-full grid place-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                      />
                    </svg>
                  </div>
                  +62-1111-2222-33
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  class="flex gap-2 items-center text-white hover:text-blue-300"
                >
                  <div
                    class="w-10 h-10 bg-white text-blue-600 rounded-full grid place-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  domain.tld
                </a>
              </li>
            </ul>
          </div>
          <div class="w-full sm:w-6/12">
            <div class="space-y-1 sm:mb-8 mb-6">
              <h3 class="font-semibold text-white text-3xl">Contact Us</h3>
              <p class="text-blue-300 max-w-md">
                Have question? Submit your question on this form bellow and
                we'll be in touch.
              </p>
            </div>

            <form>
              <div class="mb-4">
                <label for="name" class="mb-1 block font-semibold text-white"
                  >Name</label
                >
                <input
                  class="px-3 py-2 border w-full rounded-md"
                  name="name"
                  label="Name"
                  placeholder="Your name"
                />
              </div>
              <div class="mb-4">
                <label for="email" class="mb-1 block font-semibold text-white"
                  >Email</label
                >
                <input
                  class="px-3 py-2 border w-full rounded-md"
                  name="email"
                  label="Email"
                  placeholder="Your email"
                />
              </div>
              <div class="mb-4">
                <label for="phone" class="mb-1 block font-semibold text-white"
                  >Phone Number</label
                >
                <input
                  class="px-3 py-2 border w-full rounded-md"
                  type="tel"
                  name="phone"
                  label="Phone Number"
                  placeholder="Your phone number"
                />
              </div>
              <div class="mb-4">
                <label for="message" class="mb-1 block font-semibold text-white"
                  >Message</label
                >
                <textarea
                  rows="4"
                  class="px-3 py-2 border w-full rounded-md"
                  name="message"
                  label="Message"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                class="px-6 py-2.5 w-full cursor-pointer rounded-lg transition duration-300 border text-lg bg-white border-white text-blue-600 font-semibold hover:bg-blue-300 hover:border-blue-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
