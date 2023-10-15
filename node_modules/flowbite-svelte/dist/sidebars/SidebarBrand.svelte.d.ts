import { SvelteComponentTyped } from "svelte";
import type { SiteType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        site: SiteType;
        aClass?: string | undefined;
        imgClass?: string | undefined;
        spanClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SidebarBrandProps = typeof __propDef.props;
export type SidebarBrandEvents = typeof __propDef.events;
export type SidebarBrandSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Sidebar](https://flowbite-svelte.com/docs/components/sidebar)
 * ## Props
 * @prop site: SiteType;
 * @prop aClass: string = 'flex items-center pl-2.5 mb-5';
 * @prop imgClass: string = 'h-6 mr-3 sm:h-7';
 * @prop spanClass: string = 'self-center text-xl font-semibold whitespace-nowrap dark:text-white';
 * ## Example
 * ```
 * <script>
 *   import { SidebarBrand } from 'flowbite-svelte'
 *
 *   let site = {
 *     name: 'Flowbite-Svelte',
 *     href: '/',
 *     img: '/images/flowbite-svelte-icon-logo.svg'
 *   };
 * </script>
 * <SidebarBrand {site} />
 * ```
 */
export default class SidebarBrand extends SvelteComponentTyped<SidebarBrandProps, SidebarBrandEvents, SidebarBrandSlots> {
}
export {};
//# sourceMappingURL=SidebarBrand.svelte.d.ts.map