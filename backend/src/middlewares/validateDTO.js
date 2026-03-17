import AppError from "../utils/AppError.js";

function validateDTO(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message,
      }));

      return next(new AppError("Validation error", 400, errors));
    }

    req.validatedData = result.data;
    next();
  };
}

export default validateDTO;
