<script>export let tag = 'div';
export let show;
export let use = () => { };
</script>

{#if show}
  <svelte:element this={tag} use:use {...$$restProps}><slot /></svelte:element>
{:else}
  <slot />
{/if}

<!--
  @component
  ## Props
  @prop tag: string = 'div';
  @prop show: boolean;
  @prop use: Action = () => {};
-->
