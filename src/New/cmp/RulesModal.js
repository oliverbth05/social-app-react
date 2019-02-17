import React from 'react';

const RulesModal = (props) => {
    return(
    <div className = 'modal'>
        <div className = 'modal-container'>
            <h3 className = 'font-normal text-center'>Styling Rules</h3>
            <h4 className = 'm-t-2'>Headings</h4>
            <p>
                The title and caption fields will be formatted automatically. To add headings within the article, enclose the line with <strong>=H=</strong> and <strong>=/H=</strong>
                <br />
                <br />
                There are three sizes of heading, indicated by the number after the <strong>H</strong>, with one being the largest.
                <br />
                <br />
                =H1=
                <h1 className = 'formatted-h1'>Heading</h1>
                <br />
                <br />
                =H2=
                <h2 className = 'formatted-h2'>Heading</h2>
                <br />
                <br />
                =H3=
                <h3 className = 'formatted-h3'>Heading</h3>
            </p>
            
            <h4 className = 'm-t-2'>Text Highlighting</h4>
            <p>
                The editor allows for the use of <em>Italic</em> and <strong>Bold</strong> highlighting. The corresponding tags being =I= and =B=
            </p>
            
            <h4 className = 'm-t-2'>Code Sections</h4>
            <p>
                If your post involves demonstrating sections of code, you can use =CODE= tags to display them clearly.
            </p>
            <br />
            <span className = 'code-section'>console.log('Place Code inside =CODE= brackets')</span>
            
            <button onClick = {() => {props.toggle()}} className = 'button-block m-t-1'>Understood</button>
        </div>
          
    </div>
    )
}

export default RulesModal;