import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        size?: string | number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CardPlaceholderProps = typeof __propDef.props;
export type CardPlaceholderEvents = typeof __propDef.events;
export type CardPlaceholderSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Skeleton Card Placeholder](https://flowbite-svelte.com/docs/components/skeleton#Card_placeholder)
 * ## Props
 * @prop divClass: string =
 *   'p-4 rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700';
 * @prop size: keyof Sizes = 'sm';
 * ## Example
 * ```
 * <script>
 *   import { CardPlaceholder } from 'flowbite-svelte'
 * </script>
 *
 * <CardPlaceholder />
 * <CardPlaceholder size='md' class='mt-8'/>
 * <CardPlaceholder size='lg' class='mt-8'/>
 * <CardPlaceholder size='xl' class='mt-8'/>
 * <CardPlaceholder size='xxl' class='mt-8'/>
 * ```
 */
export default class CardPlaceholder extends SvelteComponentTyped<CardPlaceholderProps, CardPlaceholderEvents, CardPlaceholderSlots> {
}
export {};
//# sourceMappingURL=CardPlaceholder.svelte.d.ts.map