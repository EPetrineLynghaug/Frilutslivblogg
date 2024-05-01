const baseUrl = "https://v2.api.noroff.dev";

class Http {
    constructor() {}

    async request(data) {
        let response = await fetch(`${baseUrl}${data.url}`, {
            method:data.method,
            headers: {
                "content-Type": "application/json"
                // "Authorization": "Bearer TOKEN"
            },
            body: JSON.stringify(data.body),
        });

        response = response.json();
        return response;
    }
}

export default Http;