<script>

	import ClickOutside from 'svelte-click-outside';

	import {
		Drawer,
		Button,
		CloseButton,
		Sidebar,
		SidebarBrand,
		SidebarCta,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		DropdownItem
	} from 'flowbite-svelte';
	export let open = false
	function hidePanel() {
		open = false;
	}
	let triggerEl;
	let visible = true;

	function toggleVissible() {
		visible = !visible
	}
	let site = {
		href: '/',
		img: 'logo.webp'
	};
</script>
<button class="fixed right-0 mt-[-10px] pr-8 text-black cursor-pointer mr-4 border-none focus:outline-none" class:open bind:this={triggerEl} on:click={() => open = !open} on:click={() => visible = false} >

	<svg width=32 height=24>
		<line id="top" x1=0 y1=2  x2=32 y2=2/>
		<line id="middle" x1=0 y1=12 x2=24 y2=12/>
		<line id="bottom" x1=0 y1=22 x2=32 y2=22/>
	</svg>

</button>
{#if open}
	<ClickOutside on:clickoutside={hidePanel} exclude={[triggerEl]} }>
		<Sidebar divClass="gap-2">
			<SidebarWrapper divClass='fixed  bg-[#1c1c1c] left-0 z-[99] pt-4 mt-[-40px] fixed overflow-y-auto w-2/3 px-3 rounded h-screen' >
				<SidebarGroup>
					<SidebarItem label="Home" href="/" class="text-white active:border-white active:border-l-4	hover:!bg-[#1c1c1c]">
						<svelte:fragment slot="icon" >
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="24px" height="24px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,1.05078c-0.2175,0 -0.43414,0.06898 -0.61914,0.20898l-23,17.95117c-0.43,0.34 -0.50992,0.9682 -0.16992,1.4082c0.34,0.43 0.9682,0.50992 1.4082,0.16992l1.38086,-1.07812v26.28906c0,0.55 0.45,1 1,1h14v-18h12v18h14c0.55,0 1,-0.45 1,-1v-26.28906l1.38086,1.07812c0.19,0.14 0.39914,0.21094 0.61914,0.21094c0.3,0 0.58906,-0.13086 0.78906,-0.38086c0.34,-0.44 0.26008,-1.0682 -0.16992,-1.4082l-23,-17.95117c-0.185,-0.14 -0.40164,-0.20898 -0.61914,-0.20898zM35,5v1.05078l6,4.67969v-5.73047z"></path></g></g></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="About" href="/About" class="hover:!bg-[#1c1c1c] space-x-3" spanClass="text-white" >
						<svelte:fragment slot="icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 13h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-10v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1zm2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1z" fill="#ffffff" class="color000 svgShape"></path></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Projects" href="/Projects" class="hover:!bg-[#1c1c1c] space-x-3" spanClass="text-white" >
						<svelte:fragment slot="icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 13h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-10v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1zm2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1z" fill="#ffffff" class="color000 svgShape"></path></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Contact Us" href="/contact" class="hover:!bg-[#1c1c1c] space-x-3" spanClass="text-white" >
						<svelte:fragment slot="icon" >
							<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29" xml:space="preserve" width="24px" height="24px"><path d="M5.661 23.339c4.882 4.882 12.796 4.882 17.678 0 4.882-4.882 4.882-12.796 0-17.678s-12.796-4.882-17.678 0C.78 10.543.78 18.457 5.661 23.339zm5.545-16.613l1.86 1.86c.372.372.451.947.193 1.406l-.699 1.241a.781.781 0 0 0 .129.937l4.141 4.141a.781.781 0 0 0 .937.128l1.241-.699a1.173 1.173 0 0 1 1.406.193l1.861 1.861a1.175 1.175 0 0 1 0 1.66l-.881.881a3.135 3.135 0 0 1-3.786.493l-.084-.048a24.54 24.54 0 0 1-8.868-8.681l-.423-.706a3.128 3.128 0 0 1 .469-3.823l.844-.844a1.173 1.173 0 0 1 1.66 0z" fill="#ffffff" class="color000 svgShape"></path></svg>
						</svelte:fragment>
					</SidebarItem>
				</SidebarGroup>

			</SidebarWrapper>
		</Sidebar>
	</ClickOutside>

{/if}

<style>
	svg {
		min-height: 24px;
		transition: transform 0.2s ease-in-out;
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.2s ease-in-out;
	}

	button {
		z-index: 20;
	}
	button:active{
		opacity: 0;
	}

	.open svg {
		transform: scale(0.7);

	}

	.open #top {
		transform: translate(6px, 0px) rotate(45deg)
	}

	.open #middle {
		opacity: 0;
	}

  .open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg)
	}

</style>