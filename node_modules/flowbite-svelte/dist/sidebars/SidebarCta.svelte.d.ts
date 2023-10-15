import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divWrapperClass?: string | undefined;
        divClass?: string | undefined;
        spanClass?: string | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
    };
};
export type SidebarCtaProps = typeof __propDef.props;
export type SidebarCtaEvents = typeof __propDef.events;
export type SidebarCtaSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Sidebar](https://flowbite-svelte.com/docs/components/sidebar)
 * ## Props
 *
 * ## Example
 * ```
 * <script>
 *   import { SidebarCta } from 'flowbite-svelte';
 * </script>
 *
 * <SidebarCta label="Beta">
 *   <svelte:fragment slot="icon">
 *     <button
 *       type="button"
 *       class="ml-auto -mx-1.5 -my-1.5 bg-primary-50 text-primary-900 rounded-lg focus:ring-2 focus:ring-primary-400 p-1 hover:bg-primary-200 inline-flex h-6 w-6 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800"
 *       data-collapse-toggle="dropdown-cta"
 *       aria-label="Close"
 *     >
 *       <span class="sr-only">Close</span>
 *       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
 *     </button>
 *   </svelte:fragment>
 *   <p class="mb-3 text-sm text-primary-900 dark:text-primary-400">
 *     Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a
 *     limited time in your profile.
 *   </p>
 *   <a
 *     class="text-sm text-primary-900 underline hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
 *     href="/">Turn new navigation off</a
 *   >
 * </SidebarCta>
 *
 * ```
 */
export default class SidebarCta extends SvelteComponentTyped<SidebarCtaProps, SidebarCtaEvents, SidebarCtaSlots> {
}
export {};
//# sourceMappingURL=SidebarCta.svelte.d.ts.map