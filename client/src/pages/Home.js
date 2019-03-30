// client.src.pages.Home.js

import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
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
        ]
      },
      {
        name: "expense",
        tableHeaders: [
          "Expense Type",
          // Change this to the weeks / month / years
          "Total",
        ]
      },
      {
        name: "consolidated",
        tableHeaders: [
          "Net Change",
          // Change this to the weeks / month / years
          "Total",
        ]
      }
    ]

    return (
      <div>
        <h1>Home</h1>
        {tables.map(tableName => (
          <Table>
            <TableHead>
              <TableRow>
                {tableName.tableHeaders.map(header => (
                  <TableCell>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
          </Table>))}
        </div>
    );
  }
}

export default Home;
