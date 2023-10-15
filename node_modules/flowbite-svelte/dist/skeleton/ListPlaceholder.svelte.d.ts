import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ListPlaceholderProps = typeof __propDef.props;
export type ListPlaceholderEvents = typeof __propDef.events;
export type ListPlaceholderSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Skeleton List Placeholder](https://flowbite-svelte.com/docs/components/skeleton#List_placeholder)
 * ## Props
 * @prop divClass: string = 'p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700';
 * ## Example
 * ```
 * <script>
 *   import { ListPlaceholder } from 'flowbite-svelte'
 * </script>
 *
 * <ListPlaceholder />
 * ```
 */
export default class ListPlaceholder extends SvelteComponentTyped<ListPlaceholderProps, ListPlaceholderEvents, ListPlaceholderSlots> {
}
export {};
//# sourceMappingURL=ListPlaceholder.svelte.d.ts.map