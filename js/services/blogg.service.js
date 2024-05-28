import AuthService from "./auth.service.js";

class BloggService {
  constructor() {
    this.AuthService = new AuthService();

    this.baseUrl = "https://v2.api.noroff.dev/blog/posts/petrine";
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
      const res = await response.json();

      if (!response.ok) throw new Error(`${res.statusCode} - ${res.status}`);

      return res;
    } catch (err) {
      console.error(err.message);
    }
  }

  async editPost(post, id) {
    try {
      const token = this.AuthService.getAccessToken();

      let response = await fetch(`${this.baseUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(post),
      });
      const res = await response.json();

      if (!response.ok) throw new Error(`${res.statusCode} - ${res.status}`);

      return res;
    } catch (err) {
      console.error(err.message);
    }
  }

  async deletePost(id) {
    try {
      const token = this.AuthService.getAccessToken();

      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await response.json();

      if (!response.ok) throw new Error(`${res.statusCode} - ${res.status}`);

      return res;
    } catch (err) {
      console.error(err.message);
      return {};
    }
  }

  async getAllPosts(limit = null) {
    try {
      const token = this.AuthService.getAccessToken();

      let url = this.baseUrl; // https://v2.api.noroff.dev/blog/posts/petrine
      if (limit) {
        url += `?limit=${limit}`; // url + ?limit=X
      }

      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await response.json();

      if (!response.ok) throw new Error(`${res.statusCode} - ${res.status}`);

      return res.data;
    } catch (err) {
      console.error(err.message);
      return [];
    }
  }

  async getSinglePost(id) {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      const res = await response.json();

      if (!response.ok) throw new Error(`${res.statusCode} - ${res.status}`);

      return res.data;
    } catch (err) {
      console.error(err.message);
      return false;
    }
  }
}

export default BloggService;
