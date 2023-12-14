import { createSignal } from 'solid-js';
import logo from '../../logo.svg';
import GitHubIcon from '../../GitHubIcon';
import NpmIcon from '../../NpmIcon';

const menuListClass = `block py-2 pl-3 pr-4
text-blue-600 border-b 
bg-gray-50
border-gray-200 
hover:bg-gray-100
md:hover:bg-gray-100
md:hover:text-blue-600 
dark:text-blue-500 md:dark:hover:text-blue-500 
dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`
// md:border-b
// md:p-0 


function NavBar() {
  const [menuOpenStatus, setMenuOpenStatus] = createSignal(true)
  const toggleMenuOpenStatus = () => setMenuOpenStatus(!menuOpenStatus())

  return <nav
// style={{'grid-area': 'header'}}
// top-0 left-0 right-0
// relative
// max-w-screen-xl
class="
  z-50
  sticky
  px-1
  top-0
  flex flex-wrap items-center justify-between
  w-screen
  backdrop-blur-sm
  drop-shadow
  bg-opacity-80
  dark:text-blue-100
  dark:bg-blue-100/20

  bg-[rgba(100,100,0,0.1)]
  hover:bg-[rgba(100,100,0,0.2)]
  transition
  transition-cubic-bezier(0.4, 0, 0.2, 1);
  delay-100
"
// hover:bg-[rgba(144,144,48,0.1)]
>
  <a href="#init">
    {/* Felix logo */}
    <img
      src={logo}
      class="h-10 w-10 pt-0.5 pl-0.5" alt="logo"
    />
  </a>

  <div class="flex items-center md:order-2 space-x-4">
    <a href='https://github.com/felixdrp'>
      <GitHubIcon
        class="
          h-auto w-14
          "
          // filter-[drop-shadow(1px_1px_0px_white)_drop-shadow(-1px_-1px_0px_white]
      />
    </a>
    
    <a href='https://www.npmjs.com/~felixdrp'>
      <NpmIcon class="h-10 w-10" />
    </a>
    <a href="#about">About</a>
    <button
      // data-collapse-toggle="mega-menu"
      onClick={toggleMenuOpenStatus}
      type="button"
      // md:hidden
      class={`
        inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg
        hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
      `}
      aria-controls="mega-menu"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div
    id="mega-menu"
    class={`
      absolute
      top-10
      right-0
      items-center
      justify-between
      w-52
      md:w-auto 
      md:order-1
      ${menuOpenStatus() && 'hidden'}
      `}
      // md:flex 
  >
    <ul
      class="flex flex-col mt-0 font-medium 
      "
      // md:mt-0
      // md:flex-row
      // md:space-x-8 
    >
      <li>
        <a href="#" class={menuListClass} aria-current="page">
          Home
        </a>
      </li>
      <li>
        <a href="#full-stack-developer" class={menuListClass} aria-current="page">
          Full Stack Developer
        </a>
        <ul>
          <li>
            <a href="#front-end" class={menuListClass+" pl-6"} aria-current="page">
              Front End
            </a>
          </li>
          <li>
            <a href="#back-end" class={menuListClass+" pl-6"} aria-current="page">
              Back End
            </a>
          </li>
          <li>
            <a href="#platforms" class={menuListClass+" pl-6"} aria-current="page">
              Platforms
            </a>
          </li>
          <li>
            <a href="#repositories-and-packages" class={menuListClass+" pl-6"} aria-current="page">
              Repositories and Packages
            </a>
          </li>
          <li>
            <a href="#upcoming" class={menuListClass+" pl-6"} aria-current="page">
              Upcoming
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#about" class={menuListClass} aria-current="page">
          About
        </a>
      </li>
    </ul>
  </div>
</nav>
}


export default NavBar;