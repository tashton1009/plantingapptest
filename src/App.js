import React, { useState } from 'react'
import PlantTable from './components/table'
import AddPlantForm from './components/addPlantForm'
import EditPlantForm from './components/editPlantForm'


const App = () => {

  const initialFormState = { id: null, name: '', sunlight: '' }

  const plantsData = [
    { id: 1, name: 'Aloe', sunlight: 'Full Sun' },
    { id: 2, name: 'Pothos', sunlight: 'Part Sun' },
    { id: 3, name: 'Spider Plant', sunlight: 'Full/Part Sun' },
  ]


  const addPlant = plant => {
    plant.id = plants.length + 1
    setPlants([...plants, plant])
  }
  const deletePlant = id => {
    setPlants(plants.filter(plant => plant.id !== id))
  }

  const updatePlant = (id, updatedPlant) => {
    setEditing(false)
    setPlants(plants.map(plant => (plant.id === id ? updatedPlant : plant)))
  }

  const editRow = plant => {
    setEditing(true)

    setCurrentPlant({ id: plant.id, name: plant.name, sunlight: plant.sunlight })
  }

  const [editing, setEditing] = useState(false)
  const [currentPlant, setCurrentPlant] = useState(initialFormState)
  const [plants, setPlants] = useState(plantsData)


  return (
    <div className="container">
      <h1>Plant BBs</h1>
      <div className="flex-row">
      <div className="flex-large">
        {editing ? (
          <div>
            <h2>Edit plant</h2>
            <EditPlantForm
              editing={editing}
              setEditing={setEditing}
              currentPlant={currentPlant}
              updatePlant={updatePlant}
            />
          </div>
        ) : (
          <div>
            <h2>Add Plant</h2>
            <AddPlantForm addPlant={addPlant} />
          </div>
        )}
      </div>
        <div>
          <PlantTable plants={plants} editRow={editRow} deletePlant={deletePlant} />
        </div>
      </div>
    </div>
  )
}

export default App
