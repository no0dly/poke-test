import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'

import styled from 'styled-components'

import api from '../../api'

import HomepageListItem from './HomepageListItem'

import * as actions from '../../actions'

class HomepageList extends Component {
  handlePageClick(data) {
    const { dispatch } = this.props
    const pageIndex = data.selected + 1
    dispatch(actions.startUpdatePokeList(pageIndex, 10))
  }

  renderItems() {
    const { filteredList } = this.props
    return filteredList.map((item, idx) => {
      return <HomepageListItem { ...item } key={ item.id } />
    })
  }

  render() {
    const { pokeList, itemsPerPage, filteredListLen } = this.props
    const pageCount = Math.ceil(filteredListLen / itemsPerPage)
    if (pokeList.length < 1) { return false }

    return (
      <div>
        <ul className="columns is-multiline">
          { this.renderItems() }
        </ul>
        <PaginationWrap className="columns">
          <ReactPaginate
            nextLabel={ 'Next' }
            breakLabel={ <a href=''>...</a> }
            breakClassName={ 'break-me' }
            pageCount={ pageCount }
            marginPagesDisplayed={ 2 }
            pageRangeDisplayed={ 5 }
            onPageChange={ this.handlePageClick.bind(this) }
            containerClassName={ 'pagination' }
            subContainerClassName={ 'pages pagination' }
            activeClassName={ 'is-current' }
            pageLinkClassName={ 'pagination-link' }
          />
        </PaginationWrap>
      </div>
    )
  }
}

const PaginationWrap = styled.div`
  margin: 20px 0;
  justify-content: center;
  .is-current a {
    background-color: #00d1b2;
    border-color: #00d1b2;
    color: #fff;
  }
`

const mapStateToProps = (state) => {
  const { pokeList, currentPage, itemsPerPage, searchText } = state

  const filteredListArr = api.filter(pokeList, searchText, currentPage, itemsPerPage)
  const filteredList = filteredListArr[0]
  const filteredListLen = filteredListArr[1]

  return {
    pokeList,
    currentPage,
    itemsPerPage,
    searchText,
    filteredListLen,
    filteredList
  }
}

export default connect(mapStateToProps)(HomepageList)
