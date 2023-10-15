<script>
    let LottiePlayer;
    import { onMount } from 'svelte';
    let controlsLayout = [];
    const landingPageLottieFile = "login.json";
    onMount(async () => {
        const module = await import('@lottiefiles/svelte-lottie-player');
        LottiePlayer = module.LottiePlayer;
    });
    export let form;

    let showPassword = false;
    let showConfirm = false;

    let password;
    let confirm;
    $:passError = (password?.length && confirm?.length)? (password !== confirm)? true: false : false;



</script>

<div class="flex justify-center items-center w-screen pt-40 pb-48 gap-40 p-8 xl:flex-row-reverse flex-col-reverse select-none">
    <div>
        <div class="lg:w-[550px] w-[450px] h-auto lg:px-0 px-2 scale-x-[-1]">
            <lottie-player src={landingPageLottieFile} background="transparent" speed="1" direction="1" mode="normal" loop autoplay></lottie-player>
        </div>
    </div>
    <div class="flex flex-col items-center font-instrument bg-[#fcfaff] w-fit lg:px-20 py-12 p-8 rounded-3xl text-text shadow-2xl shadow-gradient2/10">
        <h2 class="mt-2 text-center text-3xl pb-5">
            Register for an account
        </h2>
        <form class="auth-form" method="post" action="?/OAuth2">
            <div class="flex bg-gray-100 p-2 rounded-2xl shadow-2xl border-4">
                <button class="btn-auth flex" type="submit">
                    <img class="btn-auth-img h-10" src='https://cdn-icons-png.flaticon.com/512/2504/2504739.png' alt='google sign in'/>
                    <p class="py-2 px-2">Sign Up With Google</p>
                </button>
            </div>
        </form>

        <p class="text-center pt-10">Or</p>

        <form action="?/register" method="POST" class="flex flex-col items-center space-y-2 w-full pt-8">
            <div class="form-control w-full max-w-md">
                <label for="name" class="label font-medium pb-1">
                    <span class="label-text text-text">Name</span>
                </label>
                <input type="text" name="name" class="input input-bordered w-full max-w-md" />
            </div>
            <div class="form-control w-full max-w-md">
                <label for="email" class="label font-medium pb-1">
                    <span class="label-text text-text">Email</span>
                </label>
                <input type="email" name="email" class="input input-bordered w-full max-w-md" />
            </div>
            <div class="form-control w-full max-w-md">
                <label for="password" class="label font-medium pb-1">
                    <span class="label-text text-text">Password</span>
                </label>
                <input type="password" name="password" class="input input-bordered w-full max-w-md" />
            </div>
            <div class="form-control w-full max-w-md">
                <label for="passwordConfirm" class="label font-medium pb-1">
                    <span class="label-text text-text">Confirm Password</span>
                </label>
                <input type="password" name="passwordConfirm" class="input input-bordered w-full max-w-md" />
            </div>
            <div class="form-control w-full max-w-md">
                <label for="userType" class="label font-medium pb-1">
                    <span class="label-text text-text">User Type</span>
                </label>
                <select name="userType" class="input input-bordered w-full max-w-md">
                    <option value="investor">Investor</option>
                    <option value="business">Business</option>
                </select>
            </div>
            <div class="flex justify-center items-center max-w-md pt-8 w-full">
                <button type="submit" class="py-4 px-8 rounded-2xl transition-all hover:bg-gradient2 border-2 border-gradient2 duration-300 ease-in-out text-text text-lg font-bold tracking-wide hover:text-background w-full">REGISTER</button>
            </div>
            <p class="text-center pt-2">
                Already a user? <a href="/login" class=" font-bold hover:cursor-pointer hover:underline">Sign In</a> here.
            </p>
        </form>
    </div>
</div>
