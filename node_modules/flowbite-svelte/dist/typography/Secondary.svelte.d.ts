import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string | undefined;
        secondaryClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SecondaryProps = typeof __propDef.props;
export type SecondaryEvents = typeof __propDef.events;
export type SecondarySlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Heading Secondary](https://flowbite-svelte.com/docs/typography/heading#Second-level_heading)
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
 * @prop color: string = 'text-gray-500 dark:text-gray-400';
 * @prop secondaryClass: string = 'font-semibold';
 * ## Example
 * ```
 * <script>
 *   import {  Heading, Secondary } from 'flowbite-svelte'
 * </script>
 *
 * <Heading tag="h1" customSize="text-5xl font-extrabold">Flowbite <Secondary class="ml-2">This is secondary text</Secondary></Heading>
 * ```
 */
export default class Secondary extends SvelteComponentTyped<SecondaryProps, SecondaryEvents, SecondarySlots> {
}
export {};
//# sourceMappingURL=Secondary.svelte.d.ts.map