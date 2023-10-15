<script>
    // import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    let LottiePlayer;
    import { onMount } from 'svelte';
    export let form;
    let controlsLayout = [];
    const landingPageLottieFile = "login.json";
    onMount(async () => {
        const module = await import('@lottiefiles/svelte-lottie-player');
        LottiePlayer = module.LottiePlayer;
    });

</script>
<div class="flex justify-center items-center w-screen pt-40 pb-48 gap-40 p-8 xl:flex-row flex-col-reverse select-none">
    <div>
        <div class="lg:w-[550px] w-[450px] h-auto lg:px-0 px-2">
            <lottie-player src={landingPageLottieFile} background="transparent" speed="1" direction="1" mode="normal" loop autoplay></lottie-player>

        </div>

    </div>
    <div class="flex flex-col items-center font-instrument bg-[#fcfaff] w-fit lg:px-20 py-12 p-8 rounded-3xl shadow-2xl shadow-gradient2/10">
        <h2 class="mt-2 text-center text-3xl  tracking-tight text-text">
            Login to your account
        </h2>
        <p class="text-center pt-2 text-text/80 ">
            Or <a href="/register" class="font-bold hover:cursor-pointer hover:underline"
        >register</a
        > if you don't already have an account.
        </p>
        <form action="?/login" method="POST" class="flex flex-col items-center space-y-2 pt-8 w-full">
            <div class="form-control w-full max-w-md">
                <label for="email" class="label font-medium pb-1">
                    <span class="text-text">Email</span>
                </label>
                <input type="email" name="email" class="input input-bordered max-w-md" />
            </div>
            <div class="form-control w-full max-w-md">
                <label for="password" class="label font-medium pb-1">
                    <span class="text-text">Password</span>
                </label>
                <input type="password" name="password" class="input input-bordered max-w-md" />
            </div>
            <div class="max-w-md ">
                <a
                        href="/reset-password"
                        class="font-medium text-primary hover:cursor-pointer hover:underline"
                >
                    Forgot Password?</a
                >
            </div>

            <div class="flex justify-center items-center max-w-md pt-8 w-full">
                <button type="submit" class="py-4 px-8 rounded-2xl transition-all hover:bg-gradient2 border-2 border-gradient2 duration-300 ease-in-out text-text text-lg font-bold tracking-wide hover:text-background w-full">LOGIN</button>
            </div>
            {#if form?.notVerified}
                <div class="alert alert-error shadow-lg max-w-md">
                    <div>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                        ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        /></svg
                        >
                        <span>You must verify your email before you can login.</span>
                    </div>
                </div>
            {/if}
        </form>
    </div>
</div>
