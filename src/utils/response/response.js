class ResponseError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

function successResponse(message, data) {
    return {
        success: true,
        message,
        data,
    };
}

module.exports = { ResponseError, successResponse };