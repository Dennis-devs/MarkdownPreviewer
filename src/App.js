import React from "react"

class MarkdownPreviewer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: ""
        }
    }

    Updator(event){
        this.setState({
            input: event.target.value
        })
    }

    render(){
        return (
            <div>
                <textarea id="editor" cols="30" rows="10" onChange={this.Updator.bind(this)}></textarea><br />
                <p id="preview">{this.state.input}</p>
                
            </div>
        )
    }
}

export default  MarkdownPreviewer;