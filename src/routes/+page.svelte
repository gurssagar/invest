<!-- App.svelte -->
<script>
    import anime from "animejs";
    import { afterUpdate } from "svelte";
    import { onMount } from "svelte";
    import Typewriter from "svelte-typewriter";
    let LottiePlayer;
    let mainContainer;
    let acceptTerms = false;
    let upperText = "Empowering Women, Funding Futures";
    let lowerText = "Empowering Women, Fueling Futures";
    export let data;
    const a = "/static/bg2.jpg";
    let controlsLayout = [];
    const landingPageLottieFile = "faltu.json";
    const droneLottieFile = "drone.json";
    const landingPageLottieFile2 = "invest.json";
    const pricingLotteFile = "pricing.json"
    const mobilefile = "animat.json";
    onMount(async () => {
        const module = await import("@lottiefiles/svelte-lottie-player");
        LottiePlayer = module.LottiePlayer;
        animateMain();
        // if (data?.animationsLoaded === 'false') {
        //     document.cookie = `animationsLoaded=true; path="/"`;
        // }
    });
    let TN = [];

    onMount(() => {
        TN = data?.records;
    });

    let x = 0;
    let y = 0;

    function handleMouseMove(e) {
        x = e.clientX;
        y = e.clientY;
        const rect = e.currentTarget.getBoundingClientRect();
        document.getElementsByClassName(".spot-blur")[0].animate(
            [
                {
                    top: x,
                    left: y,
                },
                {
                    top: (y - 200).toString() + "px",
                    left: (x - 300).toString() + "px",
                },
            ],
            {
                duration: 10000,
                iterations: 1,
                delay: 400,
                easing: "cubic-bezier(0.49, 0.47, 0.63, 0.85)",
            }
        );
        // x = e.clientX - rect.x;
        // y = e.clientY - rect.y;
        // console.log(`x: ${e.clientX - rect.x}, y: ${e.clientY - rect.y}`)
    }

    // const updateAnimationsLoaded = () => {document.cookie = `animationsLoaded=true; path="/"`};

    function animateMain() {
        // anime({
        //     targets: [".dila-denge"],
        //     translateY: ["-80%", 0],
        //     rotate: ["-10deg", 0],
        //     scale: [0, 1],
        //     opacity: [0, 1],
        //     easing: "spring(1, 80, 10, 4)",
        //     duration: 200,
        // });
        // anime({
        //     targets: [".everything-else", "header"],
        //     opacity: [0, 1],
        //     easing: "easeInSine",
        //     duration: 1000,
        // });
        // anime({
        //     targets: [".lottie"],
        //     opacity: [0, 1],
        //     easing: "easeInSine",
        //     duration: 2000,
        // });
        // anime({
        //     targets: [".get-started"],
        //     opacity: [0, 1],
        //     easing: "easeInSine",
        //     duration: 500,
        // });
    }
    afterUpdate(() => {
        animateMain();
    });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="lg:bg-background bg-black">
    <nav
            class="main-container flex justify-center text-center lg:px-12 px-4 dark:bg-gray-950 overflow-hidden lg:overflow-hidden pb-12"
    >

        <div
                class="xl:pt-[300px] pt-[150px] xl:pb-[200px] pb-[100px] flex justify-center items-center xl:gap-16 md:gap-12 gap-8 select-none xl:flex-row flex-col"
        >
            <div
                    class="flex-wrap flex justify-center items-center flex-col lg:px-0 px-2 gap-2 z-[2]"
            >
                <!-- {console.log(data?.animationsLoaded)} -->
                {#if data?.animationsLoaded === "false"}

                        <h2
                                class="bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]"
                        >
                            Empowering Women
                        </h2>


                        <h2
                                class="bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]"
                        >
                            Funding Futures
                        </h2>

                {/if}
                {#if data?.animationsLoaded === "true"}
                    <h2
                            class="lg:text-xl text-lg select-none text-black/90 font-instrument"
                    >
                        {upperText}
                    </h2>
                {/if}

                <p
                        class="dila-denge lg:text-[24px] text-md get-started max-w-[800px] text-text pt-6 pb-2"
                >
                    Embark on a transformative journey with us as we unlock the boundless potential of creativity, innovation, and female leadership, igniting a powerful force for driving sustained and inclusive economic growth.
                    FemmeFund plays a multi-faceted role. Not only does it bridge the financial gap that many women-led companies face, but it also ensures these businesses receive the mentorship, resources, and market access they need to thrive.
                </p>

                <a href="/register">
                    <div
                            class="b mx-auto lg:h-16 lg:w-60 w-48 h-12 flex justify-center items-center"
                    >
                        <div
                                class="lg:h-16 lg:w-60 w-48 h-12 bg-gradient-to-br from-gradient1 to-gradient2 items-center rounded-full cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
                        />
                        <a
                                class="text-center text-white lg:text-xl text-lg font-semibold z-10 pointer-events-none font-display"
                        >GET STARTED</a
                        >
                    </div>
                </a>
                <!-- <button class="know-more mt-4 py-2 px-4 text-xl font-instrument text-text border-2 border-gradient2 hover:bg-gradient2 rounded-xl cursor-pointer">
                    Know More
                </button> -->
                <!-- <p class="font-instrument lg:text-2xl text-md lg:max-w-[650px] max-w-[350px]">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem.</p> -->
            </div>
            <div
                    class="rounded-3xl flex justify-center items-center lg:w-[600px] w-[350px] h-auto lg:p-0 p-10"
            >
                <lottie-player
                        src={landingPageLottieFile}
                        background="transparent"
                        speed="1"
                        direction="1"
                        mode="normal"
                        loop
                        autoplay
                />
            </div>
        </div>
    </nav>
    <div class="flex justify-center items-center gap-12 flex-col lg:px-20 px-2">
        <nav class="flex justify-center items-center md:flex-col flex-col lg:px-12 px-4 gap-16 max-w-[2000px]">
            <div class="lg:w-[950px] block">
                <h1 class="dila-denge text-center bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]">
                    Problems in Gathering Investments
                </h1>
            </div>

            <div class="flex justify-center items-center lg:flex-row flex-col flex-wrap gap-8">
                <!-- Box 1 -->
                <a href="#" class="flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1">
                    <div>
                        <h5 class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white">
                            Gender bias
                        </h5>
                        <p class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400">
                            There is a pervasive bias in the investment world, with many investors being predominantly male. This can lead to unconscious biases and a lack of understanding of women-led businesses.
                        </p>
                    </div>
                </a>

                <!-- Box 2 -->
                <a href="#" class="flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1">
                    <div>
                        <h5 class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white">
                            Networking gaps
                        </h5>
                        <p class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400">
                            Women may have fewer opportunities to network and build relationships with potential investors, which are crucial for securing funding.
                        </p>
                    </div>
                </a>

                <!-- Box 3 -->
                <a href="#" class="flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1">
                    <div>
                        <h5 class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white">
                            Stereotypes
                        </h5>
                        <p class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400">
                            Stereotypes about women’s ability to manage businesses or their commitment to work may affect investment decisions.
                        </p>
                    </div>
                </a>

                <a
                        href="#"
                        class=" flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                                class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Access to resources
                        </h5>
                        <p
                                class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            Women often have less access to resources, like capital, education, and mentorship, which can hinder their ability to grow and attract investors.
                        </p>
                    </div>
                </a>

                <a
                        href="#"
                        class=" flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                                class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Pitch presentation
                        </h5>
                        <p
                                class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            Women may face challenges in effectively pitching their business ideas, which can impact their ability to secure investment.
                        </p>
                    </div>
                </a>
            </div>
        </nav>

        <nav class="flex justify-center items-center md:flex-col flex-col lg:px-12 px-4 gap-16 max-w-[2000px]">
            <div class="lg:max-w-[1200px] block">
                <h1 class="dila-denge  lg:pt-80 text-center bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]">
                    How to Improve Situation For Women Investments
                </h1>
            </div>

            <div class="flex justify-center items-center lg:flex-row flex-col flex-wrap gap-8">
                <!-- Box 1 -->
                <a
                        href="#"
                        class="lg:flex-grow-1 lg:mr-0 lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                                class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            End Gender Bias
                        </h5>
                        <p
                                class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            Implement gender-blind evaluation processes for pitches and business plans to ensure that investment decisions are based solely on the merits of the idea.
                            <br><br>Encourage diversity among investors and decision-makers, promoting women’s participation in the investment field.

                        </p>
                    </div>
                </a>

                <a
                        href="#"
                        class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                                class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                           Reduce Networking Gaps
                        </h5>
                        <p
                                class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            Establish women-focused business networking events and platforms to facilitate connections with potential investors.
                            Offer mentorship programs to help women build valuable relationships with experienced entrepreneurs and investors.

                        </p>
                    </div>
                </a>

                <a
                        href="#"
                        class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                                class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Accelerated Decomposition
                        </h5>
                        <p
                                class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            Launch awareness campaigns and educational initiatives to challenge stereotypes and highlight the success stories of women entrepreneurs.
                            <br><br>Encourage media and industry publications to showcase more diverse entrepreneurial role models.

                        </p>
                    </div>
                </a>
                <a
                        href="#"
                        class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                                class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Provide Access to Resources
                        </h5>
                        <p
                                class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            Create women-specific funding programs, grants, and incubators that provide financial support and resources tailored to their needs.
                            <br><br>Develop partnerships with financial institutions and organizations to increase women’s access to loans and capital.

                        </p>
                    </div>
                </a>

                <a
                        href="#"
                        class="lg:flex-grow-1 lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                                class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Help in Pitch Presentation
                        </h5>
                        <p
                                class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            Offer pitch coaching and training programs specifically designed for women to enhance their presentation skills and confidence.
                            <br><br>Develop pitch competitions and events exclusively for women entrepreneurs to practice and receive feedback.
                        </p>
                    </div>
                </a>
            </div>
        </nav>

    </div>

    <nav
            class="flex justify-center items-center lg:flex-col flex-col lg:pt-2 lg:px-12 px-4"
    >
        <h1
                class="dila-denge pt-80 text-center bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]"
        >
            Why Invest In Women?
        </h1>

        <div class="flex flex-col lg:flex-row lg:gap-16 gap-8 pt-20">
            <p
                    class="font-normal pt-40 max-w-[800px] text-lg lg:px-0 px-4 text-gray-900 dark:text-gray-400 pt-5"
            >
                Women in entrepreneurship contribute significantly to economic dynamics, community betterment, and societal advancement.
                <br> <br>Diverse Perspectives: Women bring unique life experiences and perspectives to the business world, which can lead to innovative solutions, products, and services.Addressing Untapped Markets: Women entrepreneurs often identify niche markets, especially those relevant to women's needs, that might be overlooked by male counterparts.
                <br><br>Breaking stereotypes: Women in leadership and entrepreneurial roles challenge societal norms, helping to break down gender stereotypes and barriers.
                <br><br>Economic Growth:The participation of women in the entrepreneurial landscape leads to increased economic activities, creating jobs and contributing to GDP.
            </p>
            <div class="w-full flex justify-center items-center">
                <div class="rounded-3xl lg:w-[600px] h-auto lg:p-0 p-10">
                    <lottie-player
                            src={landingPageLottieFile2}
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

    </nav>

    <nav class=" everything-else overflow-hidden">
        <div class="lg:py-48 py-24 lg:flex flex-col dark:bg-gray-950 overflow-hidden">
            <!-- <Saos animation="-global-from-left 1.2s cubic-bezier(.62,.04,.51,.98) both" once={true}></Saos> -->
            <h1 class="text-5xl text-center justify-center lg:text-7xl lg:pt-12 font-final  text-transparent bg-clip-text bg-gradient-to-br from-gradient1 to-gradient2 select-none">Invest in projects</h1>
            <div class="p-10 justify-center items-center text-text m-0 flex">
                <p class="font-instrument lg:text-xl text-md text-  center select-none max-w-[750px]">🚀 Invest in our project for promising returns and a purpose-driven, ethical impact on society and the environment.</p>
            </div>

            <div class=" py-20 px-4 lg:px-20 just font-instrument select-none flex justify-center items-center flex-wrap gap-8">
                {#each data?.records as record}
                    <article class="lg:block bg-gradient2/20 transition xl:max-w-[400px] dark:bg-gray-900 hover:shadow-lg">

                        <div class="lg:block lg:basis-56">
                            <img
                                    alt="Guitar"
                                    src={`${record.Image_Link}`}
                                    class="aspect-square h-full w-full object-cover"
                            />
                        </div>

                        <div class="flex flex-1 flex-col justify-between">
                            <div class="border-s border-gray-900/10 p-4 lg:border-l-transparent lg:p-6">
                                <a href="/">
                                    <h3 class="font-bold uppercase text-lg lg:text-xl  text-text">
                                        {`${record.Name}`}
                                    </h3>
                                </a>

                                <p class="mt-2 line-clamp-3 lg:text-lg/relaxed text-lg  text-text">
                                    {`${record.Text_Input}`}
                                </p>
                            </div>

                            <div class="lg:flex lg:items-end lg:justify-end">
                                <a
                                        href={`/Projects/${record.Link}`}
                                        class="block bg-gradient2 px-5 py-3 text-white text-center lg:text-xs text-xs uppercase text-text transition "
                                >
                                    Invest Now
                                </a>
                            </div>
                        </div>
                    </article>
                {/each}
            </div>
            <!-- </Saos> -->
        </div>
    </nav>
</div>
