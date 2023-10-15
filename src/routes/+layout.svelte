<script>
    import '../app.css';
    import Hamburger from "./Hamburger.svelte";
    import Logo from "./Logo.svelte";
    import Footer from './Footer.svelte';
    export let data;

</script>

<div>
    <header class=" fixed z-[100] flex lg:display justify-between px-8 w-[100%] h-20 bg-background/80 backdrop-blur-xl items-center text-gray-600 ">
        <nav class="flex lg:hidden visible select-none ">
            <Logo/>
        </nav>
        <nav class=" lg:hidden visible">
            <Hamburger />
        </nav>
        <nav class="w-full hidden lg:flex">
            <nav class="text-black uppercase font-instrument text-l text-bold w-[100%] lg:flex hidden justify-between">
                <a href="/"><img draggable="false"  src="/logo.webp" class="lg:h-32 h-24 block  " alt="logo" style="object-fit: cover"></a>
                <div class="flex py-2 justify-center gap-12 items-center">
                    <a href="/" class="hover:cursor-pointer hover:underline hover:scale-105 hover:opacity-80 transition-all ease-in-out duration-300">
                        <div class="flex justify-center items-center flex-row gap-2 ">
                            <img src="/home.svg" class="w-4 h-auto selet-none mt-[-6px]" alt=""/>
                            <h3>Home</h3>
                        </div>
                    </a>
                    <a href="/About" class="hover:cursor-pointer hover:underline hover:scale-105 hover:opacity-80 transition-all ease-in-out duration-300">
                        <div class="flex justify-center items-center flex-row gap-2 ">
                            <img src="/call.svg" class="w-4 h-auto select-none mt-[-4px]" alt=""/>
                            <h3 class="cursor-pointer">About</h3>

                        </div>
                    </a>
                    <a href="/Projects" class="hover:cursor-pointer hover:underline hover:scale-105 hover:opacity-80 transition-all ease-in-out duration-300">
                        <div class="flex justify-center items-center flex-row gap-2 ">
                            <img src="/calendar.svg" class="w-4 h-auto selet-none mt-[-4px]" alt=""/>
                            <h3 class="cursor-pointer">Projects</h3>

                        </div>
                    </a>
                    <a href="/contact" class="hover:cursor-pointer hover:underline hover:scale-105 hover:opacity-80 transition-all ease-in-out duration-300">
                        <div class="flex justify-center items-center flex-row gap-2 ">
                            <img src="/call.svg" class="w-4 h-auto selet-none mt-[-4px]" alt=""/>
                            <h3 class="cursor-pointer">Contact</h3>

                        </div>
                    </a>

                </div>
                <div class="flex justify-center items-center gap-4">
                    {#if !data.user}

                        <div class="dropdown dropdown-end">
                            <a href="/login" class="btn rounded-xl py-1 px-6 bg-gradient2 hover:bg-gradient2/5 hover:text-text hover:border-gradient2 border-1 border-background text-background">Login</a>
                            <a href="/register" class="btn rounded-xl py-1 px-6 bg-gradient1 hover:bg-gradient1/5 hover:text-text hover:border-gradient1 border-1 border-background text-background">Register</a>
                        </div>
                    {:else}
                        <div class="dropdown dropdown-end">
                            <a href="/Dashboard" class="btn rounded-xl py-1 px-6 bg-gradient2 hover:bg-gradient2/5 hover:text-text hover:border-gradient2 border-1 border-background text-background">Dashboard</a>
                        </div>
                        <div class="dropdown dropdown-end text-black ">
                            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full ">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png" alt="User avatar" />
                                </div>
                            </label>
                            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                            <ul
                                    tabindex="0"
                                    class="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-background rounded-box w-52"
                            >
                                <li>
                                    <a href="/my/projects" class="justify-between">My Projects</a>
                                </li>
                                <li><a href="/my/settings">Settings</a></li>
                                <li>
                                    <form action="/logout" method="POST">
                                        <button type="submit" class="w-full text-start">Logout</button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    {/if}
                </div>
                <!-- <div class=" flex justify-center invisible lg:visible">
                    <div class="flex py-6">
                    <a href="https://www.facebook.com/ieeegtbit/"><img style="object-fit:cover" src="/fb.png" class=" px-2 h-6 block " alt="logo"></a>

                    <a href="https://www.instagram.com/ieeegtbit/"><img style="object-fit:cover" src="/instagram.png" class=" px-2 h-6 block " alt="logo"></a>

                    <a href="https://in.linkedin.com/company/ieee-student-branch-at-gtbit"><img style="object-fit:cover" src="/linkedin.png" class=" px-2 h-6 block " alt="logo"></a>

                    <a href="https://in.linkedin.com/company/ieee-student-branch-at-gtbit"><img style="object-fit:cover" src="/email.png" class=" px-2 h-6 block " alt="logo"></a>
                    </div>

                </div> -->
                <!-- <div class="flex  justify-end md:justify-end items-start  w-full md:w-auto md:items-center space-x-12 ">
                    <button class="text-white hover:text-gray-200 w-6"><a href="https://www.instagram.com/techfest_sanchaar_official/">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="instagram"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path></svg>
                    </button>
                    <button class="text-white hover:text-gray-200 w-6"><a href="https://www.facebook.com/gtbitofficial/">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook"><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg></a>
                    </button>
                    <button class="text-white hover:text-gray-200 w-6">
                        <a href="https://www.linkedin.com/school/guru-tegh-bahadur-institute-of-technology/">

                            <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 100 100" id="linkedin"><path d="M95 59.727V93H75.71V61.955c0-7.799-2.79-13.121-9.773-13.121-5.33 0-8.502 3.587-9.897 7.056-.509 1.241-.64 2.967-.64 4.704V93H36.104s.26-52.58 0-58.028h19.295v8.225c-.039.062-.09.128-.127.188h.127v-.188c2.563-3.948 7.141-9.588 17.388-9.588C85.483 33.609 95 41.903 95 59.727zM15.919 7C9.318 7 5 11.33 5 17.024c0 5.57 4.193 10.031 10.663 10.031h.129c6.729 0 10.914-4.46 10.914-10.031C26.579 11.33 22.521 7 15.919 7zM6.146 93h19.289V34.972H6.146V93z"></path></svg></a>

                </div> -->


            </nav>

        </nav>
    </header>
    <div class="min-h-screen">
        <slot />
    </div>
</div>
<div class="z-30">
    <Footer/>
</div>
