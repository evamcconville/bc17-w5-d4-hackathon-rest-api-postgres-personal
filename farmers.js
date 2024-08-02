
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getAllFarmers() {
  const eggQueryText = "SELECT * FROM farmers"
  const eggResult = await pool.query(eggQueryText)
  return eggResult.rows
}

export async function getSingleFarmer(id) {
  // Query the database and return the resource with a matching id or null
  const eggQueryText = "SELECT * FROM farmers WHERE farmer_id = $1"
  const eggResult = await pool.query(eggQueryText, [id]);
  return result.rows[0] || null;
}

export async function createResourceOne(resource) {
  // Query the database to create an resource and return the newly created resource
}

export async function updateResourceOneById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteResourceOneById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}