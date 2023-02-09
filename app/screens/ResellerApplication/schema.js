export const Schema = [
  {
    name: "store_name",
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
    name: "proprietor_name",
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
    name: "phone1",
    validations: {
      required: {
        value: true,
        message: "This field is required.",
      },
      minLength: {
        value: 7,
        message: "Please enter a valid phone number.",
      },
    },
  },
  {
    name: "phone2",
    validations: {
      required: {
        value: true,
        message: "This field is required.",
      },
      minLength: {
        value: 7,
        message: "Please enter a valid phone number.",
      },
    },
  },
  {
    name: "store_address",
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
