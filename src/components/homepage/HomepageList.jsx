import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import styled from 'styled-components'

import api from '../../api'

import HomepageListItem from './HomepageListItem'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

import * as actions from '../../actions'

class HomepageList extends Component {
  imageFormatter(cell, row) {
    return `<img src=${cell} alt='image' />`
  }

  onPageChange(page, sizePerPage) {
    const { dispatch } = this.props
    dispatch(actions.startUpdatePokeList(page, sizePerPage))
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
    const { pokeList, initialItemsPerPage } = this.props
    if (pokeList.length < 1) { return false }

    return (
      <ul className="columns is-multiline">
        { this.renderItems() }
      </ul>
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
