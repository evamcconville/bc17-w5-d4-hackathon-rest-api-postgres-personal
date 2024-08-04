// Import the required modules
import express from "express";

// Import your helper functions for your first resource here
import {
  getAllFarmers,
  getSingleFarmer,
  createNewFarmer,
  updateFarmer,
  deleteFarmer,
} from "./farmers.js";

// Import your helper functions for your second resource here
// import {
//   getResourceTwo,
//   getResourceTwoById,
//   createResourceTwo,
//   updateResourceTwoById,
//   deleteResourceTwoById,
// } from "./resource_two.js";

// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

//Helment stuff
import helmet from 'helmet'
app.use(helmet())

// //test
// app.get("/egg/", async function (req, res) {
//   console.log("Eggtastic");
//   res.status(200).send("You've be sent an e-egg");
// });

// Farmer Handlers

// Endpoint to retrieve all farmers
app.get("/egg/farmers", async function (req, res) {
  try {
    const allFarmerData = await getAllFarmers()
    res.status(200).json({
      status: "eggcellent",
      data: allFarmerData
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "bad egg",
      data: null
    });
  }
})


// Endpoint to retrieve a farmer by id
app.get("/egg/farmers/:id", async function (req, res) {
  const requestedId = req.params.id;
  try {
    const singleFarmerData = await getSingleFarmer(requestedId)
    res.status(200).json({
      status: "eggcellent",
      data: singleFarmerData
    })
  } catch (error) {
    res.status(500).json({
      status: "bad egg our end",
      data: null
    })
  }
});

// Endpoint to create a new farmer
app.post("/egg/farmers", async function (req, res) {
  const newFarmerBody = req.body
  if (!newFarmerBody) {
    res.status(400).json({
      status: "no farmer given in body",
      data: null
    })
  } try {
    const newFarmer = await createNewFarmer(newFarmerBody)
    const allFarmerData = await getAllFarmers()
    res.status(200).json({
      status: "eggcellent",
      data: allFarmerData.slice(-1)
    })
  } catch (error) {
    res.status(500).json({
      status: "bad egg our end",
      data: null
    })
  }
});

// Endpoint to update a specific <resource_one> by id
app.patch("/egg/farmers/:id", async function (req, res) {
  const reqPatchId = req.params.id
  const reqBodyData = req.body
  try {
    const updatedFarmer = await updateFarmer(reqPatchId, reqBodyData)
    res.status(200).json({
      status: "eggcellent",
      data: updatedFarmer
    })
  } catch (error) {
    res.status(500).json({
      status: "bad egg our end",
      data: null
    })
  }
});

// Endpoint to delete a specific <resource_one> by id
app.delete("/egg/farmers/:id", async function (req, res) {
  const reqDeleteId = req.params.id
  if (!reqDeleteId) {
    res.status(400).json({
      status: "no id given",
      data: null
    })
  } try {
    await deleteFarmer(reqDeleteId)
    const allFarmerData = await getAllFarmers()
    res.status(200).json({
      status: "eggcellent",
      data: allFarmerData
    })
  } catch (error) {
    res.status(500).json({
      status: "bad egg our end",
      data: null
    })
  }
});




// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/resourcetwo/", async function (req, res) {
    const authors = await getAuthors();
    res.status(200).json({ status: "success", data: authors });
  });
  
  // Endpoint to retrieve a <resource_twos> by id
  app.get("/resourcetwo/:id", async function (req, res) {
  });
  
  // Endpoint to create a new <resource_twos>
  app.post("/resourcetwo/", async function (req, res) {
  });
  
  // Endpoint to update a specific <resource_twos> by id
  app.patch("/resourcetwo/:id", async function (req, res) {
  });
  
  // Endpoint to delete a specific <resource_twos> by id
  app.delete("/resourcetwo/:id", async function (req, res) {
  });





// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});