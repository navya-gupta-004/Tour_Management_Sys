import Tour from "../models/Tour.js";
//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      messege: "successfully created",
      data: savedTour,
    });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({
        success: false,
        message: "Duplicate key error: A tour with this title already exists.",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Failed, try again.",
        error: err,
      });
    }
  }
};
//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed, try again.",
      error: err,
    });
  }
};

//deleteTour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed, try again.",
      error: err,
    });
  }
};

export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id);
    res.status(200).json({
      success: true,
      message: "Successfully",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found.",
      error: err,
    });
  }
};

export const getAllTour = async (req, res) => {
  try {
    const tour = await Tour.find({});
    res.status(200).json({
      success: true,
      message: "Successfully ",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found.",
      error: err,
    });
  }
};
