import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        home?: boolean | undefined;
        href?: string | undefined;
        linkClass?: string | undefined;
        spanClass?: string | undefined;
        homeClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
    };
};
export type BreadcrumbItemProps = typeof __propDef.props;
export type BreadcrumbItemEvents = typeof __propDef.events;
export type BreadcrumbItemSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Breadcrumb](https://flowbite-svelte.com/docs/components/breadcrumb)
 * - Setup
 * - Default Breadcrumb
 * - Solid Breadcrumb
 * - Icons
 * ## Props
 * @prop home: boolean = false;
 * @prop href: string | undefined = undefined;
 * @prop linkClass: string = 'ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white';
 * @prop spanClass: string = 'ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400';
 * @prop homeClass: string = 'inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white';
 */
export default class BreadcrumbItem extends SvelteComponentTyped<BreadcrumbItemProps, BreadcrumbItemEvents, BreadcrumbItemSlots> {
}
export {};
//# sourceMappingURL=BreadcrumbItem.svelte.d.ts.map