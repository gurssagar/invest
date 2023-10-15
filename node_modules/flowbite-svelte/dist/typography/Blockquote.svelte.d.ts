import { SvelteComponentTyped } from "svelte";
import type { BlockQuoteType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        border?: boolean | undefined;
        italic?: boolean | undefined;
        borderClass?: string | undefined;
        bgClass?: string | undefined;
        bg?: boolean | undefined;
        baseClass?: string | undefined;
        alignment?: "center" | "left" | "right" | undefined;
        size?: BlockQuoteType | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BlockquoteProps = typeof __propDef.props;
export type BlockquoteEvents = typeof __propDef.events;
export type BlockquoteSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Blockquote](https://flowbite-svelte.com/docs/typography/blockquote)
 * - Default blockquote
 * - Solid background
 * - Blockquote icon
 * - Paragraph context
 * - User testimonial
 * - User Review
 * - Alignment
 * - Sizes
 * ## Props
 * @prop border: boolean = false;
 * @prop italic: boolean = true;
 * @prop borderClass: string = 'border-l-4 border-gray-300 dark:border-gray-500';
 * @prop bgClass: string = 'bg-gray-50 dark:bg-gray-800';
 * @prop bg: boolean = false;
 * @prop baseClass: string = 'font-semibold text-gray-900 dark:text-white';
 * @prop alignment: 'left' | 'center' | 'right' = 'left';
 * @prop size: BlockQuoteType = 'lg';
 * ## Example
 * ```
 * <script>
 *   import { Blockquote } from 'flowbite-svelte'
 * </script>
 *
 * <Blockquote size='xl'>
 * "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
 * </Blockquote>
 * ```
 */
export default class Blockquote extends SvelteComponentTyped<BlockquoteProps, BlockquoteEvents, BlockquoteSlots> {
}
export {};
//# sourceMappingURL=Blockquote.svelte.d.ts.map