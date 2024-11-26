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
    res.status(500).json({
      success: false,
      message: "Failed, try again.",
      error: err,
    });
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
//get single tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
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
//Get All tour
export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const tour = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: tour.length,
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

//get tour by search

export const getTourBySearch = async (req, res) => {
  //i means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    const tour = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
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

//get feature tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully ",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,

      message: "not found.",
      error: err,
    });
  }
};

//get Tour Count

export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount({});

    res.status(200).json({
      success: true,
      message: "Successfully ",
      data: tourCount,
    });
  } catch (err) {
    res.status(404).json({
      success: false,

      message: "not found.",
      error: err,
    });
  }
};
