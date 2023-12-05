import * as _ from "./utlis/utils";
import template from "./template";
import { resolveCollection } from "./utlis/collections";

export default class IconPicker {
    static DEFAULT_OPTIONS = {
        theme: 'default',
        closeOnSelect: true,
        defaultValue: null,
        iconSource: [],
        i18n: {
            'input:placeholder': 'Search icon…',

            'text:title': 'Select icon',
            'text:empty': 'No results found…',

            'btn:save': 'Save'
        }
    }

    _eventListener = {
        select: [],
        save: [],
        show: [],
        clear: [],
        hide: []
    };
    constructor(options = {}) {
        this.options = _.mergeDeep(IconPicker.DEFAULT_OPTIONS, options);

        // Initialize icon picker
        this._preBuild();

        if (this.element && this.options.iconSource.length > 0) {
        //    this._binEvents();
        this._renderdIcons();
        //    this._createModal();
        } else {
            //this._catchError('iconSourceMissing');
        }
    }

    _preBuild() {
        if (!Array.isArray(this.options.iconSource) && this.options.iconSource.length > 0) {
            this.options.iconSource = [this.options.iconSource];
        }
    }

    /**
     * Generate icons elements
     * @private
     */
    async _renderdIcons() {
        let icons = await this._getIcons();
    }
    async _getIcons() {
        const {options} = this
        const iconsURL = [];

        let sourceInformation = resolveCollection(options.iconSource);

        for (const source of Object.values(sourceInformation)) {
            iconsURL.push(source.url)
        }

        return await Promise.all(iconsURL.map((iconURL) => fetch(iconURL).then((response) => response.json())))
            .then((iconLibrary) => {
                iconLibrary.forEach((library) => {
                    if (sourceInformation.hasOwnProperty(library.prefix)) {
                        library.prefix = sourceInformation[library.prefix].prefix
                    }
                })

                return iconLibrary;
            });
    }
    _catchError(exception) {
        switch (exception) {
            case 'iconSourceMissing':
                throw Error('No icon source was found.');
                break;
        }
    }

}