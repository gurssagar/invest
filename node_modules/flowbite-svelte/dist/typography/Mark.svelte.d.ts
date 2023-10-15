import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string | undefined;
        bgColor?: string | undefined;
        markClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type MarkProps = typeof __propDef.props;
export type MarkEvents = typeof __propDef.events;
export type MarkSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Heading](https://flowbite-svelte.com/docs/typography/heading)
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
 * @prop color: string = 'text-white dark:bg-blue-500';
 * @prop bgColor: string = 'bg-blue-600';
 * @prop markClass: string = 'px-2 rounded';
 * ## Example
 * ```
 * <script>
 *   import {  Heading, P, Mark } from 'flowbite-svelte'
 * </script>
 *
 * <Heading tag="h1" class='mb-4'>Regain <Mark>control</Mark> over your days</Heading>
 * <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
 * ```
 */
export default class Mark extends SvelteComponentTyped<MarkProps, MarkEvents, MarkSlots> {
}
export {};
//# sourceMappingURL=Mark.svelte.d.ts.map