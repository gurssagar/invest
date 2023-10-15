import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        padding?: string | undefined;
    };
    events: {
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
        default: {};
    };
};
export type TableHeadCellProps = typeof __propDef.props;
export type TableHeadCellEvents = typeof __propDef.events;
export type TableHeadCellSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Table](https://flowbite-svelte.com/docs/components/table)
 * ## Props
 * @prop padding: string = 'px-6 py-3';
 * ## Event
 * - on:click
 * - on:focus
 * - on:keydown
 * - on:keypress
 * - on:keyup
 * - on:mouseenter
 * - on:mouseleave
 * - on:mouseover
 */
export default class TableHeadCell extends SvelteComponentTyped<TableHeadCellProps, TableHeadCellEvents, TableHeadCellSlots> {
}
export {};
//# sourceMappingURL=TableHeadCell.svelte.d.ts.map