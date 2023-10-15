import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        cols?: string | undefined;
        gap: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LayoutProps = typeof __propDef.props;
export type LayoutEvents = typeof __propDef.events;
export type LayoutSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Paragraph Layout](https://flowbite-svelte.com/docs/typography/paragraph#Layout)
 * - Default paragraph
 * - Leading paragraph
 * - First letter
 * - Paragraph link
 * - Paragraph bold
 * - Paragraph underline
 * - Paragraph italic
 * - Paragraph popover
 * - Layout
 * - Text alignment
 * ## Props
 * @prop divClass: string = 'grid';
 * @prop cols: string = 'grid-cols-1 sm:grid-cols-2';
 * @prop gap: number;
 * ## Example
 * ```
 * <script>
 *   import { P, Layout } from 'flowbite-svelte'
 * </script>
 *
 * <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
 *   Track work across the enterprise through an open, collaborative platform. Link issues across
 *   Jira and ingest data from other software development tools, so your IT support and operations
 *   teams have richer contextual information to rapidly respond to requests, incidents, and changes.
 * </P>
 * <Layout gap={6}>
 *   <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
 *     Track work across the enterprise through an open, collaborative platform. Link issues across
 *     Jira and ingest data from other software development tools, so your IT support and operations
 *     teams have richer contextual information to rapidly respond to requests, incidents, and
 *     changes.
 *   </P>
 *   <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
 *     Deliver great service experiences fast - without the complexity of traditional ITSM
 *     solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
 *     with a complete audit trail for every change.
 *   </P>
 * </Layout>
 * <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
 *   Deliver great service experiences fast - without the complexity of traditional ITSM
 *   solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
 *   with a complete audit trail for every change.
 * </P>
 * ```
 */
export default class Layout extends SvelteComponentTyped<LayoutProps, LayoutEvents, LayoutSlots> {
}
export {};
//# sourceMappingURL=Layout.svelte.d.ts.map