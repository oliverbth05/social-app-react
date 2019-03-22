import React            from 'react';

export const tagTypes = [
    ['=H1=', '<h1 class = "formatted-h1">' ],
    ['=/H1=', '</h1>'],
    ['=H2=', '<h2 class = "formatted-h2">'],
    ['=/H2=', '</h2>'],
    ['=H3=', '<h3 class = "formatted-h3">'],
    ['=/H3=', '</h3>'],
    ['=CODE=', '<span class = "code-section">'],
    ['=/CODE=', '</span>'],
    ['=I=', '<em>'],
    ['=/I=', '</em>'],
    ['=B=', '<strong>'],
    ['=/B=', '</strong>']
]

export const replaceTags = (string, search, replacement) => {
    return string.split(search).join(replacement);
}

export const replaceScriptTags = (string) => {
    return string.replace(new RegExp(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, 'g'), 'Nice Try.');
};

const Preview = (props) => {

    if (!props.body) {
        
    }
    else {
        var parsedBody = props.body
        for (var i = 0; i < tagTypes.length; i++) {
            parsedBody = replaceTags(parsedBody, tagTypes[i][0], tagTypes[i][1]);
        }
        parsedBody = replaceScriptTags(parsedBody);
    }
    
    return (
        <div className = 'flex-item m-a-1 box p-a-1'>
            <h3 className = 'text-center font-normal p-b-2'>Preview</h3>
            
            {!props.body && !props.title && !props.caption && !props.image ?
            <h4 className = 'font-light text-center'>Start typing to see preview.</h4>
            :
            
            <div className = 'preview-container'>
              <h2 className='post-heading'>{props.title}</h2>
              {props.caption ? <h4 className = 'post-caption'>{props.caption}</h4> : null }
              {props.image ? <img className = 'post-image' src = {props.image} /> : null }
              <p dangerouslySetInnerHTML = {{__html:parsedBody}} className='post-body'></p>
              {props.tags.map(tag => {
                return <span className = 'color-primary font-light m-r-s'>{tag }</span>
              })}
            </div>
            }
        </div>
    )
}

export default Preview;