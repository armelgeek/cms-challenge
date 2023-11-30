const initialState = {
    mode: 'base',
    message: '',
    filter: '',
    tabs: [],
    galleryFilter: null,
    library: {
        name: '',
        author: '',
        description: '',
        templates: []
    },
    uikits: [],
    currentTab: 0,
    loading: false,
    modal: {
        show: false,
        type: '',
        title: ''
    }
};

const mutations = {};
export default { initialState, mutations };
