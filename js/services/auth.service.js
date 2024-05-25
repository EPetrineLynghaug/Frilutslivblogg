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
      const data = await response.json();

      if (!response.ok) throw new Error(`${data.statusCode} - ${data.status}`);

      localStorage.setItem("token", JSON.stringify(data.accessToken));

      return true;
    } catch (err) {
      console.error(err.message);
      return false;
    }
  }

  async register(name, email, password) {
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

    console.log(response);

    if (response.ok) {
      response = await response.json();
      console.log(response);

      return true;
    } else {
      console.log(response);
      return false;
    }
  }
}

export default AuthService;
