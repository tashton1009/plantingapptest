import React, { useState } from 'react'

const AddPlantForm = props => {

  const initialFormState = { id: null, name: '', sunlight: ''}
  const [plant, setPlant] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setPlant({ ...plant, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!plant.name || !plant.sunlight) return

        props.addPlant(plant)
        setPlant(initialFormState)
      }}
    >

      <label> Name </label>
      <input type="text" name="name" value={plant.name} onChange={handleInputChange}/>
      <label> Sunlight </label>
      <input type="text" name="sunlight" value={plant.sunlight} onChange={handleInputChange}/>
      <button> Add New Plant </button>
    </form>
  )
}

export default AddPlantForm
