function requireLogin(redirectTo) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  console.log("requireLogin called | isLoggedIn =", isLoggedIn);

  if (!isLoggedIn) {
    localStorage.setItem("redirectAfterLogin", redirectTo);
    window.location.href = "/html/login.html";
    return false;
  }

  return true;
}
