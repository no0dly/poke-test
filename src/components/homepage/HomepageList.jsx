import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'

import styled from 'styled-components'

import api from '../../api'

import HomepageListItem from './HomepageListItem'

import * as actions from '../../actions'

class HomepageList extends Component {
  constructor(props) {
    super(props)

  }

  handlePageClick(data) {
    const { dispatch } = this.props
    const pageIndex = data

    // dispatch(actions.updatePage(pageIndex))
  }

  renderItems() {
    const pageNumber = 1
    const itemsPerList = 10
    const { pokeList } = this.props

    return api.filter(pokeList, '', pageNumber, itemsPerList).map((item) => {
      return <HomepageListItem { ...item } key={ item.id } />
    })
  }

  render() {
    const { pokeList } = this.props
    const initialItemsPerPage = 10
    if (pokeList.length < 1) { return false }

    return (
      <div>
        <ul className="columns is-multiline">
          { this.renderItems() }
        </ul>
        <ReactPaginate
          nextLabel={ 'next' }
          breakLabel={ <a href=''>...</a> }
          breakClassName={ 'break-me' }
          pageCount={ initialItemsPerPage }
          marginPagesDisplayed={ 2 }
          pageRangeDisplayed={ 5 }
          onPageChange={ this.handlePageClick }
          containerClassName={ 'pagination' }
          subContainerClassName={ 'pages pagination' }
          activeClassName={ 'active' }
        />
      </div>
    )
  }
}

const Wrap = styled.ul`
  .row {
    margin: 0;
  }
  td {
    vertical-align: middle!important;
    text-align: center!important;
  }
`

export default connect(
  (state) => {
    return {
      pokeList: state.pokeList
    }
  }
)(HomepageList)
