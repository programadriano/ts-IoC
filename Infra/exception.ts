export class Exception extends Error {
    code?: string;

    constructor(message?: string, code?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'AppError';
        this.code = code;
    }
}