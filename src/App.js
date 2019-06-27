import React, { useState } from 'react'
import PlantTable from './components/table'
import AddPlantForm from './components/addPlantForm'

const App = () => {

  const plantsData = [
  { id: 1, name: 'Aloe', sunlight: 'Full Sun' },
  { id: 2, name: 'Pothos', sunlight: 'Part Sun' },
  { id: 3, name: 'Spider Plant', sunlight: 'Full/Part Sun' },
]

const addPlant = plant => {
  plant.id = plants.length + 1
  setPlants([...plants, plant])
}

const [plants, setPlants] = useState(plantsData)

  return (
    <div className="container">
      <h1>Plant BBs</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Plant</h2>
        </div>
        <div className="flex-large">
          <h2>View Plants</h2>
          <AddPlantForm addPlant={addPlant} />
        </div>
        <div>
          <PlantTable plants={plants} />
        </div>
      </div>
    </div>
  )
}

export default App
