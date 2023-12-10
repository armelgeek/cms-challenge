import _ from 'lodash';
import sdk from "../../../utils/api-sdk";
import { addTab } from "../desktop/action";
import Element from '../../../utils/tail/element';
export const TYPES = {} as any;
for (const key of Object.keys(TYPES)) {
  TYPES[key] = `projects__${key}`;
}

export const addProject = (name: string, description: string) => async (dispatch: any, getState: any) => {
  let requestObj = sdk.createProject(name, description).promise;
  requestObj
    .then((response: any) => {
      dispatch({
        type: 'projects__add__item',
        payload: {
          name: name,
          description: description
        }
      })
    })
    .catch((error: any) => {
      console.log('Failed to add project', error)
    });

}
export const fetchProject = () => async (dispatch: any, getState: any) => {
  let requestObj = sdk.fetchProjects().promise;
  requestObj
    .then((response: any) => {
      console.log('response', response);
      dispatch({
        type: `projects__fetch_items`,
        payload: response,
      });
    })
    .catch((error: any) => {
      console.log('Failed to fetch project', error)
    });

}


const openBlock = (page: any, dispatch: any) => {
  let pag = page;
  pag.json = {
    blocks: JSON.parse(page.blocks)
  };

  pag.tags = JSON.parse(page.tags);
  pag.id = page.page_id;
  delete pag.tags;
  delete pag.blocks;
  delete pag.page_id;
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'page',
      value: pag
    },
  })
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'document',
      value: pag.json.blocks
    },
  })
  dispatch(addTab({
    label: page.name,
    object: page,
    type: 'editor'
  }))
}
export const getProject = (id: any) => async (dispatch: any, getState: any) => {
  let requestObj = sdk.getProject(id).promise;
  requestObj
    .then((response: any) => {
      dispatch({
        type: `projects__selected_item`,
        payload: response,
      });
      dispatch({
        type: 'desktop__item__info',
        payload: {
          prop: 'tabs',
          value: []
        }
      })
     
      if (!_.isUndefined(response.pages) && response.pages.length > 0) {
        let pages = response.pages;

        for (let index = 0; index < pages.length; index++) {
          const peg = pages[index];
         
          openBlock(peg, dispatch);
        }
      }
    })

    .catch((error: any) => {
      console.log('Failed to get project #id' + id, error)
    });

}

