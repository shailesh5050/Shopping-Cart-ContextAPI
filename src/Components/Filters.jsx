/* eslint-disable no-unused-vars */
import React from 'react'
import { Cart } from '../Context/context'
import { useContext } from 'react'
const Filtes = () => {
  const {filterState,filterDispatch } = useContext(Cart)
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if(id=='smartphones' && checked){
      filterDispatch({ type: 'ADD_CHECK_FILTER', payload:id });
    }
    if(id=='smartphones' && !checked){
      filterDispatch({ type: 'REMOVE_CHECK_FILTER', payload:id });
    }
    if(id=='laptops' && checked){
      filterDispatch({ type: 'ADD_CHECK_FILTER', payload:id });
    }
    if(id=='laptops' && !checked){
      filterDispatch({ type: 'REMOVE_CHECK_FILTER', payload:id });
    }
     
  };

  const handleRadioChange = (event) => {
    const { id } = event.target;
    filterDispatch({ type: 'ADD_RADIO_FILTER', payload:id });
  }
  return (
    <div className='filter-container'>
      <h1>Filters</h1>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='smartphones'
          onChange={handleCheckboxChange}
        />
        <label className='form-check-label' >
          Smarphones
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='laptops'
          onChange={handleCheckboxChange}
        />
        <label className='form-check-label' >
          Laptops
        </label>
      </div>

      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='exampleRadios'
          id='ascending'
          value='ascending'
          onChange={handleRadioChange}
        />
        <label className='form-check-label'>
          Ascending
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='exampleRadios'
          id='descending'
          value='descending'
          onChange={handleRadioChange}
        />
        <label className='form-check-label' >
          Descending
        </label>
      </div>
    </div>
  )
}

export default Filtes
