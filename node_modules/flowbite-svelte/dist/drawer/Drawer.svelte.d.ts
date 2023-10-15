import { SvelteComponentTyped } from "svelte";
import type { drawerTransitionParamTypes, drawerTransitionTypes } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        activateClickOutside?: boolean | undefined;
        hidden?: boolean | undefined;
        position?: "fixed" | "absolute" | undefined;
        leftOffset?: string | undefined;
        rightOffset?: string | undefined;
        topOffset?: string | undefined;
        bottomOffset?: string | undefined;
        width?: string | undefined;
        backdrop?: boolean | undefined;
        bgColor?: string | undefined;
        bgOpacity?: string | undefined;
        placement?: "bottom" | "left" | "right" | "top" | undefined;
        id?: string | undefined;
        divClass?: string | undefined;
        transitionParams?: drawerTransitionParamTypes | undefined;
        transitionType?: drawerTransitionTypes;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            hidden: boolean;
        };
    };
};
export type DrawerProps = typeof __propDef.props;
export type DrawerEvents = typeof __propDef.events;
export type DrawerSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Drawer](https://flowbite-svelte.com/docs/components/drawer)
 * - Set up
 * - Default drawer
 * - Drawer navigation
 * - Contact form
 * - Form elements
 * - Placement
 * - Backdrop
 * - Position
 * - Disabling outside click and backdrop
 * - Disabling only outside click
 * ## Props
 * @prop activateClickOutside: boolean = true;
 * @prop hidden: boolean = true;
 * @prop position: 'fixed' | 'absolute' = 'fixed';
 * @prop leftOffset: string = 'inset-y-0 left-0';
 * @prop rightOffset: string = 'inset-y-0 right-0';
 * @prop topOffset: string = 'inset-x-0 top-0';
 * @prop bottomOffset: string = 'inset-x-0 bottom-0';
 * @prop width: string = 'w-80';
 * @prop backdrop: boolean = true;
 * @prop bgColor: string = 'bg-gray-900';
 * @prop bgOpacity: string = 'bg-opacity-75';
 * @prop placement: 'left' | 'right' | 'top' | 'bottom' = 'left';
 * @prop id: string = 'drawer-example';
 * @prop divClass: string = 'overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800';
 * @prop transitionParams: drawerTransitionParamTypes = {};
 * @prop transitionType: drawerTransitionTypes = 'fly';
 * ## Example
 * ```
 * <script>
 *   import { Drawer, Button, CloseButton } from 'flowbite-svelte';
 *   import { sineIn } from 'svelte/easing';
 *   let hidden1 = true;
 *   let transitionParams = {
 *     x: -320,
 *     duration: 200,
 *     easing: sineIn
 *   };
 * </script>
 *
 * <div class="text-center">
 *   <Button on:click={() => (hidden1 = false)}>Show drawer</Button>
 * </div>
 *
 * <Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id='sidebar1'>
 * <div class='flex items-center'>
 *   <h5
 *     id="drawer-label"
 *     class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
 *     <svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Info
 *   </h5>
 *   <CloseButton on:click={() => (hidden1 = true)} class='mb-4 dark:text-white'/>
 *     </div>
 *   <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
 *     Supercharge your hiring by taking advantage of our <a
 *       href="/"
 *       class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for
 *     Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
 *     job board.
 *   </p>
 *   <div class="grid grid-cols-2 gap-4">
 *     <Button color="light" href="/">Learn more</Button>
 *     <Button href="/" >Get access <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
 *   </div>
 * </Drawer>
 * ```
 */
export default class Drawer extends SvelteComponentTyped<DrawerProps, DrawerEvents, DrawerSlots> {
}
export {};
//# sourceMappingURL=Drawer.svelte.d.ts.map