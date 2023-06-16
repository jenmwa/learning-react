

export class Buyer {
    constructor (
        public firstName: string,
        public lastName: string,
        public adress: {
            street: string,
            zip: number,
            city: string
        },
        public email: string,
        public phone: number,
        public newsletter: boolean,
        public terms: boolean,

    ) {}
}