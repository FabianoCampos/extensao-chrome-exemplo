var Shared = Shared || {};
Shared.ResponseMessage = {};

Shared.ResponseMessage = class {
    constructor(success, data, message) {
        this.data    = data;
        this.success = success; 
        this.message = message;
    }
};