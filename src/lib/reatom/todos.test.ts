import { describe, test, expect } from 'vitest';

import { ctx, myCountAtom, increment } from './todos';
describe('reatom', () => {
	test('works', () => {
		increment(ctx, 8);
		increment(ctx, 8);
		let res = ctx.get(myCountAtom);
		expect(res).toBe(16);
	});
});

import { addTodo, todosAtom } from './todos';

describe('with todos', () => {
	test('works', () => {
		addTodo(ctx, 'first');
		addTodo(ctx, 'second');
		addTodo(ctx, 'third');
		expect(ctx.get(todosAtom)).toMatchInlineSnapshot(`
			[
			  {
			    "done": false,
			    "title": "first",
			  },
			  {
			    "done": false,
			    "title": "second",
			  },
			  {
			    "done": false,
			    "title": "third",
			  },
			]
		`);

		todosAtom.toReversed(ctx);

		expect(ctx.get(todosAtom)).toMatchInlineSnapshot(`
			[
			  {
			    "done": false,
			    "title": "third",
			  },
			  {
			    "done": false,
			    "title": "second",
			  },
			  {
			    "done": false,
			    "title": "first",
			  },
			]
		`);

		addTodo(ctx, 'fourth');
		expect(ctx.get(todosAtom)).toMatchInlineSnapshot(`
			[
			  {
			    "done": false,
			    "title": "third",
			  },
			  {
			    "done": false,
			    "title": "second",
			  },
			  {
			    "done": false,
			    "title": "first",
			  },
			  {
			    "done": false,
			    "title": "fourth",
			  },
			]
		`);

		todosAtom.toSorted(ctx, (a, b) => (a.title > b.title ? 1 : -1));
		expect(ctx.get(todosAtom)).toMatchInlineSnapshot(`
			[
			  {
			    "done": false,
			    "title": "first",
			  },
			  {
			    "done": false,
			    "title": "fourth",
			  },
			  {
			    "done": false,
			    "title": "second",
			  },
			  {
			    "done": false,
			    "title": "third",
			  },
			]
		`);
	});
});
