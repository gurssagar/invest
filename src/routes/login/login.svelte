<script>
    export let form;
</script>

<div>
    <div class="relative flex h-full w-full pb-40">
        <div class="w-full lg:w-1/2 bg-black py-24">
            <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
                <div>
                    <p class="text-5xl text-center font-final py-12 ">Login</p>
                </div>
                <div class="my-6">
                    <button class="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"><img src="https://freesvg.org/img/1534129544.png" class="mr-2 w-6 object-fill" />Sign in with Google</button>
                </div>
                <div>
                    <fieldset class="border-t border-solid border-gray-600">
                        <legend class="mx-auto px-2 text-center text-sm">Or login via our secure system</legend>
                    </fieldset>
                </div>
                <div class="mt-10">
                    <script>
                        export let form;
                    </script>

                    <div class="flex flex-col items-center h-full w-full">
                        <form action="?/login" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
                            <div class="form-control w-full max-w-md">
                                <label for="email" class=" label font-medium pb-1 ">
                                    <span class="label-text text-[13px]">Email</span>
                                </label>
                                <input type="text" name="identity" class="py-1 px-4 text-black input input-bordered w-full max-w-md" placeholder="t3chnobromo@gmail.com"/>
                            </div>
                            <div class="form-control w-full max-w-md">
                                <label for="password" class=" label font-medium pb-1">
                                    <span class="label-text text-[13px]">Password</span>
                                </label>
                                <input type="password" name="password" class=" px-4 text-black py-1 input input-bordered w-full max-w-md" placeholder="**********"/>
                            </div>
                            <div class="w-full max-w-md">
                                <a
                                        href="/reset"
                                        class="font-medium text-primary hover:cursor-pointer hover:underline"
                                >
                                    Forgot Password?</a
                                >
                            </div>

                            <div class="w-full max-w-md pt-2">
                                <button type="submit" class="btn btn-primary w-full  bg-gradient-to-r py-2 hover:scale-95 hover:bg-gradient-to-r  text-black rounded-lg">Login</button>
                            </div>
                            {#if form?.notVerified}
                                <div class="text-white">Warning: Invalid email address!</div>
                            {/if}
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class=" pt-20  h-screen bg-black hidden lg:flex w-1/2 justify-center items-center">
            <img src="../black.png" draggable="false" alt="" class="w-screen scale-x-[-1]" />
        </div>
    </div>
</div>
