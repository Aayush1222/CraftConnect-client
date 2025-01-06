const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  console.log("Get Current User:", user); // Add this line to see what's returned
  return user;
};

export default getCurrentUser;