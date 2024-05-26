class AuthService {
  constructor() {
    this.baseUrl = "https://v2.api.noroff.dev/auth";
  }

  getAccessToken() {
    let token = localStorage.getItem("token");

    if (token) {
      token = JSON.parse(token);
      return token;
    }
  }

  isLoggedIn() {
    if (this.getAccessToken()) {
      return true;
    } else {
      return false;
    }
  }

  async login(email, password) {
    try {
      const reqBody = {
        email: email,
        password: password,
      };

      let response = await fetch(`${this.baseUrl}/login`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const res = await response.json();

      if (!response.ok) throw new Error(`${res.statusCode} - ${res.status}`);

      localStorage.setItem("token", JSON.stringify(res.data.accessToken));

      return true;
    } catch (err) {
      console.error(err.message);
      return false;
    }
  }

  async register(name, email, password) {
    try {
      const reqBody = {
        name: name,
        email: email,
        password: password,
      };

      let response = await fetch(`${this.baseUrl}/register`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const res = await response.json();

      if (!response.ok) throw new Error(`${res.statusCode} - ${res.status}`);

      return true;
    } catch (err) {
      console.error(err.message);
      return false;
    }
  }
}

export default AuthService;
