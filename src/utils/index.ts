export const isObject = (item:any) => item && typeof item === 'object' && !Array.isArray(item)
export const compareVer = (currentVer:any, targetVer:any) => {
  // treat non-numerical characters as lower version
  // replacing them with a negative number based on charcode of each character
  const fix = (s:any) => `.${s.toLowerCase().charCodeAt(0) - 2147483647}.`;

  currentVer = ("" + currentVer).replace(/[^0-9.]/g, fix).split(".");
  targetVer = ("" + targetVer).replace(/[^0-9.]/g, fix).split(".");
  const c = Math.max(currentVer.length, targetVer.length);
  for (let i = 0; i < c; i++) {
    // convert to integer the most efficient way
    currentVer[i] = ~~currentVer[i];
    targetVer[i] = ~~targetVer[i];
    if (currentVer[i] > targetVer[i]) return 1;
    else if (currentVer[i] < targetVer[i]) return -1;
  }
  return 0;
};

export const objectDeepMerge = (target:any, source:any, mergedObj:any) => {
  if (!mergedObj) {
    mergedObj = new Set();
    mergedObj.add(target);
  }
  const base = {} as any;
  Object.keys(source).forEach((item) => {
    if (isObject(source[item])) {
      if (mergedObj.has(source[item])) return;
      if (!isObject(target[item])) target[item] = {};
      mergedObj.add(source[item]);
      objectDeepMerge(target[item], source[item], mergedObj);
      return;
    }
    base[item] = source[item];
  });
  Object.assign(target, base);
};
export function formatRelativeDate(dateString:string) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  if (diff < 60000) { // moins d'une minute
    return "< 1 minute";
  } else if (diff < 3600000) { // moins d'une heure
    const minutes = Math.floor(diff / 60000);
    return `Il y a ${minutes} ${minutes > 1 ? "minutes" : "minute"}`;
  } else if (diff < 86400000) { // moins d'un jour
    const hours = Math.floor(diff / 3600000);
    return `Il y a ${hours} ${hours > 1 ? "heures" : "heure"}`;
  } else if (diff < 2592000000) { // moins d'un mois
    const days = Math.floor(diff / 86400000);
    return `Il y a ${days} ${days > 1 ? "jours" : "jour"}`;
  } else if (diff < 31536000000) { // moins d'une année
    const months = Math.floor(diff / 2592000000);
    return `Il y a ${months} ${months > 1 ? "mois" : "mois"}`;
  } else { // plus d'un an
    const years = Math.floor(diff / 31536000000);
    return `Il y a ${years} ${years > 1 ? "années" : "année"}`;
  }
}