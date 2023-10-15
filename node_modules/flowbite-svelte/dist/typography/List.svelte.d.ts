import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        tag?: "ol" | "dl" | "ul" | undefined;
        list?: 'disc' | 'none' | 'decimal' | undefined;
        position?: "inside" | "outside" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ListProps = typeof __propDef.props;
export type ListEvents = typeof __propDef.events;
export type ListSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to List](https://flowbite-svelte.com/docs/typography/list)
 * - Setup
 * - Unordored list
 * - Icons
 * - Nested
 * - Unstyled
 * - Ordered list
 * - Nested
 * - Description List
 * - List with icon
 * - Advanced layout
 * - Horizontal List
 * ## Props
 * @prop tag: 'ul' | 'ol' | 'dl' = 'ul';
 * @prop list: 'disc' | 'none' | 'decimal' | undefined = undefined;
 * @prop position: 'inside' | 'outside' = 'inside';
 * ## Example
 * ```
 * <script>
 *   import { Li, List, Heading } from 'flowbite-svelte';
 * </script>
 *
 * <Heading
 *   tag="h2"
 *   customSize="text-lg font-semibold"
 *   class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
 * <List tag="ul" class="space-y-1">
 *   <Li>At least 10 characters (and up to 100 characters)</Li>
 *   <Li>At least one lowercase character</Li>
 *   <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
 * </List>
 * ```
 */
export default class List extends SvelteComponentTyped<ListProps, ListEvents, ListSlots> {
}
export {};
//# sourceMappingURL=List.svelte.d.ts.map