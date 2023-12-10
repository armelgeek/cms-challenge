const initialState = {
    mode: 'base',
    frame: {
        w: 'w-screen',
        h: 'h-screen'
    },
    message: '',
    filter: '',
    tabs: [],
    galleryFilter: null,
    library: {
        id: 'null',
        name: 'Nouvelle library',
        author: '',
        description: 'ceci est une description',
        templates: []
    },
    uikits: [],
    currentTab: 0,
    loading: false,
    modal: {
        show: false,
        type: '',
        title: ''
    },
    html: '',
    preview:false
};

const mutations = {};
export default { initialState, mutations };
