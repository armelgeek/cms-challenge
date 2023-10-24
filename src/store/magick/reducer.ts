import {useCallback} from "react";

const defaultState = {
  meta: {
    isLoading: false,
    error: "",
    success: "",
    totalPages: 0,
    totalItems: 0,
    currentPage: 0,
  },
  items: [],
  selected: {},
};
export const deduplicationList = (list:any) => {
  const ids = new Set();
  return list.filter((s:any) => {
    if (ids.has(s.id)) return false;
    ids.add(s.id);
    return true;
  });
};

export const addItem = ({ state, payload }:any) => [...state, payload];
export const addItems = ({ state, payload }:any) => [...state, ...payload];
export const insertItem = (data:any, { index, item }:any) => [
  ...data.slice(0, index),
  item,
  ...data.slice(index),
];

export const insertItemAfterIndex = (data:any, { index, item }:any) => [
  ...data.slice(0, index),
  item,
  ...data.slice(index),
];

export const removeItem = (data:any, index:number) => [
  ...data.slice(0, index),
  ...data.slice(index + 1),
];
const removeItemsByKey = (data:any, { items, key }:any) => {
  const keys = items.map((item:any) => item[key]);
  return data.filter((item:any) => !keys.includes(item[key]));
};

const updateItem = (data:any, { index, item }:any) =>
  data.map((curItem:any, curIndex:any) => {
    if (curIndex !== index) return curItem;
    return { ...curItem, ...item };
  });

const updateItemByKey = (data:any, { item, key }:any) =>
  data.map((curItem:any) => {
    if (curItem[key] !== item[key]) return curItem;
    return { ...curItem, ...item };
  });
const updateItemsByKey = (data:any, { items, key }:any) =>
  data.map((curItem:any) => {
    const item = items.find((it:any) => curItem[key] === it[key]);
    if (!item) return curItem;

    return { ...curItem, ...item };
  });
const updateValueAllItems = (data:any, payload:any) =>
  data.map((curItem:any) => ({ ...curItem, ...payload }));
export const mergeReducers = (moduleName:any, initialState:any, mutations:any) => {
  const defaultReducers = {
    [`${moduleName}__loading`](state:any, isLoading:any) {
      state = { ...state };
      state.meta.isLoading = isLoading;
      return state;
    },
    [`${moduleName}__item__info`](state:any, { prop, value }:any) {
      return {
        ...state,
        [prop]: value,
      };
    },

    [`${moduleName}__item__infos`](state:any,updates:any) {
      const updateNested = (currentState:any, keys:any, value:any) => {
        const key = keys.shift();
        const updatedState = { ...currentState };
        if (keys.length === 0) {
          updatedState[key] = value;
        } else {
          updatedState[key] = updateNested(
              currentState[key] || {},
              keys,
              value
          );
        }
        console.log('updatedState',updatedState);
        return updatedState;
      };
      const value = Object.keys(updates).reduce((acc, key) => {
        const keys = key.split('.');
        return updateNested(acc, keys, updates[key]);
      }, { ...state });
      console.log('it_updated', value)
      return value ;
    },
    [`${moduleName}__add__item`](state:any, payload:any) {
      return {
        ...state,
        items: [payload, ...state.items],
      };
    },
    [`${moduleName}__insert__item`](state:any, { index, item }:any) {
      return {
        ...state,
        items: insertItem(state.items, { index, item }),
      };
    },
    [`${moduleName}__add__items`](state:any, payload:any) {
      return {
        ...state,
        items: [...payload, ...state.items],
      };
    },
    [`${moduleName}__remove__item__by__index`](state:any, { index }:any) {
      return {
        ...state,
        items: removeItem(state.items, index),
      };
    },
    [`${moduleName}__remove__item__by__key`](state:any, { item, key }:any) {
      const index = state.items.findIndex(
        (curItem:any) => curItem[key] === item[key]
      );
      return index > -1
        ? {
            ...state,
            items: removeItem(state.items, index),
          }
        : state;
    },
    [`${moduleName}__remove__items__by__key`](state:any, { items, key }:any) {
      return {
        ...state,
        items: removeItemsByKey(state.items, { items, key }),
      };
    },
    [`${moduleName}__update_item`](state:any, { index, item }:any) {
      return {
        ...state,
        items: updateItem(state.items, { index, item }),
      };
    },
    [`${moduleName}__update_item_by_key`](state:any, { key, item }:any) {
      return {
        ...state,
        items: updateItemByKey(state.items, { key, item }),
      };
    },
    [`${moduleName}__update_items_by_key`](state:any, { key, items }:any) {
      return {
        ...state,
        items: updateItemsByKey(state.items, { key, items }),
      };
    },
    [`${moduleName}__update_value_all_items`](state:any, payload:any) {
      return {
        ...state,
        items: updateValueAllItems(state.items, payload),
      };
    },
    [`${moduleName}__fetch_items`](state:any, payload:any) {
      return {
        ...state,
        items: deduplicationList([...payload]),
      };
    },
    [`${moduleName}__selected_item`](state:any, payload:any) {
      return {
        ...state,
        selected: payload,
      };
    },
    [`${moduleName}__error`](state:any, payload:any) {
      state = { ...state };
      state.meta.error = payload;
      return state;
    },
    [`${moduleName}__success`](state:any, payload:any) {
      state = { ...state };
      state.meta.success = payload;
      return state;
    },
  };
  mutations = { ...mutations, ...defaultReducers };
  const reducer = (state = { ...initialState, ...defaultState }, action:any) =>
    mutations[action.type]
      ? mutations[action.type](state, action.payload)
      : state;
  return reducer;
};
