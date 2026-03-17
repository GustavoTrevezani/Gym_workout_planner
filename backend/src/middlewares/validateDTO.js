import AppError from "../utils/AppError.js";

function validateDTO(schema, source = "body") {
  return (req, res, next) => {
    const data = req[source];

    const result = schema.safeParse(data);

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message,
      }));

      return next(new AppError("Validation error", 400, errors));
    }

    if (source === "body") req.validatedBody = result.data;
    if (source === "params") req.validatedParams = result.data;

    next();
  };
}

export default validateDTO;
