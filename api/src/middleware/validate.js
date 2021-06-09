exports.validate = validator => (req, res, next) => {
  try {
    validator(req.body)
    next();
  } catch(error) {
    next(error);
  }
};
