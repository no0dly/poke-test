import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import HomepageList from './HomepageList'

import * as actions from '../../actions'

import loaderImg from '../../images/source.gif'

export class Homepage extends Component {
  componentDidMount() {
    const { dispatch, itemsPerPage } = this.props
    dispatch(actions.fetchPokeNamesList(itemsPerPage))
  }
  renderLoader() {
    const { loading } = this.props
    if (loading) {
      return (
        <Loader>
          <LoaderInner />
        </Loader>
      )
    }
  }
  render() {
    return (
      <div>
        <HomepageList />
        { this.renderLoader() }

      </div>
    )
  }
}

const Loader = styled.div`
  background: none repeat scroll 0 0 rgba(255, 255,255, 0.2);
  bottom: 0;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
`

const LoaderInner = styled.div`
  background-image: url(${loaderImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: rgba(255, 255,255, 0.2);
  height: 60px;
  width: 60px;
  margin-top: -30px;
  margin-left: -30px;
  left: 50%;
  top: 50%;
  position: absolute;
`

export default connect(
  (state) => {
    return {
      itemsPerPage: state.itemsPerPage,
      loading: state.loading
    }
  }
)(Homepage)
