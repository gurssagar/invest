<script>
	import anime from "animejs";
	import { afterUpdate, onMount } from 'svelte';
	let LottiePlayer;
	let mainContainer;
	import landingPageLottieFile from "../../static/landing page.json"
	import { main } from "@popperjs/core";
	import Typewriter from 'svelte-typewriter';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let data;
	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
		animateMain();
		if (data?.animationsLoaded === 'false') {
            document.cookie = `animationsLoaded="true"; path="/"`;
        }
	});
	let controlsLayout = [];
	const landingPageLottieFile_ = "../../static/landing page.json";
	afterUpdate(() => {
		animateMain();
	});
    const a ='/static/bg2.jpg';
	function animateMain() {
		anime({
		targets: [".animate-blob"],
		translateX: ['70%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 3000,
		scale: [1, 1.05]
		});
		anime({
		targets: [".join-now"],
		translateY: ['55%', 0],
		// translateX: ['-55%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 800,
		delay:1800,
		// scale: [0, 1]
		});
		
		anime({
		targets: [".dila-denge"],
		translateY: ['-80%', 0],
		rotate: ["-10deg", 0],
		scale: [0, 1],
		opacity: [0, 1],
		easing: 'spring(1, 80, 10, 4)',
		duration: 200,
		delay: 2500
		});
	}
</script>

<nav class=" main-container h-[100%] flex justify-center text-center px-16 dark:bg-gray-950 overflow-hidden lg:overflow-hidden pb-12 ">
	<div bind:this={mainContainer} class="pt-[200px] pb-[200px] flex justify-center items-center xl:gap-40 md:gap-28 select-none xl:flex-row flex-col">
		<!-- <div class="flex justify-center items-center flex-col lg:px-0 px-2">
			<h2 class=" discentium-main-text bg-gradient-to-r from-gradient1 to-gradient2  text-transparent bg-clip-text text-[44px] lg:text-7xl select-none block font-final uppercase">Discentium</h2>
			<br>
			<p class="font-instrument lg:text-2xl text-md lg:max-w-[650px] max-w-[350px]">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem.</p>
		</div>

		<div>
			{#if LottiePlayer}
				<div class="lg:w-[450px] w-[350px] h-auto lg:px-0 px-2">
					<LottiePlayer
						src={landingPageLottieFile}
						autoplay="{true}"
						loop="{true}"
						controls="{true}"
						renderer="svg"
						background="transparent"
						controlsLayout={controlsLayout}
					/>
				</div>
				
			{/if}
		</div> -->
		<div class="flex justify-center items-center flex-col lg:px-0 px-2 gap-2">\
			{console.log(data)}
			{#if data?.animationsLoaded === 'true'}
				<h2 class="text-[44px] lg:text-4xl text-2xl select-none text-black/70 font-instrument">
					Resources chahiye?
				</h2>
			{:else}
				<Typewriter cursor={true} interval=100 mode="concurrent">
					<h2 class="text-[44px] lg:text-4xl text-2xl select-none text-black/70 font-instrument">
						Resources chahiye?
					</h2> 
				</Typewriter>
			{/if}
			
			<h2 class="dila-denge bg-gradient-to-r from-gradient1 to-gradient2  text-transparent bg-clip-text text-[44px] lg:text-7xl select-none block font-instrument overflow-visible h-[80px] font-bold">Dila denge!</h2>
			<!-- <p class="font-instrument lg:text-2xl text-md lg:max-w-[650px] max-w-[350px]">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem.</p> -->
		</div>

		<!-- <div>
			{#if LottiePlayer}
				<div class="lg:w-[450px] w-[350px] h-auto lg:px-0 px-2">
					<LottiePlayer
						src={landingPageLottieFile}
						autoplay="{true}"
						loop="{true}"
						controls="{true}"
						renderer="svg"
						background="transparent"
						controlsLayout={controlsLayout}
					/>
				</div>
				
			{/if}
		</div> -->
		
	</div>
</nav>