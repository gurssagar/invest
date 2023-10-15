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
export type TextPlaceholderProps = typeof __propDef.props;
export type TextPlaceholderEvents = typeof __propDef.events;
export type TextPlaceholderSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Skeleton](https://flowbite-svelte.com/docs/components/skeleton)
 * ## Props
 * @prop divClass: string = 'space-y-2.5 animate-pulse';
 * @prop size: keyof Sizes = 'sm';
 * ## Example
 * ```
 * <script>
 *   import { TextPlaceholder } from 'flowbite-svelte'
 * </script>
 *
 * <TextPlaceholder />
 * <TextPlaceholder size='md' class='mt-8'/>
 * <TextPlaceholder size='lg' class='mt-8'/>
 * <TextPlaceholder size='xl' class='mt-8'/>
 * <TextPlaceholder size='xxl' class='mt-8'/>
 * ```
 */
export default class TextPlaceholder extends SvelteComponentTyped<TextPlaceholderProps, TextPlaceholderEvents, TextPlaceholderSlots> {
}
export {};
//# sourceMappingURL=TextPlaceholder.svelte.d.ts.map