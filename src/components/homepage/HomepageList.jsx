import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'

// import styled from 'styled-components'

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
    const { pokeList, currentPage, itemsPerPage, searchText } = this.props

    return api.filter(pokeList, searchText, currentPage, itemsPerPage).map((item, idx) => {
      return <HomepageListItem { ...item } key={ item.id || Math.random() } />
    })
  }

  render() {
    const { pokeList, itemsPerPage } = this.props
    const pageCount = Math.ceil(pokeList.length / itemsPerPage)
    if (pokeList.length < 1) { return false }

    return (
      <div>
        <ul className="columns is-multiline">
          { this.renderItems() }
        </ul>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <div className="pagination">
              <ReactPaginate
                nextLabel={ 'next' }
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// const Wrap = styled.ul`
//   .row {
//     margin: 0;
//   }
//   td {
//     vertical-align: middle!important;
//     text-align: center!important;
//   }
// `

export default connect(
  (state) => {
    return {
      pokeList: state.pokeList,
      currentPage: state.currentPage,
      itemsPerPage: state.itemsPerPage,
      searchText: state.searchText
    }
  }
)(HomepageList)
