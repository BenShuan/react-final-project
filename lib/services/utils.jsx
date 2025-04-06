export const setNestedKey = (obj, path, value) => {
  if (path.length === 1) {
    obj[path] = value
    return
  }
  return setNestedKey(obj[path[0]], path.slice(1), value)
}

export const getNestedKey = (obj, path) => {
  const keys=path.split('.')

  if (keys.length === 1) {
    return obj[keys[0]]
  }
  return getNestedKey(obj[keys[0]], keys.slice(1).join('.'))
}

