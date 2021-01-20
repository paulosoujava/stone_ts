export class Email {
    private readonly _email: string;

    constructor(email: string) {
        this._email = email;
    }

    getEmail() {
        return this._email;
    }
}