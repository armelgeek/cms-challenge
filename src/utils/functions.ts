export const displayDate = (timestamp:any) => {
  const date = new Date(timestamp);

  const monthNames = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // return day + ' ' + monthNames[monthIndex] + ' ' + year;
  return ` ${day} ${monthNames[monthIndex]} ${year}`;
};

export const displayMoney = (n:any) => {
  const format = new Intl.NumberFormat("fr-MG", {
    style: "currency",
    currency: "MGA",
  });

  // or use toLocaleString()
  return format.format(n);
};

export const calculateTotal = (arr:any) => {
  if (!arr || arr?.length === 0) return 0;

  const total = arr.reduce((acc:any, val:any) => acc + val, 0);

  return total;
};


function strOp(str:string) {
  return str.toString().replace(/\s/g, "").toLowerCase();
}

export const checkHasExistText = (text:string, textCheck:string) => {
  if (strOp(text).includes(strOp(textCheck))) {
    return true;
  }
};
export const displayShortMonth = (timestamp:any) => {
  const date = new Date(timestamp);

  const monthNames = [
    "Jan.",
    "Févr.",
    "Mars",
    "Avr.",
    "Mai",
    "Juin.",
    "Juill.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov",
    "Déc.",
  ];

  const monthIndex = date.getMonth();
  return `${monthNames[monthIndex]}`;
};

