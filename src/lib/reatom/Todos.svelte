<script>
	import { connectLogger, atom } from '@reatom/framework';
	import { withSvelte, setupCtx } from '@reatom/npm-svelte';
	import { ctx } from './todos';
	connectLogger(ctx);
	setupCtx(ctx);

	const count = atom(0).pipe(withSvelte);
</script>

<button on:click={() => $count++}>
	Clicked {$count}
	{$count === 1 ? 'time' : 'times'}
</button>
