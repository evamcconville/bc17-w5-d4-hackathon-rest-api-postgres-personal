## How to set up this eggy program:

# Close all terminals
# In a new teminal execute
-'npm install'

## How to run this eggy program:

# Close all terminals
# In a new terminal execute
-'npm run egg'

# To reset database and seed database 
- npm reset database

## Database information

-Entities
EGGS: Represents individual eggs, with attributes for type, date laid, and foreign keys for the nest and farmer.
NESTS: Represents nests, including details about location, material, and capacity.
FARMERS: Represents farmers, with information on their names, contact numbers, and assigned areas.
Relationships:

Eggs are linked to nests via the NestID, indicating where each egg was laid.
Eggs are linked to farmers via the FarmerID, indicating which farmer collected