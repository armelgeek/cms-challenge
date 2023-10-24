export const excludeModules = ["permissions","common","users"]
export const getExcludeModules = (module:any) =>{
    return excludeModules.includes(module);
}