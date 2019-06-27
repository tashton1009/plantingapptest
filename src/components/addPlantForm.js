import React, { useState } from 'react'

const AddPlantForm = props => {
  return (
    <form>
      <label> Name </label>
      <input type="text" name="name" value=""/>
      <label> Sunlight </label>
      <input type="text" name="sunlight" value=""/>
      <button> Add New Plant </button>
    </form>
  )
}

export default AddPlantForm
