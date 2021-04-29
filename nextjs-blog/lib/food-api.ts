import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export async function fetchAndSetData(_startIdx, _endIdx) {
  console.log("Start fetch Food data...")

  let item = null
  await fetch(`http://openapi.foodsafetykorea.go.kr/api/${publicRuntimeConfig.apiKey}/${publicRuntimeConfig.serviceId}/json/${_startIdx}/${_endIdx}`)
    .then(response => response.json())
    .then(response => item = response.I2790.row)
    .catch(error => console.error(error))

  console.log("Got the data of food!")

  return item
}

// Object convert to Array
// not use now
export function foodJsonDataToArray(_data) {
  // _data === row: {key: value, key: value, key: value, ...}
  const oneSet = []

  try {
    for (const [key, value] of Object.entries(_data)) {
      oneSet.push([key, value])
    }
  } catch (error) {
    console.error(error)
    return error
  }

  return { ...oneSet }
}

