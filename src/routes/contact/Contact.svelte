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
		targets: [".contact-container"],
		translateY: ['150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1500,
		});
    };

</script>
<style>
    :root {
        overflow-x: hidden;
    }
</style>
<div class="max-w-screen">
    <div class="py-32 flex justify-center items-center lg:flex-row flex-col ">
        <div class="md:col-span-4 p-10 pl-10 text-text select-none">

            <h3 class="lg:text-7xl text-5xl leading-normal bg-gradient-to-r  to-gradient1 from-gradient2 text-transparent bg-clip-text  select-none tracking-tight font-final ">
                CONTACT US
            </h3>

            <div class="flex items-center mt-5 space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z" fill="#000000" class="color000 svgShape"></path></svg>
                <span class="text-sm">G-8 Area, Rajouri Garden, New Delhi, Delhi 110064 </span>
            </div>
            
        </div>
        <form action="?/contact" method="POST" class="md:col-span-8 p-10 my-auto">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 md:mb-0">
                    <label class="block uppercase tracking-wide text-text/80 text-xs font-bold mb-2" for="name">
                        First Name
                    </label>
                    <input type="text" name="name" class="appearance-none block w-full bg-gray-200/70 text-black rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100" placeholder="">

                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-text/80 text-xs font-bold mb-2" for="email">
                        Email Address
                    </label>
                    <input type="email" name="email" class="appearance-none block w-full bg-gray-200/70 text-black border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500" placeholder="">
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-text/80 text-xs font-bold mb-2" for="Message">
                        Your Message
                    </label>
                    <input name="message" type="text" class="appearance-none block w-full bg-gray-200/70 text-black border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">

                </div>
                <div class="flex justify-between w-full px-3 pt-6">
                    <button class="shadow bg-gradient-to-tr from-gradient1 to-gradient2 duration-700 ease-in-out transition-all hover:border-2 rounded-lg border-2 border-gradient1 text-white font-bold py-3 px-8" type="submit">
                        Send Message
                    </button>
                </div>

            </div>

        </form>

    </div>
</div>





