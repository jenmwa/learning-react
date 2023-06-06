export class Todo {
    constructor (
        public id: number,
        public text: string,
        public deadline: string,
        public isDone: boolean = false,
    ) {}
}
