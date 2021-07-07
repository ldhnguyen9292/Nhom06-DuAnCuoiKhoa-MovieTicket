function QPGetArrayValue(queryParams) {
  if (!queryParams.get("key")) {
    return ["Dashboard"];
  }

  let array = [];
  const key = queryParams.get("key");
  const sub = queryParams.get("sub");
  if (key) {
    array.push(key);
  }
  if (sub) {
    array.push(sub);
  }
  return array;
}

export const AdminService = {
  QPGetArrayValue,
};
