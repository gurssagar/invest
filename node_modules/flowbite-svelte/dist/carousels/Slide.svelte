<script>export let image = '';
export let altTag = '';
export let attr = '';
export let slideClass = '';
</script>

<div class={slideClass}>
  <img src={image} alt={altTag} title={attr} />
</div>

<!--
  @component
  ## Features
  [Go to Carousel](https://flowbite-svelte.com/docs/components/carousel)
  ## Props
  @prop image: string = '';
  @prop altTag: string = '';
  @prop attr: string = '';
  @prop slideClass: string = '';
-->
