import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        italic?: boolean | undefined;
        underline?: boolean | undefined;
        linethrough?: boolean | undefined;
        uppercase?: boolean | undefined;
        gradient?: boolean | undefined;
        highlight?: boolean | undefined;
        highlightClass?: string | undefined;
        decorationClass?: string | undefined;
        gradientClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SpanProps = typeof __propDef.props;
export type SpanEvents = typeof __propDef.events;
export type SpanSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Heading Span](https://flowbite-svelte.com/docs/typography/heading)
 * - Setup
 * - Default heading
 * - Second-level heading
 * - Highlighted heading
 * - Heading mark
 * - Heading gradient
 * - Heading underline
 * - Breadcrumb context
 * - Badge context
 * - Secondary text
 * - Sizes
 * ## Props
 * @prop italic: boolean = false;
 * @prop underline: boolean = false;
 * @prop linethrough: boolean = false;
 * @prop uppercase: boolean = false;
 * @prop gradient: boolean = false;
 * @prop highlight: boolean = false;
 * @prop highlightClass: string = 'text-blue-600 dark:text-blue-500';
 * @prop decorationClass: string = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
 * @prop gradientClass: string = 'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400';
 * ## Example
 * ```
 * <script>
 *   import {  Heading, P, Span } from 'flowbite-svelte'
 * </script>
 *
 * <Heading tag="h1" class="mb-4">Get back to growth with <Span highlight>the world's #1</Span> CRM.</Heading>
 * <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
 * ```
 */
export default class Span extends SvelteComponentTyped<SpanProps, SpanEvents, SpanSlots> {
}
export {};
//# sourceMappingURL=Span.svelte.d.ts.map