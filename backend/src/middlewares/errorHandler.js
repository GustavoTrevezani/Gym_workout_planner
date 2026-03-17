function errorHandler(err, req, res, next) {
  console.error(err);

  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    ...(err.errors && { errors: err.errors }),
  });
}

export default errorHandler;
