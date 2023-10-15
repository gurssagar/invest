import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        solid?: boolean | undefined;
        navClass?: string | undefined;
        solidClass?: string | undefined;
        olClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BreadcrumbProps = typeof __propDef.props;
export type BreadcrumbEvents = typeof __propDef.events;
export type BreadcrumbSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Breadcrumb](https://flowbite-svelte.com/docs/components/breadcrumb)
 * - Setup
 * - Default Breadcrumb
 * - Solid Breadcrumb
 * - Icons
 * ## Props
 * @prop solid: boolean = false;
 * @prop navClass: string = 'flex';
 * @prop solidClass: string = 'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700';
 * @prop olClass: string = 'inline-flex items-center space-x-1 md:space-x-3';
 * ## Example
 * ```
 * <script>
 *   import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
 * </script>
 *
 * <Breadcrumb aria-label="Default breadcrumb example">
 *   <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
 *   <BreadcrumbItem href="/">Projects</BreadcrumbItem>
 *   <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
 * </Breadcrumb>
 * ```
 */
export default class Breadcrumb extends SvelteComponentTyped<BreadcrumbProps, BreadcrumbEvents, BreadcrumbSlots> {
}
export {};
//# sourceMappingURL=Breadcrumb.svelte.d.ts.map