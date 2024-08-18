import Category from './Category';

export type Task = {
    uid?: string,
    category: Category | null,
    checked: boolean,
    deadline: Date,
    title: string,
    userId?: string,
};
