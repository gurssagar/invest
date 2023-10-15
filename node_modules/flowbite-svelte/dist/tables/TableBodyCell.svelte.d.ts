import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        tdClass?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableBodyCellProps = typeof __propDef.props;
export type TableBodyCellEvents = typeof __propDef.events;
export type TableBodyCellSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Table](https://flowbite-svelte.com/docs/components/table)
 * ## Props
 * @prop tdClass: string = 'px-6 py-4 whitespace-nowrap font-medium ';
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
export default class TableBodyCell extends SvelteComponentTyped<TableBodyCellProps, TableBodyCellEvents, TableBodyCellSlots> {
}
export {};
//# sourceMappingURL=TableBodyCell.svelte.d.ts.map