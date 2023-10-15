import { SvelteComponentTyped } from "svelte";
import type { TransitionTypes, TransitionParamTypes } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        btnClass?: string | undefined;
        label?: string | undefined;
        spanClass?: string | undefined;
        ulClass?: string | undefined;
        transitionType?: TransitionTypes | undefined;
        transitionParams?: TransitionParamTypes | undefined;
        isOpen?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        arrowup: {};
        arrowdown: {};
        default: {};
    };
};
export type SidebarDropdownWrapperProps = typeof __propDef.props;
export type SidebarDropdownWrapperEvents = typeof __propDef.events;
export type SidebarDropdownWrapperSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Sidebar](https://flowbite-svelte.com/docs/components/sidebar)
 * ## Props
 * @prop btnClass: string = 'flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
 * @prop label: string = '';
 * @prop spanClass: string = 'flex-1 ml-3 text-left whitespace-nowrap';
 * @prop ulClass: string = 'py-2 space-y-2';
 * @prop transitionType: TransitionTypes = 'slide';
 * @prop transitionParams: TransitionParamTypes = {};
 * ## Example
 * ```
 * <script>
 *   import { page } from '$app/stores';
 *   import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem } from 'flowbite-svelte';
 *   let spanClass = 'flex-1 ml-3 whitespace-nowrap';
 *   $: activeUrl = $page.url.pathname
 *   $: containPath = ()=>{
 *     // add your logic here
 *     true
 *   }
 * </script>
 *
 * <Sidebar>
 *   <SidebarWrapper>
 *     <SidebarGroup>
 *       <SidebarItem label="Dashboard" active={activeUrl === '/dashboard'} />
 *       <SidebarDropdownWrapper label="E-commerce" isOpen={containPath}>
 *         <SidebarDropdownItem label="Products" href='/components/products' active={activeUrl === '/components/products'} />
 *         <SidebarDropdownItem label="Sidebar" href='/docs/components/sidebar' active={activeUrl === '/docs/components/sidebar'}/>
 *       </SidebarDropdownWrapper>
 *       <SidebarDropdownWrapper label="Items">
 *         <SidebarDropdownItem label="Item 1" href='/components/item1' active={activeUrl === '/components/item'} />
 *         <SidebarDropdownItem label="Item 2" href='/components/item2' active={activeUrl === '/components/billing'} />
 *       </SidebarDropdownWrapper>
 *     </SidebarGroup>
 *   </SidebarWrapper>
 * </Sidebar>
 * ```
 */
export default class SidebarDropdownWrapper extends SvelteComponentTyped<SidebarDropdownWrapperProps, SidebarDropdownWrapperEvents, SidebarDropdownWrapperSlots> {
}
export {};
//# sourceMappingURL=SidebarDropdownWrapper.svelte.d.ts.map