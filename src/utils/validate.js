const checkValidData = (isSignInMode, name, email, password) => {
  // Trim inputs
  name = name?.trim();
  email = email?.trim();
  password = password?.trim();

  // Regex
  const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Name validation (only for Sign Up)
  if (!isSignInMode) {
    if (!name) return "Name is required";
    if (!nameRegex.test(name))
      return "Name should contain only letters and spaces";
  }

  // Email validation
  if (!email) return "Email is required";
  if (!emailRegex.test(email))
    return "Please enter a valid email address";

  // Password validation
  if (!password) return "Password is required";
  if (password.length < 8)
    return "Password must be at least 8 characters long";
  if (!/(?=.*[A-Za-z])/.test(password))
    return "Password must contain at least one letter";
  if (!/(?=.*\d)/.test(password))
    return "Password must contain at least one number";

  return null;
};

export { checkValidData };
