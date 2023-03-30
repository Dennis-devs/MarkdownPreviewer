import React, { useState} from "react";
import { marked } from "marked";
import './style.css'


const printPreview = `INSTRUCTIONS
<p>This preview is made with<p> 

![React Logo w/ Text](https://bit.ly/3K123RQ)
# h1
## h2
> help[help text here](URL//.com)

[freeCodeCamp](https://www.freecodecamp.com)
\`<p>code</p>\`
\`\`\`
Multi line code:
function func(arg) {  
    return arg;  
}
\`\`\`
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
1. And there are numbered lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or
* asterisks
**bold**
> Block Quotes
<style>
p{
    color: gold
}
<stlyle/>
`;


marked.setOptions({
    breaks: true,
  })

const MarkdownPreviewer = () => {
    const [state, setState] = useState(printPreview)

 return (
    
    
    <div id="outer" className="d-flex flex-column align-items-center bg-info min-vh-100">
     <div id="top">
    <nav className="navbar navbar-light bg-warning d-flex align-content-center mt-4" style={{width: 500, height:35}}>
        
        <span className="navbar-brand h1">
            <img src="https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.svg" alt="" style={{width:26, height:20}}/>
            {" "}
            Editor
        </span>
        <i className="fa fa-maximize icon1"></i>
    </nav>   
    <textarea id="editor"
    onChange={(e) => setState(e.target.value)}
    value={state} style={{position:"relative"}}>
    </textarea>
    </div>
    <br />
    <div id="bottom">
    <nav className="navbar navbar-light bg-warning d-flex align-content-center" style={{width: 500, height:35}}>
        <span className="navbar-brand mb-0 h1">
            <img src="https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.svg" alt="" style={{width:26, height:20}}/>
            {" "}
            Previewer
        </span>
        <i className="fa fa-maximize icon2"></i>
    </nav>
    <div id="preview" 
    dangerouslySetInnerHTML={{__html: marked(state)}}>
    </div>
    </div>
    </div>
    
 )
}

export default MarkdownPreviewer

    