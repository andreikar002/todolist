export function useIsEmpty(check) {
  //   console.log(check);
  // console.log(check, check);
  return (
    check === null ||
    check === undefined ||
    (check.hasOwnProperty("length") && check.length === 0) ||
    (check.constructor == Object && Object.keys(check).length === 0)
  );
}
