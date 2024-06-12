import express from 'express';
import { create, deletes, getAll, getOne, update  } from '../controller/nodesController.js';

const route = express.Router();

route.post("/create", create);
route.get("/notes", getAll);
route.get("/getOne/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deletes);

export default route;