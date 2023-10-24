import api, { apiConfig } from "../../config/api.js";
import humps from "humps";
import _ from "lodash";
export const mergeActions = (modules:any, moduleName:string) => {
  const setLoading = (payload:any) => async (dispatch:any) => {
    dispatch({ type: `${moduleName}__loading`, payload: payload });
  };
  const setInfo =
    ({ prop, value }:any) =>
    async (dispatch:any) => {
      dispatch({ type: `${moduleName}__item__info`, payload: { prop, value } });
    };
  const setInfos =
        (updates:any) =>
            async (dispatch:any) => {
                dispatch({ type: `${moduleName}__item__infos`, payload: updates });
    };
  const setError = (payload:any) => async (dispatch:any) => {
    dispatch({
      type: `${moduleName}__error`,
      payload: payload,
    });
  };
  const setSelected = (payload:any) => async (dispatch:any) => {
    dispatch({
      type: `${moduleName}__selected_item`,
      payload: payload,
    });
  };
  const setSuccess = (payload:any) => async (dispatch:any) => {
    dispatch({
      type: `${moduleName}__success`,
      payload: payload,
    });
  };
  const create =
    (
      body:any,
      options = {
        error: "",
        success: "",
        path: "/"
      }
    ) =>
    async (dispatch:any) => {
      const path = options.path || humps.decamelize(moduleName);
      dispatch(setError(""));
      dispatch(setLoading(true));
      dispatch(setSuccess(""));
      return api
        .post(`${apiConfig.baseURL}${path}`, body)
        .then((json) => {
          dispatch({ type: `${moduleName}__add__item`, payload: {...body,hasModified: false} });
          dispatch(
            setSuccess(
              options.success || `Enregistrement de ${moduleName} reussie`
            )
          );
          dispatch(setLoading(false));
          dispatch(setError(""));
          console.log(`create new ${moduleName} success`);
        })
        .catch((err) => {
          console.log(`error on create ${moduleName}`, err.message);
          dispatch(
            setError(
              options.error ||
                `Une erreur s'est produite lors de la creation  du ${moduleName}`
            )
          );
          dispatch(setSuccess(""));
          dispatch(setLoading(false));
        });
    };
  const update =
    (
      body:any,
      options = {
        index: null,
        error: "",
        success: "",
        path: null,
      }
    ) =>
    async (dispatch:any) => {
      const path =
        options.path || [humps.decamelize(moduleName), body.id].join("/");
      const index = options.index;
      console.log(index);
      dispatch(setError(""));
      dispatch(setSuccess(""));
      dispatch(setLoading(true));
      return api
        .put(`${apiConfig.baseURL}${path}`, body)
        .then((json) => {
          if (index != null) {
            dispatch({
              type: `${moduleName}__update_item`,
              payload: {
                index: index,
                item: {...body,hasModified: true},
              },
            });
          }
          dispatch(setError(""));
          dispatch(setLoading(false));
          dispatch(
            setSuccess(
              options.success ||
                `Mis à jour  de ${moduleName} #${body.id} reussie`
            )
          );
          console.log(`update ${moduleName} success`);
        })
        .catch((err) => {
          console.log(`update ${moduleName} error`, err.message);
          dispatch(
            setError(
              options.error ||
                `Une erreur s'est produite lors la mis à jour  de ${moduleName} #${body.id}`
            )
          );
          dispatch(setLoading(false));
          dispatch(setSuccess(""));
        });
    };
  const destroy =
    (
      body:any,
      options = {
        index: null,
        success: "",
        error: "",
        path: null
      }
    ) =>
    async (dispatch:any) => {
      const path =
        options.path || [humps.decamelize(moduleName), body.id].join("/");
      const index = options.index;
      dispatch(setError(""));
      dispatch(setLoading(true));
      dispatch(setSuccess(""));
      return api
        .delete(`${apiConfig.baseURL}${path}`, body)
        .then((json) => {
          if (index != null) {
            dispatch({
              type: `${moduleName}__remove__item__by__index`,
              payload: {
                index: index,
              },
            });
          }
          dispatch(setError(""));
          dispatch(setLoading(false));
          dispatch(
            setSuccess(
              options.success ||
                `Suppression  de ${moduleName} #${body.id} reussie`
            )
          );
          console.log(`destroy ${moduleName} success`);
        })
        .catch((err) => {
          console.log(`error on destroy ${moduleName}`, err.message);
          dispatch(
            setError(
              options.error ||
                `Une erreur s'est produite lors de la suppression  du ${moduleName} #${body.id}`
            )
          );
          dispatch(setLoading(false));
          dispatch(setSuccess(""));
        });
    };
  const fetch =
    (
      options = {
        error: "",
        success: "",
        path: "/"
      },
      params = {}
    ) =>
    async (dispatch:any) => {
      const path = options.path || humps.decamelize(moduleName);
      dispatch(setError(""));
      dispatch(setSuccess(""));
      dispatch(setLoading(true));
      return api
        .get(`${apiConfig.baseURL}${path}`, params)
        .then((json:any) => {
          dispatch({
            type: `${moduleName}__fetch_items`,
            payload: json.rows !=undefined ? json.rows: json,
          });
          dispatch(setError(""));
          dispatch(
            setSuccess(
              options.success || `Récuperation des ${moduleName} reussies`
            )
          );
          dispatch(setLoading(false));
          console.log(`fetch ${moduleName} success`);
        })
        .catch((err) => {
          console.log(`fetch ${moduleName} error`, JSON.stringify(err));
          dispatch(
            setError(
              options.error ||
                `Une erreur s'est produite lors de la récuperation  des ${moduleName}`
            )
          );
          dispatch(setSuccess(""));
          dispatch(setLoading(false));
        });
    };
  const get =
    (
      body:any,
      options = {
        error: "",
        success: "",
       path: null
      },
      params = {}
    ) =>
    async (dispatch:any) => {
      const path =
        options.path || [humps.decamelize(moduleName), body.id].join("/");
      dispatch(setError(""));
      dispatch(setSuccess(""));
      dispatch(setLoading(true));
      return api
        .get(`${apiConfig.baseURL}${path}`, params)
        .then((json) => {
          dispatch(setSelected(json));
          dispatch(setError(""));
          dispatch(
            setSuccess(
              options.success || `Récuperation  de ${moduleName}  reussie`
            )
          );
          dispatch(setLoading(false));
          console.log(`get ${moduleName} success`);
        })
        .catch((err) => {
          console.log(`get ${moduleName} error`, err.message);
          dispatch(
            setError(
              options.error ||
                `Une erreur s'est produite lors de la récuperation du ${moduleName}`
            )
          );
          dispatch(setSuccess(""));
          dispatch(setLoading(false));
        });
    };
  return {
    ...modules[moduleName].action,
    ...{
      setLoading,
      setInfo,
      setInfos,
      setError,
      setSelected,
      setSuccess,
      fetch,
      get,
      create,
      update,
      destroy,
    },
  };
};
