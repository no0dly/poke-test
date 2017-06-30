export default {
  filter(arr, filterText = '', pageIndex = 1, itemsPerPage) {
    let filteredArr = arr
    let minItemIndex = (pageIndex) * (itemsPerPage ) - itemsPerPage
    let maxItemIndex = (pageIndex) * (itemsPerPage )

    // filter by filter text
    if (filterText.length > 0) {
      filteredArr = filteredArr.filter((item) => {
        let name = item.name.toLowerCase()
        return name.indexOf(filterText.toLowerCase()) !== -1
      })
    }
    filteredArr = filteredArr.filter((item, idx) => {
      return (minItemIndex <= idx && maxItemIndex > idx)
    })
    return filteredArr
  }
}
