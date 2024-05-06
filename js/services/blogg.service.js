class BloggService {

    constructor() {
        this.baseUrl = "https://v2.api.noroff.dev/blog/posts/petrine";
    }

    getAccessToken() {
        let token = localStorage.getItem('token');

        if (token) {
            token = JSON.parse(token);
            return token;
        }
    }

    async createPost(post) {
        const token = this.getAccessToken();
        console.log(`Token: ${token}`);

        let response = await fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(post),
        })

        console.log(response);

        if (response.ok) {
            response = await response.json();
            return response.data;
        } else {
            return false;
        }
    };

    async editPost(post) {
       let response = await fetch(`${this.baseUrl}/id`, {
           method: "PUT",
           headers: {
               "content-Type": "application/json",
               "Authorization": `Bearer ${this.getAccessToken()}`
           },
           body: JSON.stringify(post),
       });

       if (response.ok) {
           response = await response.json();
           return response.data;
       } else {
           console.log(response);
           return false;
       };
    };

    async deletePost(id) {}

    async getAllPosts() {}

    async getSinglePost(id) {}

}

export default BloggService;