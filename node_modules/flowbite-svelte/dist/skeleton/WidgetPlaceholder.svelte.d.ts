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
export type WidgetPlaceholderProps = typeof __propDef.props;
export type WidgetPlaceholderEvents = typeof __propDef.events;
export type WidgetPlaceholderSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Skeleton Widget Placeholder](https://flowbite-svelte.com/docs/components/skeleton#Widget_placeholder)
 * ## Props
 * @prop divClass: string = 'p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700';
 * ## Example
 * ```
 * <script>
 *   import { WidgetPlaceholder } from 'flowbite-svelte'
 * </script>
 *
 * <WidgetPlaceholder />
 * ```
 */
export default class WidgetPlaceholder extends SvelteComponentTyped<WidgetPlaceholderProps, WidgetPlaceholderEvents, WidgetPlaceholderSlots> {
}
export {};
//# sourceMappingURL=WidgetPlaceholder.svelte.d.ts.map