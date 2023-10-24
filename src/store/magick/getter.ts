export const mergeGetter = (modules:any, moduleName:string) => {
  const isLoading = (state:any) => state[moduleName].meta.isLoading;
  const meta = (state:any) => state[moduleName].meta;
  const error = (state:any) => state[moduleName].meta.error;
  const success = (state:any) => state[moduleName].meta.success;
  const value = (state:any) => state[moduleName].items;
  const selected = (state:any) => state[moduleName].selected;
  return {
    ...modules[moduleName].getter,
    ...{ isLoading, meta, value, selected, error, success },
  };
};
