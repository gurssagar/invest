<script>
    import anime from "animejs";
    import { afterUpdate, onMount } from 'svelte';
	onMount(() => {
		animateMain();
	});

	afterUpdate(() => {
		animateMain();
	});

	function animateMain() {
		anime({
		targets: [".members-heading"],
		translateY: ['-100%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 800,
		});
    };
	

</script>

<style>
	:root {
		overflow-x: hidden;
	}
</style>

<div class="members-heading flex justify-center text-center px-16 pt-[200px]  bg-cover font-final overflow-hidden lg:overflow-visible">
    <div >

        <h1 class=" bg-gradient-to-r from-cyan-500 to-emerald-300 text-transparent bg-clip-text text-6xl lg:text-8xl select-none">MEMBERS</h1><br>

    </div>
</div>