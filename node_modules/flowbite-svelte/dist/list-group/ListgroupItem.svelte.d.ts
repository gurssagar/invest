import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        active?: boolean | undefined;
        current?: boolean | undefined;
        disabled?: boolean | undefined;
        href?: string | undefined;
        currentClass?: string | undefined;
        normalClass?: string | undefined;
        disabledClass?: string | undefined;
        focusClass?: string | undefined;
        hoverClass?: string | undefined;
        itemDefaultClass?: string | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: MouseEvent;
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
        default: {
            item: SvelteAllProps;
        };
    };
};
export type ListgroupItemProps = typeof __propDef.props;
export type ListgroupItemEvents = typeof __propDef.events;
export type ListgroupItemSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to List Group](https://flowbite-svelte.com/docs/components/list-group)
 * ## Props
 * @prop active: boolean = getContext('active');
 * @prop current: boolean = false;
 * @prop disabled: boolean = false;
 * @prop href: string = '';
 * @prop currentClass: string = 'text-white bg-primary-700 dark:text-white dark:bg-gray-800';
 * @prop normalClass: string = '';
 * export let disabledClass: string = 'text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400';
 * @prop focusClass: string = 'focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white';
 * @prop hoverClass: string = 'hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white';
 * @prop itemDefaultClass: string = 'py-2 px-4 w-full text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg';
 * ## Event
 * - on:blur
 * - on:change
 * - on:click
 * - on:focus
 * - on:keydown
 * - on:keypress
 * - on:keyup
 * - on:mouseenter
 * - on:mouseleave
 * - on:mouseover
 */
export default class ListgroupItem extends SvelteComponentTyped<ListgroupItemProps, ListgroupItemEvents, ListgroupItemSlots> {
}
export {};
//# sourceMappingURL=ListgroupItem.svelte.d.ts.map