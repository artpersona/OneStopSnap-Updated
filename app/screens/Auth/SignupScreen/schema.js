export const Schema = [
    {
      name: 'email',
      validations: {
        required: {
          value: true,
          message: "This field is required."
        },
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "Please enter a valid email address."
        }
      }
    },
    {
      name: 'first_name',
      validations: {
        required: {
          value: true,
          message: "This field is required."
        },
        maxLength: {
          value: 20,
          message: ""
        }
      }
    },
    {
      name: 'last_name',
      validations: {
        required: {
          value: true,
          message: "This field is required."
        },
        maxLength: {
          value: 20,
          message: ""
        }
      }
    },
    {
      name: 'mobile',
      validations: {
        required: {
          value: true,
          message: "This field is required."
        },
        minLength: {
          value: 11,
          message: "Please enter a valid phone number."
        }
      }
    },
    {
      name: 'password',
      validations: {
        required: {
          value: true,
          message: "This field is required."
        },
        minLength: {
          value: 8,
          message: "Password must be atleast 8 characters",
        },
      }
    }
  ];