import { SvelteComponentTyped } from "svelte";
import { type Writable } from 'svelte/store';
export interface TabCtxType {
    activeClasses: string;
    inactiveClasses: string;
    selected: Writable<HTMLElement>;
}
declare const __propDef: {
    props: {
        [x: string]: any;
        style?: "none" | "pill" | "underline" | "full" | undefined;
        defaultClass?: string | undefined;
        contentClass?: string | undefined;
        divider?: boolean | undefined;
        activeClasses?: string | undefined;
        inactiveClasses?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            style: "none" | "pill" | "underline" | "full";
        };
        divider: {};
    };
};
export type TabsProps = typeof __propDef.props;
export type TabsEvents = typeof __propDef.events;
export type TabsSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Tab](https://flowbite-svelte.com/docs/components/tab)
 * - Setup
 * - Default tabs
 * - Tabs with underline
 * - Tabs with icons
 * - Pills tabs
 * - Full width tabs
 * - Components in tab contents
 * - Custom style
 * ## Props
 * @prop style: 'full' | 'pill' | 'underline' | 'none' = 'none';
 * @prop defaultClass: string = 'flex flex-wrap space-x-2';
 * @prop contentClass: string = 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4';
 * @prop divider: boolean = true;
 * @prop activeClasses: string =
 *   'p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500';
 * @prop inactiveClasses: string =
 *   'p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300';
 * ## Example
 * ```
 * <script>
 *   import { Tabs, TabItem } from 'flowbite-svelte';
 * </script>
 *
 * <Tabs>
 *   <TabItem open title="Profile">
 *     <p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 *   </TabItem>
 *   <TabItem title="Settings">
 *     <p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 *   </TabItem>
 *   <TabItem title="Users">
 *     <p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 *   </TabItem>
 *   <TabItem title="Dashboard">
 *     <p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 *   </TabItem>
 *   <TabItem disabled>
 *     <span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
 *     <p class="text-sm text-gray-500 dark:text-gray-400"><b>Disabled:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 *   </TabItem>
 * </Tabs>
 * ```
 */
export default class Tabs extends SvelteComponentTyped<TabsProps, TabsEvents, TabsSlots> {
}
export {};
//# sourceMappingURL=Tabs.svelte.d.ts.map