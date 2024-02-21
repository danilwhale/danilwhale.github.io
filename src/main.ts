import './style.css'
import getRandomText from "./random_text.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 class="brand">danilwhale's website</h1>
    
    <p class="splash">${getRandomText()}</p>
    
    <div class="box">
        hi! im danil! im just coding things that doesn't work :D <br/>
        my main programming language is c# and maybe c/c++ <br/>
        i rarely write code on html, typescript, javascript
    </div>
    <h3><a href="https://github.com/danilwhale/danilwhale.github.io/">source code</a> : made with 🐛🐛🐛 by danilwhale</h3>
  </div>
`;