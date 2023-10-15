<script>
    import Footer from "../../Footer.svelte";
    let open = false
    import { page } from '$app/stores';
    const Event =$page.params.Event;
    // Function to split text into paragraphs based on #
    function splitContent(content) {
        return content.split("#");
    }
    // let paragraphs = splitContent(record.Text_Input);
    console.log(Event);
    export let data;
</script>



{#each data?.records as record}
    {#if Event===record.Link}
        <section class="text-gray-700 body-font overflow-hidden bg-white pt-40 h-screen">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`${record.Image_Link}`}>
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{`${record.Name}`}</h1>
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">{`${record.Heading}`}</h2>

                        <h1 class="text-gray-900 text-xl title-font font-medium mb-1 lg:pt-10">Description</h1>
                        <p class="leading-relaxed">{`${record.Text_Input}`}</p>
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

                            <div class="flex ml-6 items-center">


                            </div>
                        </div>
                        <div class="flex justify-between">
                            <span class="title-font font-medium text-2xl text-gray-900">Range: ₹ {`${record.Invest}`}</span>
                            <a href="/contact"><button  class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Invest Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/if}




{/each}


<Footer/>