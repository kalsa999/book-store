import express from "express";
import { getAllBooks,deleteBook,addBook,getBookbyID } from "../controllers/books_controller.js";

import {
  requireKeycloakAuth,
  requireRole
} from "../middleware/keycloak.middleware.js";

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getBookbyID);

router.post("/", requireKeycloakAuth, addBook);

router.delete("/:id", requireKeycloakAuth, requireRole("ADMIN"), deleteBook);

export default router;