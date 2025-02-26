const removeDuplicates = (items) => {
  const seen = new Set()
  const uniqueObjects = []

  items.forEach((obj) => {
    if (!seen.has(obj.id)) {
      seen.add(obj.id)
      uniqueObjects.push(obj)
    }
  })
  return uniqueObjects
}

export default { removeDuplicates }
