import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import styled from 'styled-components'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'


import * as actions from '../../actions'

class HomepageTable extends Component {
  imageFormatter(cell, row) {
    return `<img src=${cell} alt='image' />`
  }

  onPageChange(page, sizePerPage) {
    const { dispatch } = this.props
    dispatch(actions.startUpdatePokeList(page, sizePerPage))
  }

  render() {
    const { pokeList, initialItemsPerPage } = this.props
    if (pokeList.length < 1) { return false }
    debugger
    // const options = {
    //   sizePerPage: initialItemsPerPage,
    //   onPageChange: this.onPageChange.bind(this)
    // }
    // return (
    //   <Wrap>
    //     <BootstrapTable
    //       data={ pokeList }
    //       pagination
    //       options={ options }>
    //       <TableHeaderColumn isKey dataField="image"
    //         dataFormat={ this.imageFormatter }>
    //         Image
    //       </TableHeaderColumn>
    //       <TableHeaderColumn
    //         dataField="name"
    //         filter={ { type: 'TextFilter', delay: 1000 } }>
    //         Name
    //       </TableHeaderColumn>
    //       <TableHeaderColumn dataField="types">Type</TableHeaderColumn>
    //       <TableHeaderColumn dataField="attack">Attack</TableHeaderColumn>
    //       <TableHeaderColumn dataField="defense">Deffence</TableHeaderColumn>
    //       <TableHeaderColumn dataField="hp">HP</TableHeaderColumn>
    //       <TableHeaderColumn dataField="speed">Speed</TableHeaderColumn>
    //     </BootstrapTable>
    //   </Wrap>
    // )
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={ pokeList[0].image } alt="Image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            Name: { pokeList[0].name }
            Types: { pokeList[0].types }
            Attack: { pokeList[0].attack }
            Deffence: { pokeList[0].deffence }
            HP: { pokeList[0].hp }
            Speed: { pokeList[0].speed }
          </div>
        </div>
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
)(HomepageTable)
