// Generate a simulated JWT token
export const generateToken = (userId, role) => {
  const payload = {
    userId: userId,
    role: role,
  };

  // Convert payload to Base64
  return btoa(JSON.stringify(payload));
};

// Save token in localStorage
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem("token");
};

// Remove token from localStorage
export const removeToken = () => {
  localStorage.removeItem("token");
};

// Decode the simulated token
export const decodeToken = (token) => {
  if (!token) {
    return null;
  }

  try {
    return JSON.parse(atob(token));
  } catch (error) {
    return null;
  }
};

// Get logged-in user
export const getUser = () => {
  const token = getToken();

  if (!token) {
    return null;
  }

  return decodeToken(token);
};

// Logout user
export const logout = () => {
  removeToken();
};