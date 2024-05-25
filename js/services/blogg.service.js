import AuthService from "./auth.service.js";

class BloggService {
  constructor() {
    this.baseUrl = "https://v2.api.noroff.dev/blog/posts/petrine";
    this.AuthService = new AuthService();
  }

  getAccessToken() {
    let token = localStorage.getItem("token");

    if (token) {
      token = JSON.parse(token);
      return token;
    }
  }

  async createPost(post) {
    try {
      const token = this.AuthService.getAccessToken();

      let response = await fetch(this.baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(post),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(`${data.statusCode} - ${data.status}`);

      return data;
    } catch (err) {
      console.error(err.message);
    }
  }

  async editPost(post, id) {
    const token = this.getAccessToken();
    let response = await fetch(`${this.baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });

    if (response.ok) {
      response = await response.json();
      return response.data;
    } else {
      return false;
    }
  }

  async deletePost(id) {
    let response = await fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getAccessToken()}`,
      },
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  }

  async getAllPosts(limit = null) {
    let url = this.baseUrl; // https://v2.api.noroff.dev/blog/posts/petrine
    if (limit) {
      url += `?limit=${limit}`; // url + ?limit=X
    }

    let response = await fetch(url);

    if (response.ok) {
      response = await response.json();
      return response.data;
    } else {
      return false;
    }
  }

  async getSinglePost(id) {
    let response = await fetch(`${this.baseUrl}/${id}`);

    if (response.ok) {
      response = await response.json();
      return response.data;
    } else {
      return false;
    }
  }
}

export default BloggService;
