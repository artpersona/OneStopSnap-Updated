export const Schema = [
  {
    name: "user_email",
    validations: {
      required: {
        value: false,
        message: "This field is required.",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Please enter a valid email address.",
      },
    },
  },
  {
    name: "order_notes",
    validations: {
      required: {
        value: false,
      },
      maxLength: {
        value: 30,
        message: "",
      },
    },
  },
  {
    name: "full_name",
    validations: {
      required: {
        value: true,
        message: "This field is required.",
      },
      maxLength: {
        value: 20,
        message: "",
      },
    },
  },
  {
    name: "phone",
    validations: {
      required: {
        value: true,
        message: "This field is required.",
      },
      minLength: {
        value: 11,
        message: "Please enter a valid phone number.",
      },
    },
  },
  {
    name: "other_phone",
    validations: {
      required: {
        value: false,
      },
      minLength: {
        value: 11,
        message: "Please enter a valid phone number.",
      },
    },
  },
  {
    name: "full_address",
    validations: {
      required: {
        value: true,
        message: "This field is required.",
      },
      maxLength: {
        value: 30,
        message: "",
      },
    },
  },
  {
    name: "address_notes",
    validations: {
      required: {
        value: true,
        message: "This field is required.",
      },
      maxLength: {
        value: 30,
        message: "",
      },
    },
  },
];
