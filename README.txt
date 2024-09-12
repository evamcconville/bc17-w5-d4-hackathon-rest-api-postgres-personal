## How to set up this eggy program:
# In a new teminal execute
-'npm install'

## How to run this eggy program:
# Close all terminals
# In a new terminal execute
-'npm run egg'

## How to reset database and seed database 
# In a new teminal execute
-'npm run reset-database'

## Database information

-Entities
EGGS: Represents individual eggs, with attributes for type, date laid, and foreign keys for the nest and farmer.
NESTS: Represents nests, including details about location, material, and capacity.
FARMERS: Represents farmers, with information on their names, contact numbers, and assigned areas.
Relationships:

Eggs are linked to nests via the NestID, indicating where each egg was laid.
Eggs are linked to farmers via the FarmerID, indicating which farmer collected

# SECURITY

## SQL sanitation

-Sanitize and Validate User Input
Sanitize all user inputs to ensure they don't contain malicious characters. You can use libraries like validator or express-validator to clean and validate inputs.

-Stored procedure 
Prevent second order SQL injections attacks

# SECURITY AUTOMATION
Git Hook automation (pre-commit or pre-push) - run tests, lint code or format code using the "Husky" npm package
Github Action automation (pre-commit/merge to "main") - Snyk, Gitleaks, CodeQL