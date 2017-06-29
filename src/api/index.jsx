export default {
  filter(arr, filterText = '', pageIndex, itemsPerPage) {
    let filteredArr = arr
    let minItemIndex = (pageIndex) * (itemsPerPage - 1) - itemsPerPage
    let maxItemIndex = (pageIndex) * (itemsPerPage - 1)
    // filter by filter text
    if (filterText.length > 0) {
      filteredArr = filteredArr.filter((item) => {
        let name = item.name.toLowerCase()
        return name.indexOf(filterText.toLowerCase()) !== -1
      })
    }
    filteredArr = filteredArr.filter((item, idx) => {
      return (minItemIndex < idx && maxItemIndex > idx)
    })
    return filteredArr
  }
}
