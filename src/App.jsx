import logo from './logo.svg';
import styles from './App.module.css';
import NpmIcon from './NpmIcon';
import mountain from './assets/1620px-Beinn_Narnain,_Arrochar_Alps,_Scotland_09.jpeg';
import nodeLogo from './assets/nodeLogo.svg';

import {
  // ErrorBoundary,
  createEffect,
} from 'solid-js';

import NavBar from './components/NavBar';
import MachineLearningPlot from './components/MachineLearningPlot';
import PolarExponentialPlot from './components/PolarExponentialPlot';

const HEADER_SECOND_LEVEL = `
  sticky
  top-16
  pl-2
  z-10
`

const PAGE_BLOCK = `
bg-white
lg:pt-2
lg:mt-12
lg:my-2
lg:block
lg:mx-auto
lg:w-[42rem]
lg:drop-shadow-md
lg:shadow-md
lg:mb-12
`

const UL_FIRST_LEVEL = `
  mt-6
  ml-8
  space-y-4
  pb-2
`

const TRANSITION_IN_OUT = `
transition-colors
duration-500
ease-in-out`

const DEVELOPERS_LINK = `
text-blue-600
`

function App() {
  createEffect(() => {
    const skillsLists = document.querySelectorAll('.skills-list')
    const observ = new IntersectionObserver(entries => {
      entries.forEach(
        entry => [
          'lg:bg-transparent',
        ].forEach( cssClass => entry.target.style.backgroundColor = !entry.isIntersecting? 'transparent': '')
      // ``].forEach( cssClass => entry.target.classList.toggle(cssClass, !entry.isIntersecting) )
      )
      // console.log(entries)
    }, {
      // threshold: 
      rootMargin: '-200px'
    })
    skillsLists.forEach(skillsList => observ.observe(skillsList))
    
  });

  return (
    <div
      id="init" 
      // class={`min-h-full ${false && styles.App}`}
      class="
      bg-white border-gray-200 dark:bg-gray-900
      "
      // grid
      // style={{
      //   'grid-template-areas': `"header" "main"`,
      //   'grid-template-rows': '50px 1fr',
      //   'grid-template-columns': '1fr',
      // }}
    >
      <NavBar />
      <div
        style={{
          // 'grid-area': 'main',
          // 'word-wrap': 'break-word'
        }}
      >
        <figure
          class='
          relative
          top-[-2.5em]
          '
          // mt-[-2.5em]
        >
          <img
            class='w-screen'
            src={mountain}
          />
          <figcaption
            class='
            text-sm pl-2
            bg-[rgba(100,100,0,0.1)]
            shadow
            '
          >
            <span>
              Image by 
              <a
                href="https://commons.wikimedia.org/wiki/User:Podzemnik"
                title="User:Podzemnik">
                <span class='font-bold text-blue-600'>Michal Klajban</span>
              </a> - 
              <span class="int-own-work" lang="en">Beinn Narnain, Arrochar Alps, Scotland</span>, 
            </span>
            <span class='inline-block'>
              <a
                // about logo creative commons
                // https://creativecommons.org/about/downloads/
                href="https://creativecommons.org/licenses/by-sa/4.0"
                title="Creative Commons Attribution-Share Alike 4.0"
                class='break-keep overflow-hidden text-[#3c5c99]'
              >
                CC BY-SA 4.0
              </a>, 
              <a
                class='font-mono font-thin text-blue-600'
                href="https://commons.wikimedia.org/w/index.php?curid=75744056"
                >
                Image Link 🔗</a>
            </span>
          </figcaption>
        </figure>

        <div
          id="full-stack-developer"
          class="scroll-m-10"
        >
          <div id="front-end" class="scroll-m-10"></div>
          <h2 class="
            sticky
            top-10
            z-20
            pl-2
            bg-orange-200
          ">Full Stack Developer</h2>

          <div class={`
            skills-list
            lg:bg-blue-100/70
            flow-root
            ${TRANSITION_IN_OUT}
          `}
          >
            <h2 class={`
              ${HEADER_SECOND_LEVEL}
              bg-blue-100
            `}>Front End</h2>
            <div class={`${PAGE_BLOCK}`}>
              <ul class={`
                ${UL_FIRST_LEVEL}
              `}
                // lg:drop-shadow-md
              >
                <li>
                  <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
                    <img class="inline w-9 -ml-1 mr-1" src="https://www.w3.org/html/logo/downloads/HTML5_Logo.svg"/>
                    HTML
                  </a>
                </li>
                <li>
                  <a href='https://www.csszengarden.com/'>
                    <img class="inline w-7 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"/>
                    CSS
                  </a>
                </li>
                <li>
                  <a href='https://www.w3.org/XML/'>
                    XML
                  </a>
                </li>
                <li>
                  <a href='https://getbootstrap.com/'>
                    <span class=" text-[#7952b3] text-lg">Bootstrap</span>
                  </a>
                </li>
                <li>
                  {/* Tailwindcss */}
                  <a href='https://tailwindcss.com/'>
                    <svg viewBox="0 0 248 31" class="text-slate-900 dark:text-white w-auto h-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="currentColor"></path></svg>
                  </a>
                  <ul class="
                    my-4
                    ml-8
                    space-y-4
                    "
                  >
                    <li>
                      <a href='https://flowbite.com/'>
                        <img class="inline w-8 mr-2" src="https://flowbite.com/docs/images/logo.svg"/>
                        Flowbite
                      </a>
                    </li>
                    <li>
                      <a href='https://daisyui.com/'>
                        <span class="lowercase text-purple-700">daisy</span>
                        <span class="uppercase text-base-content">UI</span>
                      </a>
                    </li>
                  </ul>
                  {/*
                  Use Tailwind CSS but write fewer class names
                  using only utility classes vs using daisyUI component classes
                  https://daisyui.com

                  Build websites even faster with components on top of Tailwind CSS
                  https://flowbite.com/
                  */}
                </li>
                <li>
                  <a href='https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/'>
                    <img class="inline w-8 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg"/>
                    JavaScript / ES6
                  </a>
                </li>
                <li>
                  <a href='https://www.json.org'>
                    <img
                      class="inline mr-2 w-8 mr-3"
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg"
                    />
                    JSON
                  </a>
                </li>
                <li>
                  <a href='https://react.dev/'>
                    <svg class="inline text-sm mr-2 w-8 h-8 text-link dark:text-link-dark" width="100%" height="100%" viewBox="0 0 410 369" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M204.995 224.552C226.56 224.552 244.042 207.07 244.042 185.506C244.042 163.941 226.56 146.459 204.995 146.459C183.43 146.459 165.948 163.941 165.948 185.506C165.948 207.07 183.43 224.552 204.995 224.552Z" fill="#087ea4"></path>
                      <path d="M409.99 184.505C409.99 153.707 381.437 126.667 335.996 108.925C343.342 60.6535 334.19 22.3878 307.492 6.98883C283.649 -6.77511 250.631 -0.0395641 214.512 25.9753C211.316 28.2692 208.143 30.7097 204.97 33.2477C201.822 30.7097 198.65 28.2692 195.477 25.9753C159.359 -0.0395641 126.34 -6.79951 102.497 6.98883C75.8237 22.3878 66.6721 60.6291 74.0422 108.852C28.5529 126.618 0 153.682 0 184.505C0 215.303 28.5528 242.342 73.9934 260.084C66.6477 308.356 75.7993 346.621 102.497 362.02C110.575 366.682 119.727 369 129.684 369C149.085 369 171.61 360.215 195.477 343.034C198.674 340.74 201.847 338.3 205.019 335.762C208.167 338.3 211.34 340.74 214.512 343.034C238.38 360.239 260.905 369 280.306 369C290.263 369 299.415 366.682 307.492 362.02C331.335 348.256 342 316.287 337.534 271.993C337.143 268.089 336.631 264.135 335.996 260.109C381.461 242.367 409.99 215.327 409.99 184.505ZM225.934 41.8136C246.238 27.1955 265.127 19.5814 280.306 19.5814C286.871 19.5814 292.728 20.9968 297.731 23.8765C315.204 33.9798 322.672 62.9475 317.327 102.433C299.756 97.0401 280.306 92.9158 259.392 90.2802C246.872 73.8074 233.597 58.9453 220.003 46.2551C221.98 44.7421 223.957 43.229 225.934 41.8136ZM112.259 23.8765C117.262 20.9968 123.119 19.5814 129.684 19.5814C144.863 19.5814 163.752 27.1711 184.056 41.8136C186.033 43.229 188.01 44.7176 189.986 46.2551C176.393 58.9453 163.142 73.783 150.622 90.2558C129.732 92.8914 110.258 97.0401 92.687 102.409C87.3424 62.9475 94.7857 33.9798 112.259 23.8765ZM19.5233 184.505C19.5233 164.322 40.9014 143.359 77.776 128.253C81.9003 146.141 88.0502 165.054 96.1768 184.456C88.0014 203.881 81.8515 222.819 77.7272 240.732C40.9014 225.626 19.5233 204.687 19.5233 184.505ZM184.056 327.196C154.966 348.134 128.805 354.675 112.259 345.133C94.7857 335.029 87.3181 306.062 92.6626 266.576C110.234 271.969 129.684 276.093 150.598 278.729C163.117 295.202 176.393 310.064 189.986 322.754C188.01 324.292 186.033 325.78 184.056 327.196ZM204.995 310.04C180.591 287.685 157.138 257.815 137.347 223.551C132.051 214.4 121.344 191.396 117 182.489C113.535 190.786 110.112 198.398 107.427 206.5C109.623 210.575 118.092 229.213 120.434 233.288C125.071 241.317 129.928 249.127 134.931 256.692C120.898 254.227 107.915 251.055 96.1035 247.321C102.815 217.011 116.213 182.064 137.347 145.458C142.545 136.453 153.838 116.346 159.5 108C150.568 109.147 143.395 108.767 135 110.5C132.56 114.453 122.777 131.645 120.434 135.721C115.749 143.823 111.454 151.925 107.427 159.978C102.546 146.581 98.8124 133.744 96.1524 121.64C125.755 112.293 162.727 106.411 204.995 106.411C215.562 106.411 237.63 106.197 247.49 106.905C242.048 99.7544 237.38 93.2819 231.694 86.888C227.082 86.7416 209.705 86.888 204.995 86.888C195.672 86.888 186.545 87.2053 177.589 87.7422C186.472 77.1752 195.672 67.5111 204.995 58.9697C229.375 81.3239 252.851 111.195 272.643 145.458C277.841 154.463 289.073 175.426 293.49 184.505C296.98 176.207 300.281 168.64 302.99 160.489C300.793 156.389 291.898 139.747 289.555 135.696C284.918 127.667 280.062 119.858 275.059 112.317C289.092 114.782 302.075 117.954 313.886 121.688C307.175 151.998 293.777 186.945 272.643 223.551C267.445 232.556 252.651 253.178 246.99 261.524C255.922 260.377 265.595 258.663 273.99 256.93C276.43 252.976 287.212 237.364 289.555 233.288C294.216 225.235 298.512 217.182 302.489 209.153C307.224 222.185 310.982 234.997 313.715 247.394C284.138 256.741 247.214 262.598 204.995 262.598C194.428 262.598 169.859 261.208 160 260.5C165.442 267.65 171.304 275.095 176.99 281.489C181.602 281.635 200.285 282.121 204.995 282.121C214.317 282.121 223.444 281.804 232.401 281.267C223.493 291.834 214.317 301.498 204.995 310.04ZM297.731 345.133C281.185 354.699 254.999 348.159 225.934 327.196C223.957 325.78 221.98 324.292 220.003 322.754C233.597 310.064 246.848 295.226 259.367 278.753C280.233 276.118 299.659 271.993 317.205 266.625C317.547 269.089 317.888 271.554 318.132 273.97C321.72 309.649 314.277 335.566 297.731 345.133ZM332.262 240.756C328.065 222.599 321.842 203.686 313.813 184.578C321.988 165.152 328.138 146.215 332.262 128.302C369.088 143.408 390.466 164.322 390.466 184.505C390.466 204.687 369.113 225.626 332.262 240.756Z" fill="#087ea4"></path></svg>
                    React
                  </a>
                </li>
                <li>
                  <a href='https://www.solidjs.com/'>
                    <img
                      class="inline mr-2 h-8"
                      src="https://www.solidjs.com/img/logo/with-wordmark/logo.svg"
                    />
                    {/* SolidJS */}
                  </a>
                </li>
                <li>
                  <a href='https://redux.js.org/'>
                    <img
                      class="inline mr-2 h-8"
                      src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" 
                    />
                    Redux
                  </a>
                </li>
                <li>
                  <a href='https://graphql.org/'>
                    <img
                      class="inline mr-2 h-8"
                      src="https://graphql.org/img/logo.svg" alt="GraphQL Logo" 
                    />
                    GraphQL
                  </a>
                </li>
                <li>
                  <a href='https://storybook.js.org/'>
                  <svg
                    class="inline mr-2 h-8"
                    viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" class="css-1r6i2mo e1skfx026"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.64 15.831a8.784 8.784 0 0 1-2.464-.344c-.79-.229-1.445-.546-1.968-.952l.8-1.776c1.088.758 2.31 1.136 3.664 1.136.704 0 1.245-.114 1.624-.344.379-.229.568-.546.568-.952 0-.362-.173-.645-.52-.848-.347-.202-.963-.4-1.848-.592-.992-.202-1.784-.448-2.376-.736-.592-.288-1.024-.642-1.296-1.064-.272-.42-.408-.94-.408-1.56 0-.682.19-1.29.568-1.824.379-.533.91-.952 1.592-1.256.683-.304 1.472-.456 2.368-.456.8 0 1.57.118 2.312.352.741.235 1.33.55 1.768.944l-.8 1.776C29.189 6.578 28.101 6.2 26.96 6.2c-.65 0-1.163.126-1.536.376-.373.251-.56.595-.56 1.032 0 .256.072.467.216.632.144.166.384.312.72.44.336.128.813.262 1.432.4 1.45.32 2.493.731 3.128 1.232.635.502.952 1.195.952 2.08 0 1.067-.41 1.907-1.232 2.52-.821.614-1.968.92-3.44.92Zm10.464-1.792c.245 0 .502-.016.768-.048l-.128 1.76a6.78 6.78 0 0 1-.928.064c-1.195 0-2.067-.261-2.616-.784-.55-.522-.824-1.317-.824-2.384V9.64h-1.488V7.831h1.488V5.527h2.416v2.304h1.968V9.64h-1.968v2.992c0 .939.438 1.408 1.312 1.408Zm5.616 1.776c-.832 0-1.563-.168-2.192-.504a3.534 3.534 0 0 1-1.456-1.424c-.341-.613-.512-1.336-.512-2.168 0-.832.17-1.554.512-2.168a3.484 3.484 0 0 1 1.456-1.416c.63-.33 1.36-.496 2.192-.496.832 0 1.563.166 2.192.496.63.331 1.115.803 1.456 1.416.341.614.512 1.336.512 2.168 0 .832-.17 1.555-.512 2.168a3.534 3.534 0 0 1-1.456 1.424c-.63.336-1.36.504-2.192.504Zm0-1.84c1.173 0 1.76-.752 1.76-2.256 0-.757-.152-1.322-.456-1.696-.304-.373-.739-.56-1.304-.56-1.173 0-1.76.752-1.76 2.256 0 1.504.587 2.256 1.76 2.256Zm10.848-4.351-1.36.144c-.672.064-1.146.253-1.424.567-.277.315-.416.734-.416 1.256v4.097h-2.416V7.832h2.32V9.16c.395-.907 1.21-1.403 2.448-1.488l.704-.048.144 2Zm7.02-1.777h2.368l-4.736 10.72h-2.448l1.504-3.312-3.232-7.408h2.512l1.984 4.992 2.048-4.992Zm7.968-.208c.683 0 1.285.166 1.808.496.523.331.93.803 1.224 1.416.293.614.44 1.326.44 2.136 0 .811-.147 1.529-.44 2.152-.293.624-.704 1.11-1.232 1.457a3.207 3.207 0 0 1-1.8.52 3.121 3.121 0 0 1-1.472-.345 2.45 2.45 0 0 1-1.008-.951v1.168h-2.384V4.408h2.416v4.48a2.388 2.388 0 0 1 1-.92 3.16 3.16 0 0 1 1.448-.329Zm-.704 6.337c.566 0 1.003-.2 1.312-.6.31-.4.464-.963.464-1.688 0-.715-.154-1.262-.464-1.64-.31-.38-.746-.569-1.312-.569-.565 0-1.002.195-1.312.585-.31.389-.464.94-.464 1.655 0 .726.155 1.283.464 1.673.31.389.747.584 1.312.584Zm9.424 1.84c-.832 0-1.563-.169-2.192-.505a3.535 3.535 0 0 1-1.456-1.424c-.341-.613-.512-1.336-.512-2.168 0-.832.17-1.554.512-2.168a3.484 3.484 0 0 1 1.456-1.416c.63-.33 1.36-.496 2.192-.496.832 0 1.563.166 2.192.496.63.331 1.115.803 1.456 1.416.341.614.512 1.336.512 2.168 0 .832-.17 1.555-.512 2.168a3.535 3.535 0 0 1-1.456 1.424c-.63.336-1.36.504-2.192.504Zm0-1.84c1.174 0 1.76-.753 1.76-2.257 0-.757-.152-1.322-.456-1.696-.304-.373-.739-.56-1.304-.56-1.173 0-1.76.752-1.76 2.256 0 1.504.587 2.256 1.76 2.256Zm9.008 1.84c-.832 0-1.563-.169-2.192-.505a3.534 3.534 0 0 1-1.456-1.424c-.341-.613-.512-1.336-.512-2.168 0-.832.17-1.554.512-2.168a3.484 3.484 0 0 1 1.456-1.416c.63-.33 1.36-.496 2.192-.496.832 0 1.563.166 2.192.496.63.331 1.115.803 1.456 1.416.341.614.512 1.336.512 2.168 0 .832-.17 1.555-.512 2.168a3.534 3.534 0 0 1-1.456 1.424c-.63.336-1.36.504-2.192.504Zm0-1.84c1.173 0 1.76-.753 1.76-2.257 0-.757-.152-1.322-.456-1.696-.304-.373-.739-.56-1.304-.56-1.173 0-1.76.752-1.76 2.256 0 1.504.587 2.256 1.76 2.256ZM100 15.686h-2.96l-3.008-3.503v3.504h-2.416V4.408h2.416v6.783l2.896-3.344h2.88l-3.296 3.744L100 15.689Z" fill="#333"></path><path d="M.62 18.43 0 1.92A1.006 1.006 0 0 1 .944.88L14.984.002a1.005 1.005 0 0 1 1.069 1.004v17.989a1.006 1.006 0 0 1-1.051 1.004L1.58 19.396a1.006 1.006 0 0 1-.96-.967Z" fill="#FF4785"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m13.88.071-1.932.12-.094 2.267a.15.15 0 0 0 .24.126l.88-.668.744.586a.15.15 0 0 0 .243-.123l-.08-2.308Zm-1.504 7.59c-.353.275-2.989.462-2.989.071.056-1.493-.612-1.558-.984-1.558-.352 0-.946.106-.946.906 0 .815.868 1.275 1.887 1.815 1.447.767 3.2 1.696 3.2 4.032 0 2.24-1.82 3.476-4.14 3.476-2.395 0-4.488-.969-4.252-4.328.093-.394 3.138-.3 3.138 0-.038 1.386.278 1.794 1.076 1.794.613 0 .891-.338.891-.906 0-.861-.904-1.369-1.945-1.953-1.409-.791-3.067-1.722-3.067-3.859 0-2.132 1.466-3.554 4.084-3.554 2.618 0 4.047 1.4 4.047 4.064Z" fill="#fff"></path></svg>
                  </a>
                </li>
                <li>
                  <a href='https://pptr.dev/'>
                    <img class="h-8 inline mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADuElEQVR4Ae1UU6BkSwyszLk21rZt27Zt27Zt28b/e8vPtW2bfzvZZLO2OXXvuKsq3V0JPPDAg98RvvLwwveBt+l9HvxBVAoxI9YiMnQ2gGzfUIjwhB9FdGJErAGhpOrjI8gji9ejQYkHtHoA05yujDI5ryMieDqAzACcLzDOgoiQmSib6zrN7cq0agCjfvEHor8OQO73k/x81iBjUqZ+9Zh2TmE6vYxp/zymmZ0ZpXJcRXjQFAAZP1KIA/09PHgqSue4RrO6GF91VK+v6KZOwPDxXv0+DUd2ugjNyzLaVGRUzmeFbJ3IdEoE9s1lmt6RUSLbFYQGTQSQDoDrNeP0CAuahJLZr9CMTmI8V3nG71uXXaVysHe1QuxdMS9TcMBC476LJAgNHIaCGc9Qp2puamuFUO86TP+PN8G9c5imdmAUy3IJIYFjABQRzjgUz3qJpnWwQnWdru9V55VxrSJuJ3Py0xToPxRAYnwEBCAZggMGIX/6U9SxqpvaVbJCetY24ZNLmXbPYprU1o1aRR7TpHZu2j1bv7ffe9Qy4+piXFOMMyU7SQF+AwEkNf3PA0FPJMi/P/KmOy4n8gQtyjEyJ2Oa2Jbp+BKmE/I4ukhf7fOENkzpE7N35fy64ydOhqTHyN+3H2zHhG9Acvh6b1Zz1CnKtGGImR5brEeur1bA+sFMNQuzK3VChrfXJijvG+EDIC+ihy9C9YK3aGkfpsML5Y6XMm2Z8Oyo5Zr0avSzfX94AdPS3oxqBW4KT8OWx3S+fHLlRrSwhaic/zYt7sV0aIGFa5ukus/zVJfLzZRGdtukNMs6azP5XdbZ+kU9NTu3ETVsAYBcqvs5AySHEOahYt5btKAH08H51sfbJ0lb1mdLdUH2rlHY7aRPchQBfvOQJ+1R6lDFTS/at399W6884asOKuS5KUNoLoDs5vP+0PVAvGi3JNV6lK8GyIAG7CotxlXFuKYYZ0wqqdZwIaHxkEjDKtdxUrsGrStYIQMbGv+0nYiGF3Gj3QTQ/X2h9JbRuV52zqgtQdMihjQW45zsXaWAtVPmZKetnd6bausabd+CGU5TJymkVXm7mqFNtGXZVa0AOwUzMYUErnvfJCQE+PZEqRy3qbuFy6tgRvaWYpwsKc7KABnymX1sc0QHWqFMZ6lLdZZNqQb71CvOTq40t6Sjeti694cvF2JHWYD40W+54kQ9L9WOAJDiK/rYpTxEhoxEktjnKWbkLYoaNh9ATvX5nPbLCiCVCX0TXKajevDBB+CBBx548BRTFKrs8RE7XQAAAABJRU5ErkJggg=="  alt="" data-atf="1" data-frt="0"></img>
                    <span class="font-semibold ">Puppeteer</span>
                  </a>
                </li>
                <li>
                  <a href='https://jestjs.io/'>
                    <img class="h-8 inline mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADxElEQVR4Ae1XA7QcWRBd27a9e7C2bVuxbdu2bdu2bdvJ2E83VUn3fAXdSecwdc4dPdyqerfq9Vxy0dwYgDuMUnNkIrXoXKCknAfgnfNyQqXE1iObtmNZ7+GusGvBchitBYAbzzcL1UP7DyU7f/Q33GD7jIWKMjDai2N4moCheSs5Ju/+ZW5Q5iSA3zzRgkylNq7oNyoHUZeP/0HfX4rk+H1KzVac/iSA67wSY+XooaM5jmFa3XbYMHZ6zvTPWixJvMO8rIbHCBhesGoGEUUf2nswqZXS/X4vnjX9QkoAP9nrvTqGNasGjU0TTa3dBqxyLdS29SMn6/TvtVqDnIoDuMbrnlAudiyQtKMP7tmf1Fq3BvCzlkrZWtgxd4kkBwZeiKb0EMGMLFrDFpkAcC/hUi3E1jVDJ5juX+WBlpx+fHsuBNcQvifcebo5RspN22YuRGDXvhPRZ1r7lxJCrRo8lhwzAsBd7si1Lk9pDBva1RgjabNBAC7PRPC6TIktNAYQqMYNgC8yjd9OvytkmCGMcBr5XUy6uNtgsIInVGwMckZzNjLasZy8b8U6PeCvUmAcXLPJkCjHZ9qjKzu2oEM/9P6pMA6s2gDLHnUkrrg/mOKmYit52/QFmkmt8ftocz26RJ30+LhyDcHZsI3JfTv2ZJTiF7lhTRjixIHvWMW9fyyU3sC3bbekY2lpjV9FdR2c3bxbenx+295IhCLkSAOMLV0P0SM+JCPR9PiwAlVgWWUnDlyuhYz7d+4Fb7x74Qo7uiczzWkiYgm1ov9orCSkIjFkbs0zG3UEW/TwMeyYs4QbEXByj5ecOHAZQcR8ARYXNxEB4IPszwWEhEymcHTzDnA2WC+Z2++izgMRPerj8gRd33YQHRxdt2DJFqrGqeRV63OUnzHrCBhd0tbB2SFicRbyvLM7YMyu2DG/oUU5HOAKIawk8PE4JmcE9hwA2f6zRX8rjMGaoRPBiw6u3WzX8LeEugRFKTVLewx1RU6we8XCszlQjQC7Arp+9j84G7CMztIec4XtsxaB7azPg1aUWZ9mvsqLY9t2063Wxg0piTIPuJmF9h2CZV2dCLCi7YBb9P21KDaOnwkflS+VqLbKjtXv4+bmtA0XIaD/nyUcE89v1wfhA0eMRcZ2EMBcQnPCg25vwFsM2d6la85M/Mm/WDVoHKgPMDHX+jEAjT155gPQj4BNk2YzURZi7g2bJ83hO96OeJ0tLE8NwGgCESkT3HuQa5g7YvpQuZwIL1zov2EvEGYQ9hDnYQBjCb8TLrvEQ7toxwHV6dptdZACEwAAAABJRU5ErkJggg==" alt="" data-atf="1" data-frt="0"></img>
                    <span class="font-light">Jest</span>
                  </a>
                </li>
                <li>
                  <a href='https://d3js.org/'>
                    <img class="h-8 inline mr-2" src="https://raw.githubusercontent.com/d3/d3-logo/master/d3.svg" alt="d3js logo" data-atf="1" data-frt="0"></img>
                    <span class="font-light">D3Js</span>
                  </a>
                  <figure
                    class='
                    text-center
                    pb-8
                    '
                  >
                    <PolarExponentialPlot svgClass="mx-auto"/>

                    <figcaption>
                      <math display="inline" style={{'font-family': 'Libertinus Math'}}>
                        <mrow>
                          <mi>f</mi>
                          <mo stretchy="true">(</mo>
                          <mi>x</mi>
                          <mo stretchy="true">)</mo>
                          <mo>=</mo>
                          <msup>
                            <mi>e</mi>
                            <mn>x</mn>
                          </msup>
                        </mrow>
                      </math>
                      <span style={{'font-family': 'Libertinus Serif'}}>, represented in Polar Coordinates</span>
                      <span class="block">D3js graph, live example</span>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div>
          </div>
          <div id="back-end" class={`
            skills-list
            scroll-mt-16
            lg:bg-lime-50/70
            flow-root
            ${TRANSITION_IN_OUT}
            `}
            >
            <h2 class={`
              ${HEADER_SECOND_LEVEL}
            bg-lime-100
            `}
            >Back End</h2>
            <div class={`${PAGE_BLOCK}`}>
              <ul class={`
                ${UL_FIRST_LEVEL}
                pb-8
              `}
              >
                <li>
                  <a href='https://nodejs.org/'>
                    <img
                      class="inline mr-4 h-8"
                      src={nodeLogo} alt="NodeJs Logo" 
                    />
                    Node.js
                  </a>
                </li>
                <li>
                  <a href='https://deno.land/'>
                    <svg class="text-default h-8 inline" viewBox="0 0 30 30" fill="#12124b" xmlns="http://www.w3.org/2000/svg" aria-label="Deno Logo"><g clip-path="url(#clip0_29_599)"><path d="M15 0C23.2843 0 30 6.71572 30 15C30 23.2843 23.2843 30 15 30C6.71572 30 0 23.2843 0 15C0 6.71572 6.71572 0 15 0Z" fill="#12124b"></path><path d="M14.6635 22.3394C14.2788 22.2357 13.8831 22.4584 13.7705 22.8381L13.7655 22.8558L12.7694 26.5472L12.7649 26.565C12.6711 26.9498 12.9011 27.3414 13.2858 27.4451C13.6704 27.549 14.0661 27.3263 14.1787 26.9465L14.1837 26.9289L15.1797 23.2375L15.1843 23.2196C15.1911 23.1919 15.1962 23.164 15.1997 23.1362L15.2026 23.1084L15.179 22.9888L15.1445 22.8166L15.1227 22.7091C15.076 22.619 15.0111 22.5396 14.932 22.4759C14.853 22.4123 14.7615 22.3658 14.6635 22.3394ZM7.7224 18.5379C7.70424 18.5741 7.68883 18.6123 7.67658 18.6522L7.66967 18.6763L6.67358 22.3677L6.669 22.3856C6.57525 22.7704 6.80524 23.1619 7.1899 23.2657C7.57451 23.3695 7.97026 23.1469 8.08287 22.7671L8.08779 22.7494L8.99096 19.4023C8.51793 19.1518 8.09336 18.8628 7.7224 18.5379ZM5.34707 14.2929C4.9624 14.1891 4.56666 14.4117 4.4541 14.7915L4.44912 14.8092L3.45303 18.5006L3.44846 18.5184C3.35471 18.9032 3.58469 19.2947 3.96936 19.3985C4.35397 19.5023 4.74971 19.2797 4.86232 18.8999L4.86725 18.8822L5.86334 15.1908L5.86791 15.173C5.96166 14.7882 5.73174 14.3967 5.34707 14.2929ZM27.682 13.4546C27.2973 13.3508 26.9015 13.5734 26.789 13.9532L26.784 13.9709L25.7879 17.6623L25.7833 17.6801C25.6896 18.0649 25.9196 18.4564 26.3042 18.5602C26.6889 18.664 27.0846 18.4414 27.1972 18.0616L27.2021 18.0439L28.1982 14.3525L28.2028 14.3347C28.2965 13.9499 28.0666 13.5584 27.682 13.4546ZM3.17781 8.52527C2.34361 10.0444 1.81243 11.7112 1.61377 13.4329C1.7088 13.5412 1.83381 13.619 1.97301 13.6563C2.35768 13.7602 2.75342 13.5375 2.86598 13.1577L2.87096 13.1401L3.86705 9.44865L3.87162 9.43084C3.96537 9.04599 3.73539 8.65447 3.35072 8.5507C3.2943 8.53547 3.23623 8.52694 3.17781 8.52527ZM25.159 8.5507C24.7744 8.44687 24.3786 8.66953 24.266 9.04933L24.2611 9.06697L23.265 12.7584L23.2604 12.7762C23.1667 13.161 23.3966 13.5526 23.7813 13.6563C24.1659 13.7602 24.5617 13.5375 24.6743 13.1577L24.6792 13.1401L25.6753 9.44865L25.6799 9.43084C25.7736 9.04599 25.5436 8.65447 25.159 8.5507Z" fill="white"></path><path d="M7.51285 5.04065C7.12824 4.93682 6.73249 5.15948 6.61988 5.53929L6.61495 5.55692L5.61886 9.24833L5.61429 9.26614C5.52054 9.65098 5.75052 10.0425 6.13519 10.1463C6.5198 10.2501 6.91554 10.0274 7.02816 9.64764L7.03308 9.63001L8.02917 5.9386L8.03374 5.92079C8.12749 5.53595 7.89751 5.14442 7.51285 5.04065ZM20.3116 5.73845C19.9269 5.63462 19.5312 5.85727 19.4186 6.23708L19.4136 6.25471L18.7443 8.73499C19.1779 8.94915 19.5917 9.20126 19.9809 9.48839L20.0453 9.53643L20.8279 6.63639L20.8324 6.61858C20.9262 6.23374 20.6963 5.84221 20.3116 5.73845ZM13.7968 1.57642C13.3296 1.61771 12.8647 1.68338 12.4043 1.77317L12.3066 1.79263L11.3782 5.23419L11.3736 5.252C11.2799 5.63684 11.5099 6.02837 11.8945 6.13214C12.2792 6.23596 12.6749 6.01331 12.7875 5.6335L12.7924 5.61587L13.7885 1.92446L13.7931 1.90665C13.8196 1.79831 13.8209 1.68533 13.7968 1.57642ZM22.9626 4.1263L22.7669 4.85169L22.7623 4.86944C22.6686 5.25429 22.8986 5.64581 23.2832 5.74958C23.6678 5.85341 24.0636 5.63075 24.1762 5.25095L24.1811 5.23331L24.2025 5.15462C23.8362 4.81205 23.4511 4.49009 23.0491 4.19022L22.9626 4.1263ZM17.1672 1.69677L16.8139 3.00593L16.8094 3.02374C16.7156 3.40858 16.9456 3.80011 17.3303 3.90388C17.7149 4.0077 18.1106 3.78505 18.2233 3.40524L18.2282 3.38761L18.6 2.00966C18.1624 1.88867 17.719 1.79001 17.2714 1.71405L17.1672 1.69677Z" fill="white"></path><path d="M9.69085 24.6253C9.80341 24.2455 10.1992 24.0229 10.5838 24.1266C10.9685 24.2303 11.1984 24.6219 11.1047 25.0068L11.1001 25.0246L10.3872 27.6664L10.2876 27.6297C9.85836 27.4694 9.43765 27.2873 9.0271 27.0839L9.68587 24.6429L9.69085 24.6253Z" fill="white"></path><path d="M14.4141 8.49082C10.0522 8.49082 6.65918 11.2368 6.65918 14.6517C6.65918 17.8769 9.78123 19.9362 14.6211 19.8331C15.0327 19.8243 15.1517 20.1008 15.2856 20.4734C15.4196 20.846 15.7796 22.8097 16.0665 24.3117C16.3233 25.656 16.5842 27.0052 16.7834 28.3596C19.9439 27.9418 22.8663 26.3807 25.0076 24.0261L22.7237 15.5088C22.1544 13.4518 21.489 11.5564 19.7283 10.1794C18.3118 9.07166 16.5122 8.49082 14.4141 8.49082Z" fill="white"></path><path d="M15.3516 10.957C15.8694 10.957 16.2891 11.3767 16.2891 11.8945C16.2891 12.4123 15.8694 12.832 15.3516 12.832C14.8338 12.832 14.4141 12.4123 14.4141 11.8945C14.4141 11.3767 14.8338 10.957 15.3516 10.957Z" fill="currentColor"></path></g><defs><clipPath id="clip0_29_599"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
                    <svg class="text-default h-4 ml-3 inline" viewBox="0 0 111 28" fill="#12124b" xmlns="http://www.w3.org/2000/svg" aria-label="Deno Wordmark"><g clip-path="url(#clip0_737_591)"><path d="M0 27.522V0H13.4572C16.6331 0 19.3553 0.510417 21.6076 1.52315C23.8681 2.53588 25.5937 4.06713 26.7928 6.1088C27.9919 8.15046 28.5995 10.6944 28.5995 13.7407C28.5995 16.787 28 19.331 26.7928 21.3727C25.5856 23.4144 23.86 24.9537 21.6076 25.9826C19.3472 27.0116 16.6331 27.522 13.4572 27.522H0ZM7.64815 21.6725H13.1736C14.3484 21.6725 15.4016 21.5104 16.3414 21.1944C17.2731 20.8704 18.0671 20.4086 18.7234 19.7928C19.3796 19.1771 19.8738 18.4155 20.206 17.5081C20.5382 16.6007 20.7083 15.5718 20.7083 14.4213V13.1007C20.7083 11.9259 20.5382 10.8889 20.206 9.99768C19.8738 9.10648 19.3796 8.34491 18.7234 7.71296C18.0671 7.08912 17.2731 6.61111 16.3414 6.28704C15.4097 5.96296 14.3484 5.80903 13.1736 5.80903H7.64815V21.6725Z" fill="#12124b"></path><path d="M43.9849 28C41.3437 28 39.0671 27.603 37.1551 26.8171C35.2431 26.0312 33.7766 24.8241 32.7477 23.1875C31.7187 21.559 31.2083 19.4769 31.2083 16.941C31.2083 14.4051 31.7187 12.4039 32.7315 10.7674C33.7442 9.13889 35.1863 7.92361 37.0579 7.12153C38.9294 6.31945 41.1412 5.92245 43.7095 5.92245C46.2778 5.92245 48.5544 6.31134 50.4016 7.08102C52.2407 7.8588 53.6505 9.04167 54.6065 10.6458C55.5706 12.25 56.0486 14.2917 56.0486 16.7789V18.3426H38.3785C38.4352 19.4606 38.662 20.4005 39.0833 21.1458C39.4965 21.8912 40.1204 22.4583 40.9468 22.831C41.7731 23.2037 42.8021 23.39 44.0336 23.39C44.7303 23.39 45.3704 23.309 45.9537 23.147C46.537 22.985 47.0637 22.7581 47.5174 22.4664C47.9711 22.1748 48.3275 21.8264 48.5787 21.4213C48.8299 21.0243 48.9757 20.5544 49 20.0197H55.9676C55.9676 21.2755 55.684 22.3935 55.125 23.3819C54.566 24.3704 53.7558 25.2049 52.7025 25.8854C51.6493 26.566 50.3854 27.0845 48.919 27.4491C47.4525 27.8056 45.8079 27.9919 43.993 27.9919L43.9849 28ZM38.419 14.5752H48.7164C48.7164 13.9109 48.603 13.3275 48.3762 12.8333C48.1493 12.3391 47.8252 11.9178 47.3958 11.5694C46.9664 11.2211 46.4641 10.9618 45.8727 10.7917C45.2812 10.6215 44.6412 10.5324 43.9525 10.5324C42.8345 10.5324 41.8785 10.6944 41.1088 11.0104C40.331 11.3345 39.7234 11.7882 39.2859 12.3958C38.8484 12.9954 38.5567 13.7245 38.4271 14.5752H38.419Z" fill="#12124b"></path><path d="M59.5162 27.522V6.40857H65.2037L65.6817 9.65741H66.0058C66.6458 8.80671 67.3912 8.10185 68.2257 7.55093C69.0683 7 69.9838 6.59491 70.9722 6.32755C71.9606 6.06019 72.9734 5.93056 74.0185 5.93056C75.809 5.93056 77.3079 6.23033 78.5231 6.82986C79.7384 7.4294 80.662 8.33681 81.2859 9.55208C81.9097 10.7674 82.2257 12.3067 82.2257 14.1782V27.522H75.2176V15.1424C75.2176 14.5023 75.1285 13.9352 74.9583 13.441C74.7882 12.9468 74.537 12.5417 74.2211 12.2176C73.897 11.8935 73.4919 11.6586 72.9977 11.4965C72.5035 11.3345 71.9526 11.2535 71.3368 11.2535C70.4294 11.2535 69.6111 11.456 68.8738 11.853C68.1366 12.25 67.5613 12.7928 67.1319 13.4734C66.7025 14.1539 66.4919 14.9317 66.4919 15.8148V27.5139H59.5243L59.5162 27.522Z" fill="#12124b"></path><path d="M97.7974 28C95.2049 28 92.9687 27.5949 91.0891 26.7766C89.2095 25.9583 87.7593 24.7431 86.7384 23.1146C85.7257 21.4861 85.2153 19.4282 85.2153 16.941C85.2153 14.4537 85.7257 12.4039 86.7384 10.7674C87.7511 9.13889 89.2014 7.92361 91.0891 7.12153C92.9687 6.31945 95.2049 5.92245 97.7974 5.92245C100.39 5.92245 102.626 6.31945 104.506 7.12153C106.385 7.92361 107.836 9.13889 108.856 10.7674C109.869 12.3958 110.38 14.4537 110.38 16.941C110.38 19.4282 109.869 21.478 108.856 23.1146C107.844 24.7431 106.394 25.9664 104.506 26.7766C102.626 27.5949 100.382 28 97.7974 28ZM97.7974 23.1146C99.0289 23.1146 100.05 22.8877 100.86 22.434C101.678 21.9803 102.278 21.3403 102.667 20.5139C103.056 19.6875 103.25 18.6991 103.25 17.5486V16.39C103.25 15.2396 103.056 14.2431 102.667 13.4086C102.278 12.566 101.678 11.9259 100.86 11.4884C100.042 11.0509 99.0208 10.8241 97.7974 10.8241C96.5741 10.8241 95.5127 11.0428 94.7106 11.4884C93.9086 11.9259 93.3171 12.566 92.9282 13.4086C92.5393 14.2512 92.3449 15.2477 92.3449 16.39V17.5486C92.3449 18.6991 92.5393 19.6875 92.9282 20.5139C93.3171 21.3403 93.9086 21.9803 94.7106 22.434C95.5127 22.8877 96.5417 23.1146 97.7974 23.1146Z" fill="#12124b"></path></g><defs><clipPath id="clip0_737_591"><rect width="110.38" height="28" fill="white"></rect></clipPath></defs></svg>
                    {/* deno.js */}
                  </a>
                </li>
                <li>
                  <a href='https://bun.sh/'>
                    <img
                      class="inline mr-4 h-8"
                      src='data:image/svg+xml;base64,PHN2ZyBpZD0iQnVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA3MCI+PHRpdGxlPkJ1biBMb2dvPC90aXRsZT48cGF0aCBpZD0iU2hhZG93IiBkPSJNNzEuMDksMjAuNzRjLS4xNi0uMTctLjMzLS4zNC0uNS0uNXMtLjMzLS4zNC0uNS0uNS0uMzMtLjM0LS41LS41LS4zMy0uMzQtLjUtLjUtLjMzLS4zNC0uNS0uNS0uMzMtLjM0LS41LS41LS4zMy0uMzQtLjUtLjVBMjYuNDYsMjYuNDYsMCwwLDEsNzUuNSwzNS43YzAsMTYuNTctMTYuODIsMzAuMDUtMzcuNSwzMC4wNS0xMS41OCwwLTIxLjk0LTQuMjMtMjguODMtMTAuODZsLjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNUMxOS41NSw2NS4zLDMwLjE0LDY5Ljc1LDQyLDY5Ljc1YzIwLjY4LDAsMzcuNS0xMy40OCwzNy41LTMwQzc5LjUsMzIuNjksNzYuNDYsMjYsNzEuMDksMjAuNzRaIi8+PGcgaWQ9IkJvZHkiPjxwYXRoIGlkPSJCYWNrZ3JvdW5kIiBkPSJNNzMsMzUuN2MwLDE1LjIxLTE1LjY3LDI3LjU0LTM1LDI3LjU0UzMsNTAuOTEsMywzNS43QzMsMjYuMjcsOSwxNy45NCwxOC4yMiwxM1MzMy4xOCwzLDM4LDNzOC45NCw0LjEzLDE5Ljc4LDEwQzY3LDE3Ljk0LDczLDI2LjI3LDczLDM1LjdaIiBzdHlsZT0iZmlsbDojZmJmMGRmIi8+PHBhdGggaWQ9IkJvdHRvbV9TaGFkb3ciIGRhdGEtbmFtZT0iQm90dG9tIFNoYWRvdyIgZD0iTTczLDM1LjdhMjEuNjcsMjEuNjcsMCwwLDAtLjgtNS43OGMtMi43MywzMy4zLTQzLjM1LDM0LjktNTkuMzIsMjQuOTRBNDAsNDAsMCwwLDAsMzgsNjMuMjRDNTcuMyw2My4yNCw3Myw1MC44OSw3MywzNS43WiIgc3R5bGU9ImZpbGw6I2Y2ZGVjZSIvPjxwYXRoIGlkPSJMaWdodF9TaGluZSIgZGF0YS1uYW1lPSJMaWdodCBTaGluZSIgZD0iTTI0LjUzLDExLjE3QzI5LDguNDksMzQuOTQsMy40Niw0MC43OCwzLjQ1QTkuMjksOS4yOSwwLDAsMCwzOCwzYy0yLjQyLDAtNSwxLjI1LTguMjUsMy4xMy0xLjEzLjY2LTIuMywxLjM5LTMuNTQsMi4xNS0yLjMzLDEuNDQtNSwzLjA3LTgsNC43QzguNjksMTguMTMsMywyNi42MiwzLDM1LjdjMCwuNCwwLC44LDAsMS4xOUM5LjA2LDE1LjQ4LDIwLjA3LDEzLjg1LDI0LjUzLDExLjE3WiIgc3R5bGU9ImZpbGw6I2ZmZmVmYyIvPjxwYXRoIGlkPSJUb3AiIGQ9Ik0zNS4xMiw1LjUzQTE2LjQxLDE2LjQxLDAsMCwxLDI5LjQ5LDE4Yy0uMjguMjUtLjA2LjczLjMuNTksMy4zNy0xLjMxLDcuOTItNS4yMyw2LTEzLjE0QzM1LjcxLDUsMzUuMTIsNS4xMiwzNS4xMiw1LjUzWm0yLjI3LDBBMTYuMjQsMTYuMjQsMCwwLDEsMzksMTljLS4xMi4zNS4zMS42NS41NS4zNkM0MS43NCwxNi41Niw0My42NSwxMSwzNy45Myw1LDM3LjY0LDQuNzQsMzcuMTksNS4xNCwzNy4zOSw1LjQ5Wm0yLjc2LS4xN0ExNi40MiwxNi40MiwwLDAsMSw0NywxNy4xMmEuMzMuMzMsMCwwLDAsLjY1LjExYy45Mi0zLjQ5LjQtOS40NC03LjE3LTEyLjUzQzQwLjA4LDQuNTQsMzkuODIsNS4wOCw0MC4xNSw1LjMyWk0yMS42OSwxNS43NmExNi45NCwxNi45NCwwLDAsMCwxMC40Ny05Yy4xOC0uMzYuNzUtLjIyLjY2LjE4LTEuNzMsOC03LjUyLDkuNjctMTEuMTIsOS40NUMyMS4zMiwxNi40LDIxLjMzLDE1Ljg3LDIxLjY5LDE1Ljc2WiIgc3R5bGU9ImZpbGw6I2NjYmVhNztmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGlkPSJPdXRsaW5lIiBkPSJNMzgsNjUuNzVDMTcuMzIsNjUuNzUuNSw1Mi4yNy41LDM1LjdjMC0xMCw2LjE4LTE5LjMzLDE2LjUzLTI0LjkyLDMtMS42LDUuNTctMy4yMSw3Ljg2LTQuNjIsMS4yNi0uNzgsMi40NS0xLjUxLDMuNi0yLjE5QzMyLDEuODksMzUsLjUsMzgsLjVzNS42MiwxLjIsOC45LDMuMTRjMSwuNTcsMiwxLjE5LDMuMDcsMS44NywyLjQ5LDEuNTQsNS4zLDMuMjgsOSw1LjI3QzY5LjMyLDE2LjM3LDc1LjUsMjUuNjksNzUuNSwzNS43LDc1LjUsNTIuMjcsNTguNjgsNjUuNzUsMzgsNjUuNzVaTTM4LDNjLTIuNDIsMC01LDEuMjUtOC4yNSwzLjEzLTEuMTMuNjYtMi4zLDEuMzktMy41NCwyLjE1LTIuMzMsMS40NC01LDMuMDctOCw0LjdDOC42OSwxOC4xMywzLDI2LjYyLDMsMzUuNywzLDUwLjg5LDE4LjcsNjMuMjUsMzgsNjMuMjVTNzMsNTAuODksNzMsMzUuN0M3MywyNi42Miw2Ny4zMSwxOC4xMyw1Ny43OCwxMyw1NCwxMSw1MS4wNSw5LjEyLDQ4LjY2LDcuNjRjLTEuMDktLjY3LTIuMDktMS4yOS0zLTEuODRDNDIuNjMsNCw0MC40MiwzLDM4LDNaIi8+PC9nPjxnIGlkPSJNb3V0aCI+PGcgaWQ9IkJhY2tncm91bmQtMiIgZGF0YS1uYW1lPSJCYWNrZ3JvdW5kIj48cGF0aCBkPSJNNDUuMDUsNDNhOC45Myw4LjkzLDAsMCwxLTIuOTIsNC43MSw2LjgxLDYuODEsMCwwLDEtNCwxLjg4QTYuODQsNi44NCwwLDAsMSwzNCw0Ny43MSw4LjkzLDguOTMsMCwwLDEsMzEuMTIsNDNhLjcyLjcyLDAsMCwxLC44LS44MUg0NC4yNkEuNzIuNzIsMCwwLDEsNDUuMDUsNDNaIiBzdHlsZT0iZmlsbDojYjcxNDIyIi8+PC9nPjxnIGlkPSJUb25ndWUiPjxwYXRoIGlkPSJCYWNrZ3JvdW5kLTMiIGRhdGEtbmFtZT0iQmFja2dyb3VuZCIgZD0iTTM0LDQ3Ljc5YTYuOTEsNi45MSwwLDAsMCw0LjEyLDEuOSw2LjkxLDYuOTEsMCwwLDAsNC4xMS0xLjksMTAuNjMsMTAuNjMsMCwwLDAsMS0xLjA3LDYuODMsNi44MywwLDAsMC00LjktMi4zMSw2LjE1LDYuMTUsMCwwLDAtNSwyLjc4QzMzLjU2LDQ3LjQsMzMuNzYsNDcuNiwzNCw0Ny43OVoiIHN0eWxlPSJmaWxsOiNmZjYxNjQiLz48cGF0aCBpZD0iT3V0bGluZS0yIiBkYXRhLW5hbWU9Ik91dGxpbmUiIGQ9Ik0zNC4xNiw0N2E1LjM2LDUuMzYsMCwwLDEsNC4xOS0yLjA4LDYsNiwwLDAsMSw0LDEuNjljLjIzLS4yNS40NS0uNTEuNjYtLjc3YTcsNywwLDAsMC00LjcxLTEuOTMsNi4zNiw2LjM2LDAsMCwwLTQuODksMi4zNkE5LjUzLDkuNTMsMCwwLDAsMzQuMTYsNDdaIi8+PC9nPjxwYXRoIGlkPSJPdXRsaW5lLTMiIGRhdGEtbmFtZT0iT3V0bGluZSIgZD0iTTM4LjA5LDUwLjE5YTcuNDIsNy40MiwwLDAsMS00LjQ1LTIsOS41Miw5LjUyLDAsMCwxLTMuMTEtNS4wNSwxLjIsMS4yLDAsMCwxLC4yNi0xLDEuNDEsMS40MSwwLDAsMSwxLjEzLS41MUg0NC4yNmExLjQ0LDEuNDQsMCwwLDEsMS4xMy41MSwxLjE5LDEuMTksMCwwLDEsLjI1LDFoMGE5LjUyLDkuNTIsMCwwLDEtMy4xMSw1LjA1QTcuNDIsNy40MiwwLDAsMSwzOC4wOSw1MC4xOVptLTYuMTctNy40Yy0uMTYsMC0uMi4wNy0uMjEuMDlhOC4yOSw4LjI5LDAsMCwwLDIuNzMsNC4zN0E2LjIzLDYuMjMsMCwwLDAsMzguMDksNDlhNi4yOCw2LjI4LDAsMCwwLDMuNjUtMS43Myw4LjMsOC4zLDAsMCwwLDIuNzItNC4zNy4yMS4yMSwwLDAsMC0uMi0uMDlaIi8+PC9nPjxnIGlkPSJGYWNlIj48ZWxsaXBzZSBpZD0iUmlnaHRfQmx1c2giIGRhdGEtbmFtZT0iUmlnaHQgQmx1c2giIGN4PSI1My4yMiIgY3k9IjQwLjE4IiByeD0iNS44NSIgcnk9IjMuNDQiIHN0eWxlPSJmaWxsOiNmZWJiZDAiLz48ZWxsaXBzZSBpZD0iTGVmdF9CbHVjaCIgZGF0YS1uYW1lPSJMZWZ0IEJsdWNoIiBjeD0iMjIuOTUiIGN5PSI0MC4xOCIgcng9IjUuODUiIHJ5PSIzLjQ0IiBzdHlsZT0iZmlsbDojZmViYmQwIi8+PHBhdGggaWQ9IkV5ZXMiIGQ9Ik0yNS43LDM4LjhhNS41MSw1LjUxLDAsMSwwLTUuNS01LjUxQTUuNTEsNS41MSwwLDAsMCwyNS43LDM4LjhabTI0Ljc3LDBBNS41MSw1LjUxLDAsMSwwLDQ1LDMzLjI5LDUuNSw1LjUsMCwwLDAsNTAuNDcsMzguOFoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGlkPSJJcmlzIiBkPSJNMjQsMzMuNjRhMi4wNywyLjA3LDAsMSwwLTIuMDYtMi4wN0EyLjA3LDIuMDcsMCwwLDAsMjQsMzMuNjRabTI0Ljc3LDBhMi4wNywyLjA3LDAsMSwwLTIuMDYtMi4wN0EyLjA3LDIuMDcsMCwwLDAsNDguNzUsMzMuNjRaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkIi8+PC9nPjwvc3ZnPg==' alt="Bun Logo" 
                    />
                    Bun, extends JavaScriptCore, the performance-minded JS engine
                  </a>
                </li>
                <li>
                  <a href='https://expressjs.com/'>
                  Express.js
                  </a>
                </li>
                <li>
                  <a href='https://developer.mozilla.org/en-US/docs/Glossary/REST'>
                  REST
                  </a>
                </li>
                <li>
                  <a href='https://www.mongodb.com/'>
                    <img
                      class="inline mr-4 h-8"
                      src='https://www.mongodb.com/blog/assets/default-avatar.svg' alt="MongoDB Logo" 
                    />
                    MongoDB
                  </a>
                </li>
                <li>
                  <a href='https://www.postgresql.org/'>
                    <img
                      class="inline mr-4 h-8"
                      src='https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg' alt="Postgresql Logo" 
                    />
                    Postgres
                  </a>
                </li>
              {
                [
                  // 'Postgres',
                ].map((tecnology) => <li key={tecnology}>{tecnology}</li>)
              }
              </ul>
            </div>
          </div>

          <div id="platforms" class={`
            skills-list
            scroll-mt-16
            lg:bg-yellow-100/50
            flow-root
            ${TRANSITION_IN_OUT}
          `}
          >
            <h2 class={`
              ${HEADER_SECOND_LEVEL}
              bg-yellow-100
            `}
            >Platforms</h2>
            <div class={`${PAGE_BLOCK} lg:mb-12`}>
              <ul class={`
                ${UL_FIRST_LEVEL}
                pb-8
              `}
              >
                <li >
                  <a href='https://stripe.com'>
                    <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" class="UserLogo variant-- "><title>Stripe logo</title><path fill="var(--userLogoColor, #0A2540)" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fill-rule="evenodd"></path></svg>
                  </a>
                  <span>Technology company that builds economic infrastructure for the internet</span>
                </li>
                
                <li>
                  <span class='text-xl'>Serverless computing</span>
                  <ul class="
                    my-4
                    ml-6
                    space-y-4
                    "
                  >
                    <li>
                      <a href='https://workers.cloudflare.com/'>
                        <svg class="h-8" viewBox="0 0 1430 375"><title>Cloudflare Workers logo (horizontal combination mark)</title><defs><linearGradient id="CloudflareWorkersLogoCombinationMarkHorizontal--gradient-a" x1="50%" x2="25.7%" y1="100%" y2="8.7%"><stop offset="0%" stop-color="#eb6f07"></stop><stop offset="100%" stop-color="#fab743"></stop></linearGradient><linearGradient id="CloudflareWorkersLogoCombinationMarkHorizontal--gradient-b" x1="81%" x2="40.5%" y1="83.7%" y2="29.5%"><stop offset="0%" stop-color="#d96504"></stop><stop offset="100%" stop-color="#d96504" stop-opacity="0"></stop></linearGradient><linearGradient id="CloudflareWorkersLogoCombinationMarkHorizontal--gradient-c" x1="42%" x2="84%" y1="8.7%" y2="79.9%"><stop offset="0%" stop-color="#eb6f07"></stop><stop offset="100%" stop-color="#eb720a" stop-opacity="0"></stop></linearGradient><linearGradient id="CloudflareWorkersLogoCombinationMarkHorizontal--gradient-d" x1="50%" x2="25.7%" y1="100%" y2="8.7%"><stop offset="0%" stop-color="#ee6f05"></stop><stop offset="100%" stop-color="#fab743"></stop></linearGradient><linearGradient id="CloudflareWorkersLogoCombinationMarkHorizontal--gradient-e" x1="-33.2%" x2="91.7%" y1="100%" y2="0%"><stop offset="0%" stop-color="#d96504" stop-opacity=".8"></stop><stop offset="49.8%" stop-color="#d96504" stop-opacity=".2"></stop><stop offset="100%" stop-color="#d96504" stop-opacity="0"></stop></linearGradient><linearGradient id="CloudflareWorkersLogoCombinationMarkHorizontal--gradient-f" x1="50%" x2="25.7%" y1="100%" y2="8.7%"><stop offset="0%" stop-color="#ffa95f"></stop><stop offset="100%" stop-color="#ffebc8"></stop></linearGradient><linearGradient id="CloudflareWorkersLogoCombinationMarkHorizontal--gradient-g" x1="8.1%" x2="96.5%" y1="1.1%" y2="48.8%"><stop offset="0%" stop-color="#fff" stop-opacity=".5"></stop><stop offset="100%" stop-color="#fff" stop-opacity=".1"></stop></linearGradient><linearGradient id="CloudflareWorkersLogoCombinationMarkHorizontal--gradient-h" x1="-13.7%" y1="104.2%" y2="46.2%"><stop offset="0%" stop-color="#fff" stop-opacity=".5"></stop><stop offset="100%" stop-color="#fff" stop-opacity=".1"></stop></linearGradient></defs><path class="CloudflareWorkersLogoCombinationMark--workers-wordmark" fill="#232324" d="M553.2 320.1L500.6 165h36.3l31.9 104.3 34.5-104.7h29L667 269.3 699 165h35.3l-52.5 155.1h-29.5l-34.8-100.8-34.7 100.8h-29.5zm246.2 1.5c-36.6 0-63.6-27-63.6-60.9v-.4c0-34 27.3-61.4 64-61.4 36.5 0 63.6 27 63.6 61v.4c0 33.8-27.3 61.3-64 61.3zm.4-28.8c19.1 0 30.6-14.7 30.6-32.1v-.4c0-17.4-12.6-32.6-31-32.6-19.2 0-30.6 14.7-30.6 32.1v.5c0 17.3 12.5 32.5 31 32.5zm87.8 26.2V201H921v23.8c6.8-16.2 17.8-26.8 37.6-26v35H957c-22.2 0-35.9 13.5-35.9 41.6V319h-33.4zm92 0V158.4h33.4V244l39.1-43h40l-44.8 46.5 46.4 71.5h-38.3l-30.8-48.2-11.6 12.3V319h-33.5zm180.6 2.6c-35.5 0-61.6-24.8-61.6-60.9v-.4c0-33.7 24-61.4 58.3-61.4 39.3 0 57.4 30.6 57.4 64 0 2.6-.2 5.7-.5 8.8h-82c3.3 15.2 13.8 23.1 28.8 23.1 11.2 0 19.4-3.5 28.6-12.1l19.1 17a59 59 0 0 1-48.1 22zm-28.9-70.8h50.4c-2-15-10.8-25-24.8-25-13.9 0-23 9.8-25.6 25zm107.8 68.2V201h33.5v23.8c6.8-16.2 17.8-26.8 37.6-26v35h-1.8c-22.2 0-35.8 13.5-35.8 41.6V319H1239zm133.4 2.2c-16.5 0-35-5.5-50.6-17.8l14.3-22a66.7 66.7 0 0 0 37.1 14c9.7 0 14.1-3.5 14.1-8.7v-.5c0-7.2-11.4-9.7-24.4-13.6-16.5-4.9-35.2-12.6-35.2-35.4v-.5c0-24 19.4-37.4 43.1-37.4 15 0 31.3 5 44 13.7l-12.7 23a69.9 69.9 0 0 0-32-11c-8 0-12.3 3.6-12.3 8.2v.4c0 6.6 11.3 9.7 24 14.1 16.5 5.5 35.7 13.4 35.7 35v.4c0 26.2-19.6 38.1-45.1 38.1z"></path><path class="CloudflareWorkersLogoCombinationMark--cloudflare-wordmark" fill="#656566" fill-rule="nonzero" d="M1210.9 78.9a6 6 0 1 1 0-12.1c3.3 0 6.1 2.7 6.1 6s-2.8 6-6.1 6zm0-11a4.9 4.9 0 0 0-4.9 5c0 2.6 2.2 4.8 4.9 4.8s4.9-2.2 4.9-4.9c0-2.6-2.2-4.8-4.9-4.8zm3.1 8.1h-1.4l-1.2-2.3h-1.6V76h-1.3v-6.6h3.2c1.4 0 2.3.9 2.3 2.1a2 2 0 0 1-1.4 2l1.4 2.5zm-2.4-3.5c.5 0 1-.3 1-1s-.4-1-1-1h-2v2h2zm-636.5-6.3h15.6v42.1H618v13.5H575V66.2zm58.9 28V94c0-16 13-29 30.3-29a29 29 0 0 1 30 28.8v.2c0 16-13 28.9-30.2 28.9A29 29 0 0 1 634 94.1zm44.6 0V94c0-8-5.8-15-14.4-15-8.5 0-14.2 6.8-14.2 14.9v.1c0 8 5.8 15 14.3 15 8.6 0 14.3-6.8 14.3-14.9zm34.9 3.2V66.2h15.8v31c0 8 4.1 11.7 10.3 11.7 6.2 0 10.3-3.6 10.3-11.4V66.2h15.8V97c0 18-10.3 25.8-26.3 25.8s-26-8-26-25.4zm76-31.2h21.6c20 0 31.7 11.4 31.7 27.5v.2c0 16-11.8 28-32 28h-21.3V66.1zm22 42c9.2 0 15.4-5.1 15.4-14.2V94c0-9-6.2-14.1-15.5-14.1h-6.3V108h6.3v.1zm54-42h44.9v13.5H881v9.5h26.6V102H881v19.8h-15.5V66.2zm66.5 0h15.5v42.1h27.2v13.5H932V66.2zm83.3-.4h15l24 56h-16.8l-4-9.9h-21.7l-4 10h-16.3l23.8-56.1zm13.7 34.1l-6.2-15.8-6.3 15.8h12.5zm45.2-33.7h26.6c8.6 0 14.5 2.2 18.3 6 3.3 3.2 5 7.5 5 13v.2c0 8.6-4.6 14.2-11.5 17L1126 122h-18l-11.4-16.8h-6.8v16.8h-15.6V66.2zm25.9 26.7c5.3 0 8.3-2.6 8.3-6.6v-.2c0-4.3-3.2-6.5-8.4-6.5h-10.3v13.3h10.4zm46.4-26.7h45v13H1162v8.5h26.9v12.2h-27v8.8h30.2v13.1h-45.5V66.2zM541 100.7a13.8 13.8 0 0 1-12.8 8.3c-8.5 0-14.3-7-14.3-15V94c0-8 5.7-15 14.2-15a14 14 0 0 1 13.3 9.3H558a29.2 29.2 0 0 0-29.6-23.1c-17.3 0-30.3 13-30.3 29v.1a29 29 0 0 0 30.1 28.8c14.8 0 26.4-9.5 29.4-22.2l-16.4-.1z"></path><path fill="url(#CloudflareWorkersLogoCombinationMarkHorizontal--gradient-a)" d="M107 5.4l49 88.4-45 81a26 26 0 0 0 0 25.3l45 81.2-49 88.4A52 52 0 0 1 85 349L7 213.5a52.2 52.2 0 0 1 0-52L85 26a52 52 0 0 1 22-20.6z"></path><path fill="url(#CloudflareWorkersLogoCombinationMarkHorizontal--gradient-b)" d="M111 174.9a26 26 0 0 0 0 25.2l45 81.2-49 88.4A52 52 0 0 1 85 349L7 213.5C.8 202.8 35.5 190 111 175z" opacity=".7"></path><path fill="url(#CloudflareWorkersLogoCombinationMarkHorizontal--gradient-c)" d="M112 14.3l44 79.5-7.3 12.7-38.8-65.7C98.7 22.5 81.6 32 60.2 69l3.2-5.5L85 26a52 52 0 0 1 21.8-20.6l5.1 8.9z" opacity=".5"></path><path fill="url(#CloudflareWorkersLogoCombinationMarkHorizontal--gradient-d)" d="M331 26l78 135.5c9.3 16 9.3 36 0 52L331 349a52 52 0 0 1-45 26h-78l97-174.9a26 26 0 0 0 0-25.2L208 0h78a52 52 0 0 1 45 26z"></path><path fill="url(#CloudflareWorkersLogoCombinationMarkHorizontal--gradient-e)" d="M282 374.4l-77 .7 93.2-175.8a27 27 0 0 0 0-25.4L205 0h17.6l97.8 173.1a27 27 0 0 1-.1 26.8 15624 15624 0 0 0-62.7 110c-19 33.4-10.8 54.9 24.4 64.5z"></path><path fill="url(#CloudflareWorkersLogoCombinationMarkHorizontal--gradient-f)" d="M130 375c-8 0-16-1.9-23-5.3l96.2-173.5c3-5.4 3-12 0-17.4L107 5.4A52 52 0 0 1 130 0h78l97 174.9a26 26 0 0 1 0 25.2L208 375h-78z"></path><path fill="url(#CloudflareWorkersLogoCombinationMarkHorizontal--gradient-g)" d="M298.2 178.8L199 0h9l97 174.9a26 26 0 0 1 0 25.2L208 375h-9l99.2-178.8c3-5.4 3-12 0-17.4z" opacity=".6"></path><path fill="url(#CloudflareWorkersLogoCombinationMarkHorizontal--gradient-h)" d="M203.2 178.8L107 5.4c3-1.6 6.6-2.8 10-3.8 21.2 38.1 52.5 95.9 94 173.3a26 26 0 0 1 0 25.2L115.5 373c-3.4-1-5.2-1.7-8.4-3.2l96-173.5c3-5.4 3-12 0-17.4z" opacity=".6"></path></svg>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.serverless.com'>
                        <img class="inline mr-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA2ElEQVR4Ae2WwQ2CQBBFpxRLoARK+BfYjRftREuwA0rADijBEuwDFtbM1cyqi1/1sC95FycxPxPmgxQKs0PMMXps5A79TWdrzAoQHAYxCB77rwSILXZisDgMhADU9fMDBIcze/2q6B+84rhFJQaTR63ztUrhH4qoe+TkcRSD0AI6f9enVzA1OLFvP+sMxwYV+/ZzAlz5t58XoDMDOPS0APqCSanrTwXQOUOxKJQmTD18c4uDzpkK98OD0AOLw4VfPmmF3P2EAB41ff0ZTdiLgYbS+SeUwq+5AaytytfrQoUQAAAAAElFTkSuQmCC" alt="" data-atf="4" data-frt="0"/>
                        Serverless Framework
                      </a>
                    </li>
                    <li>
                      <a href='https://aws.amazon.com/lambda/'>
                        <img class="inline mr-4 h-8 rounded" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Amazon_Lambda_architecture_logo.svg" alt="" data-atf="4" data-frt="0"/>
                        AWS lambda
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='https://webrtc.org/'>
                    <img class="h-10" src="https://www.gstatic.com/devrel-devsite/prod/vb33fefd4f475972d9db8a48eb99721b7e7821d5a39de2b21c4f6caf579ea0944/webrtc/images/lockup.svg" alt="WebRTC"/>
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <div id="repositories-and-packages" class={`
            skills-list
            scroll-mt-16
            lg:bg-red-100/50
            flow-root
            ${TRANSITION_IN_OUT}
          `}
          >
            <h2 class={`
              ${HEADER_SECOND_LEVEL}
              bg-red-100
            `}
            >Repositories and Packages</h2>
            <div class={`${PAGE_BLOCK} ml-2 lg:px-4 lg:pt-8 pb-8`}>
              <div class="
                my-4
                ml-6
                space-y-4
                "
              >
                <a href='https://github.com/felixdrp?tab=repositories'>
                  <img class="inline mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEX///+6u711eHtaXWFMUFQkKS7j5OQwNTrx8fKRk5bV1tc+Q0esrrDIycqDhomeoaNna24OVeM5AAAA/ElEQVR4AX3T0a6EIAwE0AEY2oLr3v//2iumIaC650UfJkw1BZMQUyZzigEPShQOEhUXJlyIYaaZN1kxVOEDqXAqfCQ6nZ9j46TFRDL7fDxswNbIdBDKBgQeDIciPHwAqJcWBVBHSaQHVoVdBCD0ilVgJ+NFcaGNXUC8HeA2djsSO8Udu4TsVXeJhwx27TVA8IQHjR3a7xka0ttXBB9y9+fLCLsH+X3+DQxjGQwLGyuBSFrIZNs/cJ9vI70BKKRUzeRYkD8OxU+TUuQsPFU6em8mI9Rsg6PL09JWTNal9bWPZrYGpN4uzhLIipldA4aLsovAicSCOy0jrBj+Adb8C4ZUKU58AAAAAElFTkSuQmCC" alt="github logo" data-atf="4" data-frt="0"/>
                </a>
                Some github repositories
                <ul class="
                  my-4
                  ml-6
                  space-y-4
                  "
                >
                  <li>
                    <a class="pl-2 font-medium" href='https://github.com/felixdrp/react-redux-callbag-example'>
                      react-redux-callbag-example
                    </a>
                    <div class="mt-2 ml-5 mr-4 font-light">
                    <p dir="auto">An example of the use Callbags to generate Redux side effects from a React Component.</p>
                    <ul class="ml-6 list-disc" dir="auto">
                      <li>Introduced a new notation or way to define actions for later link between reducer and calls names.</li>
                      <li>Callbags-based middleware for Redux.</li>
                      <li>Code Splitting with redux-reducer-manager.</li>
                      <li>React hooks to inject reducers and actions or Redux side effects.</li>
                    </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      class="pl-2 font-medium"
                      href='https://github.com/felixdrp/callbag-from-function'>
                      callbag-from-function
                    </a>
                    <div class="mt-2 ml-5 mr-4 font-light">
                    <p dir="auto">Generate a Callbag from a function with finish option.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="
                my-4
                ml-6
                space-y-4
                "
              >
                <a href='https://www.npmjs.com/~felixdrp'>
                  <NpmIcon class="h-10 w-10 inline mr-2" />
                </a>
                Some packages
                <ul class="
                  my-4
                  ml-6
                  space-y-4
                  "
                >
                  <li>
                    <a
                      class="pl-2 font-medium"
                      href='https://www.npmjs.com/package/array-find-last'>
                      array-find-last
                    </a>
                    <span class=" text-gray-600 text-sm ">
                      <svg class="ml-4 mr-1 w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      Weekly Downloads
                      400
                    </span>
                    <div class="mt-2 ml-5 mr-4 font-light">
                      Add findLast and findLastIndex to Array.prototype.
                      <p>
                        The findLastIndex() method returns the index of the last element in the array
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      class="pl-2 font-medium"
                      href='https://www.npmjs.com/package/ads1x15'>
                      ads1x15
                    </a>
                    <span class=" text-gray-600 text-sm ">
                      <svg class="ml-4 mr-1 w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      Weekly Downloads
                      50
                    </span>
                    <div class="mt-2 ml-5 mr-4 font-light">
                      A javascript library for the DS101x Ultra-Small,
                      Low-Power, I2C-Compatible, 3.3-kSPS, 12-Bit ADCs With Internal Reference, Oscillator and Programmable Comparator.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="upcoming" class={`
            skills-list
            scroll-mt-16
            lg:bg-purple-100/50
            flow-root
            ${TRANSITION_IN_OUT}
          `}
          >
            <h2 class={`
              ${HEADER_SECOND_LEVEL}
              bg-purple-100
            `}
            >Upcoming</h2>
            <div class={`${PAGE_BLOCK} px-8 ml-2 lg:px-8 lg:pt-8 pb-8`}>
              <h2 class="text-2xl font-bold my-4">
                Upcoming
              </h2>
              <p class="indent-5">
                The incredible developments and innovations in information technology
                have transformed the landscape of fields
                such as web development and machine learning:
              </p>

              <h2 class="text-2xl font-bold my-4">
                HTML APIS
              </h2>

              <ul class='
                list-disc
                ps-8
                py-4
              '>
              {[
                [
                  'Web Speech API', 
                  'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API'
                ], [
                  'WebGPU',
                  'https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API'
                ], [
                  'Web Audio API',
                  'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API'
                ], [
                  'WebCodecs',
                  'https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API'
                ], [
                  'Web APIs List',
                  'https://developer.mozilla.org/en-US/docs/Web/API '
                ]
              ].map(([title, href]) => <li>
                <a href={href}>{title}</a>
              </li>)}
              </ul>
              <h2 class="text-2xl font-bold my-4">
                Machine learning
              </h2>
              <p class="indent-5">
              The progress in this field is making possible new ways of interaction with 
              user and new services previously very difficult or imposible.
              </p>
              
              <blockquote class="my-8 mx-auto text-right block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    " The integration of machine learning into web development
                  allows for more efficient and intelligent decision making,
                  resulting in improved user experiences and better business outcomes. "
                </h5>
                <a href='https://open-assistant.io/' class="font-normal text-gray-700 dark:text-gray-400">
                  Note by "Open Assistant" model OA_SFT_Llama_30B_7e3 preset K50
                </a>
              </blockquote>
              
              <p>
                Evolution of large language models (LLMs):
              </p>

              <blockquote class="m-6 font-light italic text-gray-900">
                " As the scale of the model increases, the performance improves across tasks while also unlocking new capabilities. "
              </blockquote>

              <figure class="my-6">
                <img data-original-height="583" data-original-width="1600" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLXCWMlipdu0gFF6hsiJHbxg1zSaEkdDWfl-8RakQuW__8RPvlOS9KGIScNCytxT4jz9isnx0GLMwbS1G0Q4WdXzT42GszgfwIIAVX1H3J-43lVWWqcb--q9cPsxCsJFFz2dRfpKgEmLe-xfIyBqQuPq1BPYcK9CtAK1_xnhgvgAAx0GeZmODJxGNMYQ/s16000/image8.gif" border="0"/>
                <figcaption
                  class='
                  text-sm mt-6 p-2
                  bg-[rgba(100,100,0,0.1)]
                  shadow
                  '
                >
                  <span>
                    Image by 
                    <a
                      href="https://ai.googleblog.com/2022/04/pathways-language-model-palm-scaling-to.html"
                      title="pathways-language-model-palm-scaling-to">
                      <span class='font-bold text-blue-600'>Pathways Language Model (PaLM): Scaling to 540 Billion Parameters for Breakthrough Performance</span>
                    </a> - 
                    <span class="int-own-work" lang="en">Posted by Sharan Narang and Aakanksha Chowdhery, Software Engineers, Google Research</span>, 
                  </span>
                </figcaption>
              </figure>

              {/* TODO ADD GRAPH model/parameters size evolution */}
              {/* Hugging Face, Free Plug & Play Machine Learning API
              https://huggingface.co/inference-api
              <p>
              .. https://huggingface.co/ to the web and apps.
              </p>
              GPT-4 100 Trillion Both Text and Image
              Google Switch 1.6 Trillion
              GLaM 1.2 Trillion (sparse model 8% sparsity activates only 97 Billions at time)

              PaLM 540 Billion Text dense model
              Megatron Nvidia & Microsoft 530 Billions dense model
              Gopher deepmind 280 Billions dense model
              GPT-3 175 Billion Text
              LaMDA 137 Billions (dense model)
              Anthropic claude 52 billion parameter

              parameter
              <MachineLearningPlot /> */}

            </div>
          </div>
        </div>
      </div>

      <div
        class={`${PAGE_BLOCK} overflow-hidden lg:rounded-b-lg`}
      >
        <div class={`$px-8 lg:px-8 lg:pt-8 pb-8`}>

          {/* TODO ADD Webs of interest section */}

          {/* <h1 class="text-3xl font-bold">
            Websites of interest
          </h1>
          <h1 class="text-3xl font-bold">
            Developers
          </h1>
          <p>
            <developer class={`text-fuchsia-600`}>
              Andre Staltz
            </developer>
            <links>
              <a class={`${DEVELOPERS_LINK} `} href='https://staltz.com/'>https://staltz.com/</a>
              <a href='https://github.com/staltz'>https://github.com/staltz</a>
            </links>
            
            Open source software, teach programming, and write articles.
            JavaScript, user interfaces, reactive programming, React Native, and peer-to-peer networks
            Projects: Callbags/Tallbags, Cycle.js
          </p>
          Dan Abramov
          https://overreacted.io/ explain with words and code.
          https://github.com/gaearon
          https://reactresources.com/people/dan-abramov

          Projects: reactjs, Redux, Hot Reloading in React

          Avatar Ryan Florence
          https://ryanflorence.com/
          https://github.com/ryanflorence
          Projects: Remix-run, React Router */}

          {/* <h1>Others</h1>
          https://www.scottish-country-dancing-dictionary.com/dance-crib/scotlands-thistle.html */}

          <div id="about" class="scroll-mt-[3.6em] mx-4">
            <h2 class="text-3xl font-bold my-4">
              About
            </h2>
            <p>
              <span class="font-serif text-4xl text-slate-900 ml-3 mr-1">I</span>'m
              a software developer based in Glasgow City 🐎
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f6/VLC.svg"
                alt="traffic cone"
                style={{display: 'inline'}}
                width={20}
              />, Scotland 🌍 🏴󠁧󠁢󠁳󠁣󠁴󠁿.
            </p>
            <p>
              <img
                class="object-center m-6 mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Glasgow-CoA.svg"
                width={180}
              />
            </p>
            <p class="my-3">
              Glasgow city is a cultural and cosmopolitan with a vibrant and growing
              computing science scene, which attracts the best of IT talents.
            </p>

            <p>Also, Scotland is very well connected with the principal development centers of Europe:</p>
            
            <table class='mx-auto my-6 gap-2 border-separate border-spacing-x-6 border-slate-400'>
              <caption>Average flight time ✈</caption>
              <thead>
                <tr>
                  <th>destiny</th>
                  <th>time</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Dublin</td><td>1 hr, 10 mins</td></tr>
                <tr><td>London</td><td>1 hr, 25 mins</td></tr>
                <tr><td>Amsterdam</td><td>1 hr, 35 mins</td></tr>
                <tr><td>Paris</td><td>1 hr, 50 mins</td></tr>
                <tr><td>Zurich, Switzerland</td><td>2 hours 6 minutes</td></tr>
                <tr><td>Munich</td><td>2 hours 10 mins</td></tr>
                <tr><td>Madrid</td><td>2 hours, 45 mins</td></tr>
              </tbody>
            </table>

            <p>
              One of its main universities, 
              <a
                class=' text-blue-800' 
                href="http://www.theguardian.com/education/table/2013/jun/04/university-guide-computer-sciences-it">
                the University of Glasgow, 
              </a>
              is between the most important UK centres in computer science.
            </p>

          </div>
        </div>
        <img
          class='w-screen '
          alt="Glasgow city center image" 
          src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Glasgow-George-Square.jpg"
          data-file-width="3517"
          data-file-height="2602"
          // width="250" height="185"
        ></img>
      </div>
    </div>
  );
}

export default App;
