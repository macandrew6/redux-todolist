export const uniqueId = () => {
  let date = new Date();
  return date.getTime();
};