export function formattedTime(value) {
  const date = new Date(value * 1000);
  let mm = date.getUTCMinutes(),
  ss = date.getUTCSeconds();

  mm = (mm < 10 ? '0' : '') + mm;
  ss = (ss < 10 ? '0' : '') + ss;
  return mm + ':' + ss;
}
