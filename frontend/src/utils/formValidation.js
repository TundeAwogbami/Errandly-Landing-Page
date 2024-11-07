// const validateForm = (form) => {
//   const errors = {};

//   const name = (string) => {
//     if (string.trim().length < 3) {
//       errors.name = "Name is too short";
//     }
//   };

//   const phone = (string) => {
//     if (string.trim().length < 11) {
//       errors.phone = "Invalid phone number";
//     }
//   };

//   const email = (string) => {
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
//     if (!regex.test(string)) {
//       errors.email = "Email is not valid";
//     }
//   };

//   const password = (string) => {
//     const requirements = [
//       { regex: /.{8,}$/, message: "Minimum 8 characters" },
//       { regex: /.*[A-Z].*/, message: "At least one uppercase letter" },
//       { regex: /.*[a-z].*/, message: "At least one lowercase letter" },
//       { regex: /.*\d.*/, message: "At least one digit" },
//       { regex: /.*[@$!%*?&].*/, message: "At least one special character" },
//       { regex: /\S+/, message: "No whitespace" },
//     ];
//     requirements.forEach((requirement) => {
//       if (!requirement.regex.test(string)) {
//         errors.password = requirement.message;
//         return;
//       }
//     });
//   };
//   const keys = Object.keys(form);

//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     const value = form[key];
//     switch (key) {
//       case "name":
//         name(value);
//         break;
//       case "email":
//         email(value);
//         break;
//       case "phone":
//         phone(value);
//         break;
//       case "password":
//         password(value);
//         break;
//       default:
//         break;
//     }
//   }

//   return errors;
// };

// export default validateForm;
