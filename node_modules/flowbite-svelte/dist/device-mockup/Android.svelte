<script>export let androidTop;
export let androidLeftTop;
export let androidLeftMid;
export let androidLeftBot;
export let androidRight;
</script>

<div class={androidTop} />
<div class={androidLeftTop} />
<div class={androidLeftMid} />
<div class={androidLeftBot} />
<div class={androidRight} />

<!--
  @component
  ## Features
  [Go to Device Mockups](https://flowbite-svelte.com/docs/components/device-mockups)
  ## Props
  @prop androidTop: string;
  @prop androidLeftTop: string;
  @prop androidLeftMid: string;
  @prop androidLeftBot: string;
  @prop androidRight: string;
  ## Example
  ```
  <script>
    import { DeviceMockup } from 'flowbite-svelte';
  </script>

  <DeviceMockup device="android">
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
      class="dark:hidden w-[272px] h-[572px]"
      alt="android example 1" />
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
      class="hidden dark:block w-[272px] h-[572px]"
      alt="android example 2" />
  </DeviceMockup>
  ```
-->
