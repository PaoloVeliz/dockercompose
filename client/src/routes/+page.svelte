<script lang="ts">
	export let data;
	let words: any[] = data.words;

	console.log(data);
	console.log(words);
</script>

<h1>App para hacer algo</h1>
{#each data.words as item}
	<div>{item.word}</div>
{/each}
