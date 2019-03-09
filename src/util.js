//Check to see if string is present in an array of strings

export const isMember = (arr, member) => {
  return arr.indexOf(member) !== -1
}

//Parse and escape html tags

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