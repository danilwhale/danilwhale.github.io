import AboutMe from "./AboutMe"

function Window() {
  return (
    <div className="m-0 md:m-32 bg-slate-900/60 rounded-none md:rounded-xl h-dvh md:h-96 p-0 backdrop-blur-sm" id="window">

      <div className="rounded-none bg-slate-600/40 md:rounded-t-xl h-8 p-0">
        <img className="float-left w-6 h-6 my-1 ml-2" src="./vite.svg" />
        <div className="float-left my-1 ml-2 cursor-default">danilwhale's website</div>

        <div className="title-bar-button text-3xl hover:bg-red-500 rounded-none md:rounded-tr-lg" id="close">×</div>
        <div className="title-bar-button leading-26 before:content-['🗗︎'] md:before:content-['🗖']" id="maximize"></div>
        <div className="title-bar-button" id="minimize">🗕</div>
      </div>

      <div className="p-5" id="window-content">
        <AboutMe />
      </div>

    </div>
  )
}

export default Window
