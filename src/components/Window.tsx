import AboutMe from "./AboutMe"

function Window() {
  return (
    <div className="bg-slate-900/60 rounded-none md:rounded-xl h-dvh md:h-fit p-0 backdrop-blur-sm drop-shadow-lg" id="window">

      <div className="rounded-none bg-slate-600/40 md:rounded-t-xl h-8 p-0">
        <img className="float-left w-6 h-6 my-1 ml-2" src="./vite.svg" />
        <div className="float-left my-1 ml-2 cursor-default">danilwhale's website</div>

        <div className="title-bar-button text-3xl hover:bg-red-500 rounded-none md:rounded-tr-lg" id="close">×</div>
        <div className="title-bar-button leading-26 before:content-['🗗︎'] md:before:content-['🗖']" id="maximize"></div>
        <div className="title-bar-button" id="minimize">🗕</div>
      </div>

      <div id="window-content">
        {/* fuck you firefeox*/}
        {navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ?
          <div className="bg-amber-300/50 p-1 hidden" id="firefoxWarning">
            <p>
              looks like firefox nuked my discord pfp,
              try disabling 'enhanced' tracking protection for my website
            </p>
            <img className='rounded-lg' src='./firefox_nuke.png' />
          </div>
          : null}

        <AboutMe />

        <div className="p-5">
          this website is open source.
          click <a href="https://github.com/danilwhale/danilwhale.github.io" target="about:blank">here</a> to
          open repository with the source code
        </div>
      </div>

    </div>
  )
}

export default Window