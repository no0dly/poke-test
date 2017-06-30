import React, { Component } from 'react'

import styled from 'styled-components'

// import * as actions from '../../actions'

class HomepageListItem extends Component {
  // imageFormatter(cell, row) {
  //   return `<img src=${cell} alt='image' />`
  // }
  //
  // onPageChange(page, sizePerPage) {
  //   const { dispatch } = this.props
  //   dispatch(actions.startUpdatePokeList(page, sizePerPage))
  // }

  render() {
    // const { pokeList, initialItemsPerPage } = this.props
    // if (pokeList.length < 1) { return false }
    const { image, name, types, attack, defense, hp, speed } = this.props || ''
    return (
      <Item className="column is-one-quarter">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={ image } alt="Image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      Name:
                    </td>
                    <td>
                      { name }
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Types:
                    </td>
                    <td>
                      { types }
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Attack:
                    </td>
                    <td>
                      { attack }
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Deffence:
                    </td>
                    <td>
                      { defense }
                    </td>
                  </tr>
                  <tr>
                    <td>
                      HP:
                    </td>
                    <td>
                      { hp }
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Speed:
                    </td>
                    <td>
                      { speed }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Item>
    )
  }
}

const Item = styled.li`
  .card-content {
    padding: 1.5rem 0;
  }
`

export default HomepageListItem
