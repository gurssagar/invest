import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        active?: boolean | undefined;
        activeClass?: string | undefined;
        nonActiveClass?: string | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: MouseEvent;
        focus: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        mouseover: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NavLiProps = typeof __propDef.props;
export type NavLiEvents = typeof __propDef.events;
export type NavLiSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Navbar](https://flowbite-svelte.com/docs/components/navbar)
 * ## Props
 * @prop href: string = '';
 * @prop active: boolean = false;
 * @prop activeClass: string | undefined = undefined;
 * @prop nonActiveClass: string | undefined = undefined;
 * ## Event
 * - on:blur
 * - on:change
 * - on:click
 * - on:focus
 * - on:keydown
 * - on:keypress
 * - on:keyup
 * - on:mouseenter
 * - on:mouseleave
 * - on:mouseover
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
export default class NavLi extends SvelteComponentTyped<NavLiProps, NavLiEvents, NavLiSlots> {
}
export {};
//# sourceMappingURL=NavLi.svelte.d.ts.map