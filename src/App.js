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
    
    <>
    <textarea id="editor"
    onChange={(e) => setState(e.target.value)}
    value={state}>
    </textarea>

    <div id="preview" 
    dangerouslySetInnerHTML={{__html: marked(state)}}>
    </div>
    </>
 )
}

export default MarkdownPreviewer

    