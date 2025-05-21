const express = require("express");
const {
    createResume,
    getUserResumes,
    getResumeById,
    updateResume,
    deleteResume,
} = require("../controllers/resumeController");
const { protect } = require("../middlewares/authMiddleware");
const { uploadResumeImages } = require("../controllers/uploadImages")

const router = express.Router();


router.post("/", protect, createResume);   //create resume
router.get("/", protect, getUserResumes);   //get resume
router.get("/:id", protect, getResumeById);   //Get Resume By Id
router.put("/:id", protect, updateResume);   //Update resume
router.put("/:id/upload-images", protect, uploadResumeImages);

router.delete("/:id", protect, deleteResume);

module.exports = router;