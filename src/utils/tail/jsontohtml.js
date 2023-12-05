export function jsonToHTML(jsonData) {
    let html = '';
    if (jsonData.type != 'document') {
        html += `<${jsonData.element} id="${jsonData.id}"`;
        if (jsonData.css.css != "") {
            html += ` class="${jsonData.css.css}"`;
        }
        html += '>';
        if (jsonData.content) {
            html += jsonData.content;
        }
        if (jsonData.blocks && jsonData.blocks.length > 0) {
            jsonData.blocks.forEach((childBlock) => {
                html += jsonToHTML(childBlock);
            });
        }
        html += `</${jsonData.element}>`;
       
    }
    return html;
}