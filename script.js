import { React } from 'react';
import { ReactDOM } from 'react-dom';

class MarkdownPreviewer extends React.Component{
    constructor(props){
        super(props)
         this.state = {
            input: ""
        }
    }

    Updator(event){
        this.setState = {
            input: event.target.value
        }
    }
    render(){
        return(
            <div>
                <textarea name="" id="editor" cols="30" rows="10" onChange={this.Updator.bind(this)}></textarea>
                <div id="preview">{this.state.input}</div>
            </div>
            
        )
    }
}