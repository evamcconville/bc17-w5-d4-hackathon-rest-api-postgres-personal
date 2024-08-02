import { pool } from "../index.js";



// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS eggs CASCADE;
        DROP TABLE IF EXISTS nests CASCADE;
        DROP TABLE IF EXISTS farmers CASCADE;
    `);

    // Create the farmers table
    await pool.query(`
        CREATE TABLE farmers (
            farmer_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            contact_number VARCHAR(15) NOT NULL,
            assigned_area VARCHAR(255) NOT NULL
        );
    `);

    // Create the nests table
    await pool.query(`
        CREATE TABLE nests (
            nest_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            location VARCHAR(255) NOT NULL,
            material VARCHAR(255) NOT NULL,
            capacity INT NOT NULL
        );
    `);

    // Create the eggs table with foreign keys to the nests and farmers tables
    await pool.query(`
        CREATE TABLE eggs (
            egg_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            type VARCHAR(255) NOT NULL,
            date_laid DATE NOT NULL,
            nest_id INT REFERENCES nests(nest_id),
            farmer_id INT REFERENCES farmers(farmer_id)
        );
    `);

    // Seed the farmers table
    await pool.query(`
        INSERT INTO farmers (name, contact_number, assigned_area)
        VALUES 
            ('Shelly Scrambler', '555-0101', 'Boogie Coop'),
            ('Benedict Yolkman', '555-0102', 'Splash Zone'),
            ('Eggbert Sunnyside', '555-0103', 'Punk Yard');
    `);

    // Seed the nests table
    await pool.query(`
        INSERT INTO nests (location, material, capacity)
        VALUES 
            ('Boogie Coop', 'Feather Pillows', 10),
            ('Splash Zone', 'Inflatable Pool Toys', 8),
            ('Punk Yard', 'Recycled Vinyl Records', 5);
    `);

    // Seed the eggs table
    await pool.query(`
        INSERT INTO eggs (type, date_laid, nest_id, farmer_id)
        VALUES 
            ('Funky Chicken', '2024-07-01', 1, 1),
            ('Disco Duck', '2024-07-02', 2, 2),
            ('Punk Rock Pigeon', '2024-07-03', 3, 3);
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();