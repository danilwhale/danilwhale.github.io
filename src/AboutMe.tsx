import Profile from "./Profile";

function AboutMe() {
    return (
        <>
            {/* fuck you firefeox*/}
            {navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ?
                <div className="bg-amber-300/50 p-1 hidden" id="firefoxWarning">
                    <p>
                        looks like firefox nuked my discord pfp, 
                        try disabling 'enhanced' tracking protection for my website
                    </p>
                    <img className='rounded-lg' src='./firefox_nuke.png'/>
                </div>
                : null}

            <div className="p-5">
                <Profile />
            </div>
        </>
    )
}

export default AboutMe