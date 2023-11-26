const initialState = {
    mode: 'base',
    message: '',
    filter: '',
    tabs: [],
    galleryFilter: null,
    dbmode: true,
    library: {
        name: '',
        author: '',
        description: '',
        templates: []
    },
    uikits: [],
    component: null,
    cloudinary_image: null,
    error: null,
    currentTab: 0,
    loading: false,
    project: null,
    confirm: false,
    confirmAction: null,
    toolbar: null,
    menu_responsive: false
};

const mutations = {};
export default { initialState, mutations };
