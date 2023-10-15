import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        open?: boolean | undefined;
        title?: string | undefined;
        activeClasses?: string | undefined;
        inactiveClasses?: string | undefined;
        defaultClass?: string | undefined;
    };
    events: {
        blur: FocusEvent;
        click: MouseEvent;
        contextmenu: MouseEvent;
        focus: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        mouseover: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        default: {};
    };
};
export type TabItemProps = typeof __propDef.props;
export type TabItemEvents = typeof __propDef.events;
export type TabItemSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Tab](https://flowbite-svelte.com/docs/components/tab)
 * ## Props
 * @prop open: boolean = false;
 * @prop title: string = 'Tab title';
 * @prop activeClasses: string | undefined = undefined;
 * @prop inactiveClasses: string | undefined = undefined;
 * @prop defaultClass: string =
 *   'inline-block text-sm font-medium text-center disabled:cursor-not-allowed';
 * ## Event
 * - on:blur
 * - on:click
 * - on:contextmenu
 * - on:focus
 * - on:keydown
 * - on:keypress
 * - on:keyup
 * - on:mouseenter
 * - on:mouseleave
 * - on:mouseover
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
export default class TabItem extends SvelteComponentTyped<TabItemProps, TabItemEvents, TabItemSlots> {
}
export {};
//# sourceMappingURL=TabItem.svelte.d.ts.map