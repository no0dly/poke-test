import React, { Component } from 'react'
import { connect } from 'react-redux'

import HomepageTable from './HomepageTable'

import * as actions from '../../actions'

const initialItemsPerPage = 10

export class Homepage extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(actions.fetchPokeNamesList(initialItemsPerPage))
  }
  render() {
    return (
      <div>
        <HomepageTable initialItemsPerPage={ initialItemsPerPage } />
      </div>
    )
  }
}

export default connect()(Homepage)
