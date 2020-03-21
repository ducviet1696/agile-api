export class Message {

    constructor(message) {
        this.props = {
            message,
            status: 200,
        };
    }

    get code() {
        return 'AGILE_SUCCESS';
    }

    get status() {
        return this.props.status;
    }

    set status(value) {
        this.props.status = value;
    }

    set message(value) {
        this.props.message = value;
    }

    get message() {
        return {
            code: this.code,
            ...this.props.message,
        };
    }
}

export class Success extends Message {

}

export class BadRequest extends Message {

    get code() {
        return 'AGILE_BAD_REQUEST';
    }

    get status() {
        return 400;
    }
}

export class UnAuthorized extends Message {

    get code() {
        return "KIROKU_FORBIDDEN";
    }

    get status() {
        return 401;
    }
}