export const Schema = [
  {
    name: "email",
    validations: {
      required: {
        value: true,
        message: "This field is required.",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Please enter a valid email address.",
      },
    },
  },
  {
    name: "password",
    validations: {
      required: {
        value: true,
        message: "This field is required.",
      },
      minLength: {
        value: 4,
        message: "Password must be atleast 4 characters",
      },
    },
  },
];
