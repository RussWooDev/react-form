export function validate(name, value) {
  switch (name) {
    case "name":
      if (!value || value.trim() === "") {
        return "Name is Required";
      } else {
        return "";
      }
    case "email":
      if (!value || value.trim() === "") {
        return "An Email is Required";
      } else {
        return "";
      }
    case "phoneNumber":
      if (!value || value.trim() === "") {
        return "A Phone Number is Required";
      } else if (value.length !== 8) {
        return "Invalid Number! Keep it to 8 digits!";
      } else {
        return "";
      }
    case "password":
      if (!value || value.trim() === "") {
        return "A Password is Required";
      } else if (value.match(/[^a-zA-z0-9]/)) {
        return "use only letters and numbers";
      } else if (value.length >= 16 || value.length <= 8) {
        return "Keep Password Between 8 to 16 Characters";
      } else {
        return "";
      }
    case "confirmPassword":
      let pass = document.querySelector("input[name=password]");
      if (!value || value.trim() === "") {
        return "re-enter your password";
      } else if (pass !== value) {
        return "The Passwords do not match";
      } else if (pass === value) {
        return "The Passwords match";
      } else {
        return "";
      }
    default:
      return "";
  }
}
