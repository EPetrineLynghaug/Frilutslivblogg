class BloggService {

    constructor() {
        this.baseUrl = "https://v2.api.noroff.dev/blog/posts/petrine";
    }

    async createPost(post) {
        // {
        //     "title": "string", // Required
        //     "body": "string", // Optional
        //     "tags": ["string"], // Optional
        //     "media": {
        //         "url": "https://url.com/image.jpg",
        //         "alt": "string"
        //     } // Optional
        // }
    }

    async editPost(post) {
        // {
        //     "title": "string", // Required
        //     "body": "string", // Optional
        //     "tags": ["string"], // Optional
        //     "media": {
        //         "url": "https://url.com/image.jpg",
        //         "alt": "string"
        //     } // Optional
        // }
    }

    async deletePost(id) {}

    async getAllPosts() {}

    async getSinglePost(id) {}

}

export default BloggService;