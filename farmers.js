
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";


export async function getAllFarmers() {
  const eggQueryText = "SELECT * FROM farmers"
  const eggResult = await pool.query(eggQueryText)
  return eggResult.rows
}

export async function getSingleFarmer(farmerId) {
  // Query the database and return the resource with a matching id or null
  const eggQueryText = "SELECT * FROM farmers WHERE farmer_id = $1"
  const eggResult = await pool.query(eggQueryText, [farmerId])
  //if no id???????
  return eggResult.rows[0]
}

export async function createNewFarmer(farmerBody) {
  // Query the database to create an resource and return the newly created resource
  const eggQueryText = "INSERT INTO farmers (name, contact_number, assigned_area) VALUES ($1, $2, $3)"
  const eggResult = await pool.query(eggQueryText, [farmerBody.name, farmerBody.contact_number, farmerBody.assigned_area])
}

export async function updateFarmer(farmerId, bodyData) {
  // Query the database to update the resource and return the newly updated resource or null
  const eggQueryText = "UPDATE farmers SET name = $2, contact_number = $3, assigned_area = $4 WHERE farmer_id = $1"
  const eggResult = await pool.query(eggQueryText, [farmerId, bodyData.name, bodyData.contact_number, bodyData.assigned_area])
  const updatedFarmer = await getSingleFarmer(farmerId)
  return updatedFarmer
}

export async function deleteFarmer(farmerId) {
  // Query the database to delete the resource and return the deleted resource or null
  const eggQueryText = "DELETE FROM farmers WHERE farmer_id = $1"
  const eggResult = await pool.query(eggQueryText, [farmerId])
}