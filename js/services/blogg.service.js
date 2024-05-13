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

    async editPost(post, id) {
        const token = this.getAccessToken();
       let response = await fetch(`${this.baseUrl}/${id}`, {
           method: "PUT",
           headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${token}`,
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

    async deletePost(id) {
        let response = await fetch(`${this.baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.getAccessToken()}`
            }
        });

        if (response.ok) {
            return true;
        } else {
            return false;
        }
    }

    async getAllPosts() {
        let response = await fetch(this.baseUrl);
        console.log(response);

        if (response.ok) {
            response = await response.json();
            return response.data;
        } else {
            console.log(response);
            return false;
        };
    };

    async getSinglePost(id) {
        let response = await fetch(`${this.baseUrl}/${id}`);

        if (response.ok) {
            response = await response.json();
            return response.data;
        } else {
            console.log(response);
            return false;
        }
    }

}

export default BloggService;