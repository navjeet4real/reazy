const Validator = require("validator");
const isEmpty = require("./is-empty");

const {
password: passwordRegex,
full_name: full_name,
} = require("./constants");

module.exports = function validateRegisterInput(data) {
    let errors = {};

  data.full_name = !isEmpty(data.full_name) ? data.full_name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";


  if (Validator.isEmpty(data.full_name)) {
    errors.full_name = "Please enter your full name *";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter your email *";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Please enter a valid email *";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter your password *";
  } else if (data.password.length < 8) {
    errors.password = "must be atleast 8 charaters *";
  } else if (!data.password.match(passwordRegex)) {
    errors.password = "Please enter an valid password  *";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}