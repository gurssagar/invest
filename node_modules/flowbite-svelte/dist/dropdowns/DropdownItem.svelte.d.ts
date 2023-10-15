import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        defaultClass?: string | undefined;
        href?: string | undefined;
    };
    events: {
        click: MouseEvent;
        change: Event;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        focus: FocusEvent;
        blur: FocusEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DropdownItemProps = typeof __propDef.props;
export type DropdownItemEvents = typeof __propDef.events;
export type DropdownItemSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Dropdown](https://flowbite-svelte.com/docs/components/dropdown)
 * ## Props
 * @prop defaultClass: string = 'font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600';
 * @prop href: string | undefined = undefined;
 * ## Event
 * - on:click
 * - on:change
 * - on:keydown
 * - on:keyup
 * - on:focus
 * - on:blur
 * - on:mouseenter
 * - on:mouseleave
 */
export default class DropdownItem extends SvelteComponentTyped<DropdownItemProps, DropdownItemEvents, DropdownItemSlots> {
}
export {};
//# sourceMappingURL=DropdownItem.svelte.d.ts.map