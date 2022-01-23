<script>
  import { createEventDispatcher } from "svelte";

  export let options;
  export let selected;
  export let multiple;
  export let style;

  const dispatch = createEventDispatcher();

  let items;
  $: items = options.map((name) => ({ name, selected: selected.includes(name) }));
  const handleClick = (option) => {
    const newSelected = option.selected
      ? selected.filter((item) => item !== option.name)
      : multiple
      ? [...selected, option.name]
      : [option.name];

    dispatch("change", [...newSelected]);
  };
</script>

<div class="button-switch {style}">
  {#each items as option}
    <div class="button {option.selected ? 'yellow' : 'black'}" on:click={() => handleClick(option)}>{option.name}</div>
  {/each}
</div>
