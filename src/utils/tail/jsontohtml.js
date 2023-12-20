import _ from 'lodash';
export function jsonToHTML(jsonData) {
    let html = '';
    if (jsonData.type != 'document') {
        html += `<${jsonData.element}`;
        if (jsonData.css.css != "") {
            html += ` class="${jsonData.css.css}"`;
        }
        if (jsonData.style != "") {
            html += ` style="${jsonData.style}"`;
        }
        if (jsonData.type != "") {
            html += ` type="${jsonData.type}"`;
        }
        if (!_.isUndefined(jsonData.data.attributes)) {
            let keys = Object.keys(jsonData.data.attributes);
            for (let i = 0; i < keys.length; i++) {
                html += ` ${keys[i]}="${jsonData.data.attributes[keys[i]]}"`;
            }
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