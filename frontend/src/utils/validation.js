export const validateName = (string, min = 3) => {
  if (string.trim().length < min) {
    return "Name is too short";
  }
  if (string.trim().length > 255) {
    return "Name is cannot be more than 255 characters";
  }
  return null;
};

export const validateMessage = (string) => {
  if (string.trim().length < 3) {
    return "Message is too short";
  }
  if (string.trim().length > 255) {
    return "Message is cannot be more than 255 characters";
  }
  return null;
};

export const validatePhone = (string) => {
  if (string.trim().length < 11) {
    return "Invalid phone number";
  }
  return null;
};

export const validateEmail = (string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  if (!regex.test(string)) {
    return "Email is not valid";
  }
  return null;
};

export const validatePassword = (string) => {
  const requirements = [
    { regex: /.{8,}$/, message: "Minimum 8 characters" },
    { regex: /.*[A-Z].*/, message: "At least one uppercase letter" },
    { regex: /.*[a-z].*/, message: "At least one lowercase letter" },
    { regex: /.*\d.*/, message: "At least one digit" },
    { regex: /.*[@$!%*?&].*/, message: "At least one special character" },
    { regex: /\S+/, message: "No whitespace" },
  ];
  for (let requirement of requirements) {
    if (!requirement.regex.test(string)) {
      return requirement.message; // Return the first error message
    }
  }
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  return null;
};

export const signUpValidationSchema = {
  name: { required: true, validate: validateName },
  email: { required: true, validate: validateEmail },
  phone: { required: true, validate: validatePhone },
  password: { required: true, validate: validatePassword },
  confirmPassword: {
    required: true,
    validate: (confirmPassword, form) =>
      validateConfirmPassword(form.password, confirmPassword),
  },
};

export const signInValidationSchema = {
  email: { required: true, validate: validateEmail },
  password: { required: true, validate: validatePassword },
};

export const validateForm = (form, schema) => {
  const errors = {};
  for (const field in schema) {
    const rule = schema[field];
    const value = form[field];
    if (rule.required && (!value || !value.trim())) {
      errors[field] = `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } is required`;
    }

    if (value && rule.validate) {
      const error = rule.validate(value, form);
      if (error) {
        errors[field] = error;
      }
    }
  }
  return errors;
};
