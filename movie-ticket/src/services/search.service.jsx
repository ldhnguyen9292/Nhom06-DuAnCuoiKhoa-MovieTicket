function createQPString(queryParams) {
  if (!queryParams) {
    return;
  }
  let searchString = "?";
  for (const [key, value] of Object.entries(queryParams)) {
    searchString += `${key}=${value}&`;
  }
  return searchString;
}

function QPGetValue(query, key, error) {
  let result = query.get(key);
  if (!result) {
    result = error;
  } else if (isFinite(result)) {
    result = parseInt(result);
  }
  return result;
}

function QPUpdateValue(query, queryParams) {
  let object = {};
  for (const [key, value] of Object.entries(queryParams)) {
    object = { ...object, [key]: QPGetValue(query, key, value) };
  }
  return object;
}

function filterDataByName(array, keyName) {
  return array.filter((value) => {
    const tenPhim = value.tenPhim.toLowerCase();
    const key = keyName ? keyName.toLowerCase() : "";
    const result = tenPhim.indexOf(key);
    if (result >= 0) return value;
    return "";
  });
}

export const SearchService = {
  createQPString,
  QPGetValue,
  QPUpdateValue,
  filterDataByName,
};
