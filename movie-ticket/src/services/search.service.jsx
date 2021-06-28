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
  let result = query.get(key) ? query.get(key) : error;
  if (isFinite(result)) {
    result = parseInt(result);
  }
  return result;
}

function QPUpdateValue(query, queryParams) {
  if (!queryParams) {
    return;
  }
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
  });
}

module.exports = {
  createQPString,
  QPGetValue,
  QPUpdateValue,
  filterDataByName,
};
