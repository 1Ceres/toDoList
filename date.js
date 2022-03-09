
exports.getDate = getDate;
exports.getDay = getDay;
function getDate(){

  const today = new Date();

const option = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

let day = today.toLocaleDateString("en-US", option);
return(day);
}
function getDay(){

  let today = new Date();

const option = {
  weekday: "long",
};

let day = today.toLocaleDateString("en-US", option);
return(day);
}
