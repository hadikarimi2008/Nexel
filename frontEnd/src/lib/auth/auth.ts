const ADMIN_USERNAME = "HadiKarimiDev";

export function isLoggedIn() {
  if (typeof window === "undefined") return false;

  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(base64));
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

export function getUserId() {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64)).id;
  } catch {
    return null;
  }
}

export function getUsername() {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64)).username;
  } catch {
    return null;
  }
}

export function isAdmin() {
  return isLoggedIn() && getUsername() === ADMIN_USERNAME;
}

export function logout() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
}
