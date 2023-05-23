import { reatomArray, createCtx, action, atom } from '@reatom/framework';

interface Todo {
	title: string;
	done: boolean;
}

// global application context
export const ctx = createCtx();
export const todosAtom = reatomArray<Todo>();
export const addTodo = action((ctx, title: string) => {
	todosAtom(ctx, (state) => {
		state.push({ title: title, done: false });
		return state;
	});
});

export const myCountAtom = atom(0);
export const increment = action((ctx, value: number) => {
	myCountAtom(ctx, (state) => state + value);
}, 'increment');
