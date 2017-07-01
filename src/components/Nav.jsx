import React from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'

import styled from 'styled-components'

import * as actions from '../actions'

const Nav = (props) => {
  const onChange = (e) => {
    props.dispatch(actions.startUpdatePokeList(1, e.target.value))
  }

  const onSearchChange = (e) => {
    props.dispatch(actions.startSetSearchText(e.target.value))
  }
  return (
    <nav className="nav has-shadow">
      <div className="container">
        <div className="nav-left">
          <Link to="/" className="nav-item">
            <FontAwesome
              name="ravelry"
              size="2x"
            />
          </Link>
          <Link className="nav-item is-tab is-hidden-mobile is-active">Home</Link>
          <SearchWrap className="field">
            <p className="control">
              <input
                className="input is-primary"
                type="search"
                placeholder="search pokemon"
                onChange={ onSearchChange } />
            </p>
          </SearchWrap>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
          <SelectWrap className="field">
            <p className="control">
              <span className="select">
                <select defaultValue={ 10 } onChange={ onChange }>
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </span>
            </p>
          </SelectWrap>
          <Link to="/" className="nav-item is-tab is-hidden-tablet is-active">Home</Link>
          <a className="nav-item is-tab">Log out</a>
        </div>
      </div>
    </nav>
  )
}

const SearchWrap = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`

const SelectWrap = styled.div`
  margin-top: 10px;
`

export default connect()(Nav)
