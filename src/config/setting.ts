import { compareVer, objectDeepMerge } from "../utils";
import { defaultSetting, overwriteSetting } from "./defaultSetting.js";
export const mergeSetting = (setting:any) => {
  const defaultSettingCopy = JSON.parse(JSON.stringify(defaultSetting));
  const overwriteSettingCopy = JSON.parse(JSON.stringify(overwriteSetting));
  if (!setting) {
    setting = defaultSettingCopy;
  } else if (compareVer(setting.version, defaultSettingCopy.version) < 0) {
    //objectDeepMerge(defaultSettingCopy, setting);
    //objectDeepMerge(defaultSettingCopy, overwriteSettingCopy);
    setting = defaultSettingCopy;
  }
  return setting;
}
export const initSetting = () => {
  return {
    setting: defaultSetting,
    settingVersion: defaultSetting.version,
  };
};
