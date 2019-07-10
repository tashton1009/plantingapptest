import React from 'react'

const PlantTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Sunlight Needed</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.plants.length > 0 ? (
      props.plants.map(plant => (
      <tr key={plant.id}>
        <td>{plant.name}</td>
        <td>{plant.sunlight}</td>
        <td>
          <button onClick={() => {props.editRow(plant)}} className="button muted-button">Edit</button>
          <button onClick={() => props.deletePlant(plant.id)} className="button muted-button">Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={3}>No users</td>
    </tr>
  )}
    </tbody>
  </table>
)

export default PlantTable
