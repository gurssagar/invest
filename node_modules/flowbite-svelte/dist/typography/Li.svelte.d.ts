import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        icon?: boolean | undefined;
        liClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LiProps = typeof __propDef.props;
export type LiEvents = typeof __propDef.events;
export type LiSlots = typeof __propDef.slots;
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
 * @prop icon: boolean = false;
 * @prop liClass: string = '';
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
export default class Li extends SvelteComponentTyped<LiProps, LiEvents, LiSlots> {
}
export {};
//# sourceMappingURL=Li.svelte.d.ts.map