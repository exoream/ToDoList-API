class Response {
    static userResponse(user) {
        const response = {
            id: user.id,
            username: user.username,
        };
        return response;
    }
}

module.exports = Response;