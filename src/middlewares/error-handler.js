module.exports = (error, req, res, next) => {
  console.error("MyError: ", error);
  res.status(500).json({
    success: false,
    message: error.message,
  });
  next(error);
};
