import React from "react";
import Image from "next/image";
import "./globals.css";

const page = () => {
  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/sam-logo.png"
              alt="my-logo"
              class=""
              height={"80"}
              width={"80"}
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="\"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/project"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="/Contact"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header>
        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="hidden sm:mt-32 sm:flex lg:mt-16"></div>
                <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                  Hi 👋, I'm Sam Zafar <br />A Passionate Frontend Developer
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Sam Zafar: Pakistan's Pioneering Frontend Developer. With a
                  passion for crafting digital brilliance, I transform ideas
                  into captivating web experiences. Let's code the future
                  together. 👨‍💻🚀
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/sam-zafar-resume.pdf"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    target="_blank"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
              <img
                className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                src="/pick.jpg"
                alt="coding lover"
                height={""}
                width={""}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="Hello">
        <div className="relative bg-white">
          <img
            className=" w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
            src="coding.jpg"
            alt="coding lover"
            height={""}
            width={""}
            loading="lazy"
          />
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  About Me
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  👋 Hello! I'm SAM ZAFAR, a passionate Front-End Developer with
                  a knack for crafting engaging and user-friendly web
                  experiences.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  ✅ HTML / CSS / Bootstrap/Tailwind CSS ( Semantic HTML, Grid
                  and Flexbox )
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  ✅ CSS Preprocessor ( SASS/SCSS )
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  ✅ JavaScript ( ECMAScript 6+ )
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  ✅ Widely used frameworks and libraries ( ReactJs,
                  Redux,Next.Js)
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  ✅ Version Control System ( GIT )
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  ✅ Cross-browser Development
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  ✅ Debugging ( Chrome Dev Tools, React Dev Tools, and others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="overflow-hidden bg-dark shadow sm:rounded-lg">
          <div class="px-4 py-6 sm:px-6 ">
            <h2 class="text-base font-semibold leading-7 text-white-900 ">
              Applicant Information
            </h2>
            <p class="text mt-4  text-sm leading-6 text-white-900">
              Personal details and application.
            </p>
          </div>
          <div class="border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-white-900">Full name</dt>
                <dd class="mt-1 text-sm leading-6 text-white-900 sm:col-span-2 sm:mt-0">
                  Sam Zafar
                </dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-white-900">
                  Application for
                </dt>
                <dd class="mt-1 text-sm leading-6 text-white-900 sm:col-span-2 sm:mt-0">
                  Front-End Developer
                </dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-white-900">
                  Email address
                </dt>
                <dd class="mt-1 text-sm leading-6 text-white-900 sm:col-span-2 sm:mt-0">
                  samzafar40@gmail.com
                </dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-white-900">
                  Salary expectation
                </dt>
                <dd class="mt-1 text-sm leading-6 text-white-900 sm:col-span-2 sm:mt-0">
                  $1,111
                </dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-white-900">About</dt>
                <dd class="mt-1 text-sm leading-6 text-white-900 sm:col-span-2 sm:mt-0">
                Sam Zafar: Pioneering Frontend Developer. With a passion for crafting digital brilliance, I transform ideas into captivating web experiences. Let's code the future together. 👨‍💻🚀
                </dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium leading-6 text-white-900">
                  Attachments
                </dt>
                <dd class="mt-2 text-sm text-white-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    class="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div class="flex w-0 flex-1 items-center">
                        <svg
                          class="h-5 w-5 flex-shrink-0 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <div class="ml-4 flex min-w-0 flex-1 gap-2">
                          <span class="truncate font-medium">
                            resume_front_end_developer.pdf
                          </span>
                          <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                        </div>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <a
                          href="/sam-zafar-resume.pdf"
                          class="font-medium text-indigo-600 hover:text-indigo-500"
                          target="_blank"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <footer>
        <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
          <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
              <Image
                src="/sam-logo.png"
                alt="my-logo"
                class=""
                height={"80"}
                width={"80"}
              />

              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/project"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    href="/Contact"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div class="mt-10 flex justify-center space-x-10">
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Facebook</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="/https://www.instagram.com/samzafar68/?next=%2F"
                class="text-gray-400 hover:text-gray-500"
                target="_blank"
              >
                <span class="sr-only">Instagram</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  />
                </svg>
              </a>
              <a
                href="/https://github.com/samzafar26"
                class="text-gray-400 hover:text-gray-500"
                target="_blank"
              >
                <span class="sr-only">GitHub</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 Sam Zafar . All Rights Reserved.
            </span>
          </div>
        </footer>
      </footer>
    </>
  );
};

export default page;
