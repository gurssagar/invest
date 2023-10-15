<script>
    import {onMount} from "svelte";

    onMount(async () => {
        const module = await import("@lottiefiles/svelte-lottie-player");
        LottiePlayer = module.LottiePlayer;
        animateMain();
        // if (data?.animationsLoaded === 'false') {
        //     document.cookie = `animationsLoaded=true; path="/"`;
        // }
    });

    const landingPageLottieFile5 = "third.json";
    const landingPageLottieFile6 = "fifth.json";
</script>




<div class="py-8 bg-white">
    <div class="pt-[170px] container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="">
                <lottie-player
                        src={landingPageLottieFile5}
                        background="transparent"
                        speed="1"
                        direction="1"
                        mode="normal"
                        loop
                        autoplay
                />
            </div>
            <div class="md:7/12 lg:w-6/12">
                <div class=" flex justify-center text-center px-16  bg-cover font-final dark:bg-gray-950 z-[-199]">
                    <div class=" relative">
                        <h2 class="lg:pb-10 bg-gradient-to-r from-gradient1 to-gradient2  text-transparent bg-clip-text text-6xl lg:text-8xl select-none block">about</h2>
                    </div>
                </div>
                <p class="text-lg">
                At FemFund, we are on a mission to break down barriers and empower female entrepreneurs. Our platform connects visionary women with potential investors, fostering a vibrant ecosystem of innovation and support.
<br><br>

                We believe in the power of female entrepreneurship to drive economic growth, innovation, and social change. We envision a world where every woman with a transformative idea has the resources and support needed to turn her vision into a thriving reality.

                .</p>
            </div>
        </div>
    </div>
</div>


<div class=" bg-white">
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:7/12 lg:w-6/12">

                <div class="text-lg">
                    <p class="font-bold text-center lg:text-3xl text-xl">What We Do</p><br>

                    FemFund serves as a bridge between aspiring female entrepreneurs and forward-thinking investors. Our platform provides a space where innovative ideas meet the capital and guidance they need to flourish.

                    <br><br><p class="font-bold text-center lg:text-3xl text-xl">Our Commitment</p><br>

                    Diversity and Inclusion: We are committed to promoting diversity and inclusion in the entrepreneurial landscape, ensuring that women from all backgrounds have a chance to shine.

                    Empowerment: We empower women to take the lead in their entrepreneurial journey, offering resources, mentorship, and funding opportunities.

                    Connections: We are dedicated to creating meaningful connections that lead to groundbreaking ventures and transformative investments.</div>
            </div>
            <div class="">
                <lottie-player
                        src={landingPageLottieFile6}
                        background="transparent"
                        speed="1"
                        direction="1"
                        mode="normal"
                        loop
                        autoplay
                />
            </div>

        </div>
    </div>
</div>