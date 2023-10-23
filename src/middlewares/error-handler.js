module.exports = (error, req, res, next) => {
  if (error.name === "ValidationError")
    res.status(422).json({
      success: false,
      message: error.message,
    });
  else if (error.name === "MongoServerError" && error.code === 11000) {
    const message = Object.keys(error.keyValue)
      .map(
        (key) => `${key} must be unique, ${error.keyValue[key]} already exist`
      )
      .join("&");
    res.status(422).json({
      success: false,
      message: message,
    });
  } else
    res.status(500).json({
      success: false,
      message: error.message,
    });
  next(error);
};
