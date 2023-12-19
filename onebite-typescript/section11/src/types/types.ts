export interface Todo {
    id: string;
    content: string;
    completed: boolean;
    date: number;
}

export interface DateConstructor {
    new(): Date;
    getFullYear(): string;
    getMonth(): string;
    getDate(): string;
}