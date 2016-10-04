import React from 'react'
import { connect } from 'react-redux'
import { changeValue } from '../actions'

let UpdateGraph = ({ dispatch, years }) => {
  let input, year = years[0];

  let onYearChange = (e) => {
    year = e.target.value;
  };

  let onSubmitForm = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }

    dispatch(changeValue(year, input.value))
    input.value = ''
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>Change value:</div>

        <select onChange={onYearChange}>
          {years.map(year =>
            <option value={year} key={year}>{year}</option>
          )}
        </select>

        <input name="newValue" type="number" min="1" max="1000" placeholder="0" ref={node => {
          input = node
        }} />

        <button type="submit">
          Change
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {

  return ({
  years: state.rankings.map((ranking) => ranking.year)
}) };

UpdateGraph = connect(mapStateToProps)(UpdateGraph)

export default UpdateGraph
