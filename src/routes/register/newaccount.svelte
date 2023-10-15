<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>

<style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css');</style>


<div class="min-w-screen min-h-screen bg-black flex items-center justify-center px-5 py-5">
    <div class="text-white rounded-3xl shadow-xl w-full overflow-hidden pt-12">
        <div class="md:flex w-full">
            <div class="hidden md:block w-1/2 py-10 px-10">
                <img src="../black.png" alt="" class="w-screen my-auto" />
            </div>

                 <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="text-center">
                    <h1 class="text-5xl text-white font-final">REGISTER</h1>
                    <!-- <p>Enter your information to register</p> -->
                </div>
                <form action="?/register" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
                    <div class="flex lg:pl-16">
                    <div class="lg:w-[44%] w-1/2 form-control max-w-md pr-2 items-center ">
                        <label for="name" class="label font-medium pb-1">
                            <span class="label-text text-[13px]">Name</span>
                        </label>
                        <input type="text" name="name" class="py-1 px-4 rounded-md input input-bordered text-black w-full max-w-md" placeholder="Gursagar Singh"/>
                    </div>
                    <div class="lg:w-[44%] w-1/2 form-control max-w-md pl-2 ">
                        <label for="email" class="label font-medium pb-1">
                            <span class="label-text text-[13px]">Email</span>
                        </label>
                        <input type="email" name="email" class="py-1 px-4 rounded-md input input-bordered w-full text-black max-w-md" placeholder="t3chnobromo@gmail.com"/>
                    </div>
                    </div>
                    <div class="form-control w-full max-w-md ">
                        <label for="password" class="label font-medium pb-1">
                            <span class="label-text text-[13px]">Password</span>
                        </label>
                        <input type="password" name="password" class="py-1 px-4 rounded-md input input-bordered w-full text-black max-w-md" placeholder="************" />
                    </div>
                    <div class="form-control w-full max-w-md">
                        <label for="passwordConfirm" class="label font-medium  pb-1">
                            <span class="label-text text-[13px]">Confirm Password</span>
                        </label>
                        <input type="password" name="passwordConfirm" class="py-1 px-4 input rounded-md input-bordered w-full text-black max-w-md" placeholder="************"/>
                    </div>
                    <div class="w-full max-w-md pt-2">
                        <button type="submit" class="btn btn-primary w-full bg-gradient-to-r from-cyan-500 to-emerald-300 hover:bg-gradient-to-r py-2 from-cyan-400 to-emerald-200 text-black font-bold">Register</button>
                    </div>
                </form>
                </div>
           
        </div>
    </div>
</div>
                <div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Register for an account
    </h2>
    <p class="text-center mt-1">
        Or <a href="/login" class="text-primary font-medium hover:cursor-pointer hover:underline"
    >sign in</a
    > if you already have an account.
    </p>

</div>