// client.src.pages.Home.js

import React, { Component } from "react";
import { connect } from "react-redux";

import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Home extends Component {

  render() {
    const tables = [
      {
        name: "income",
        tableHeaders: [
          "Wage Type",
          // Change this to the weeks / month / years
          "Total",
        ],
        number: 1,
      },
      {
        name: "expense",
        tableHeaders: [
          "Expense Type",
          // Change this to the weeks / month / years
          "Total",
        ],
        number: 2,
      },
      {
        name: "consolidated",
        tableHeaders: [
          "Net Change",
          // Change this to the weeks / month / years
          "Total",
        ],
        number: 3,
      }
    ]
    console.log(this.props.isAuth)
    return (
      <div>
        <h1>Home</h1>
        
        {(this.props.isAuth) ?        
          tables.map(tableName => (
          <Table key={tableName.number}>
            <TableHead key={tableName.number}>
              <TableRow key={tableName.number}>
                {tableName.tableHeaders.map((header, i) => (
                  <TableCell key={i}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
          </Table>))
          : ""}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps
)(Home);
