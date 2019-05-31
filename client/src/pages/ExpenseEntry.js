// client.src.pages.Expense.js

import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';


import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});
const frequencies = [
  {
    value: 'Daily',
    label: 'Daily',
  },
  {
    value: 'Weekly',
    label: 'Weekly',
  },
  {
    value: 'Monthly',
    label: 'Monthly',
  },
  {
    value: 'Yearly',
    label: 'Yearly',
  },
];

class Expense extends Component {

  state = {
    name: '',
    amount: '',
    frequency: "Daily",
    startDate: '',
    endDate: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    const tables = [
      {
        name: "expense",
        tableHeaders: [
          "Expense Type",
          // Change this to the weeks / month / years
          "Total",
        ],
        number: 2,
      },
    ]

    return (
      <div>
        <h1>Expense Entry</h1>
        <form noValidate autoComplete="off">
          <TextField
            id="filled-name"
            label="Expense Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="standard-number"
            label="Number"
            value={this.state.age}
            onChange={this.handleChange('amount')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="standard-select-frequency"
            select
            label="Select"
            className={classes.textField}
            value={this.state.frequency}
            onChange={this.handleChange('frequency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select the frequency"
            margin="normal"
          >
            {frequencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>))}
          </TextField>
          <TextField
            id="startDate"
            label="Start Date"
            type="date"
            defaultValue="2017-05-24"
            onChange={this.handleChange('startDate')}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="endDate"
            label="End Date"
            type="date"
            defaultValue=""
            onChange={this.handleChange('endDate')}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
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

export default withStyles(styles)(connect(
  mapStateToProps
)(Expense));
