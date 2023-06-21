
export class Payment {
    constructor (
        public card: {
            cardNumber: number,
            date: string,
            CVC: number
        },
        public invoice: {
            personalNumber: number,
        }
    ) {}

}