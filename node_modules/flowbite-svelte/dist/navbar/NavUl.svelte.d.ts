import { SvelteComponentTyped } from "svelte";
export type NavbarLiType = {
    activeClass: string;
    nonActiveClass: string;
};
import { type SlideParams } from 'svelte/transition';
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        ulClass?: string | undefined;
        hidden?: boolean | undefined;
        slideParams?: SlideParams | undefined;
        activeClass?: string | undefined;
        nonActiveClass?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NavUlProps = typeof __propDef.props;
export type NavUlEvents = typeof __propDef.events;
export type NavUlSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Navbar](https://flowbite-svelte.com/docs/components/navbar)
 * ## Props
 * @prop divClass: string = 'w-full md:block md:w-auto';
 * @prop ulClass: string = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium';
 * @prop hidden: boolean = true;
 * @prop slideParams: SlideParams = { delay: 250, duration: 500, easing: quintOut };
 * @prop activeClass: string = 'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent';
 * @prop nonActiveClass: string = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
 * ## Example
 * ```
 * <Navbar let:hidden let:toggle>
 *   <NavBrand href="/">
 *     <img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
 *     <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Flowbite </span>
 *   </NavBrand>
 *   <NavHamburger on:click={toggle} />
 *   <NavUl {hidden}>
 *     <NavLi href="/" active={true}>Home</NavLi>
 *     <NavLi href="/about">About</NavLi>
 *     <NavLi href="/services">Services</NavLi>
 *     <NavLi href="/pricing">Pricing</NavLi>
 *     <NavLi href="/contact">Contact</NavLi>
 *   </NavUl>
 * </Navbar>
 * ```
 */
export default class NavUl extends SvelteComponentTyped<NavUlProps, NavUlEvents, NavUlSlots> {
}
export {};
//# sourceMappingURL=NavUl.svelte.d.ts.map