const initialState = {
  elements: null,
  document: null,
  project: null,
  selected: null,
  page: null,
  current: null,
  component: null,
  action: null,
  subaction: null,
  level: null,
  parent: null,
  startTime: null,
  autosave: null,
  export: "single",
  preview: null,
  fonts:
    "Alfa+Slab+One|Asap+Condensed|Abel|Alice|Alegreya|Amethysta|Archivo+Black|Barlow|Barlow+Condensed|Bungee+Inline|Expletus+Sans|Lora|Montserrat|Nunito+Sans|Oi|Open+Sans|PT+Sans|Roboto|Roboto+Condensed|Quattrocento|Raleway|Ultra|Yatra+One".split(
      "|"
    ),
  save: true,
  article: null,
  customizeTab: null,
  iconTab: 'elements',
  sidebar:{
    show: false,
    name: ''
  }
};
const mutations = {};
export default { initialState, mutations };
