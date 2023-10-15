import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: "red" | "yellow" | "green" | "purple" | "blue" | "default" | "custom" | undefined;
    };
    events: {
        click: MouseEvent;
        contextmenu: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableBodyRowProps = typeof __propDef.props;
export type TableBodyRowEvents = typeof __propDef.events;
export type TableBodyRowSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Table](https://flowbite-svelte.com/docs/components/table)
 * ## Props
 * @prop color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'default' | 'custom' = getContext('color');
 */
export default class TableBodyRow extends SvelteComponentTyped<TableBodyRowProps, TableBodyRowEvents, TableBodyRowSlots> {
}
export {};
//# sourceMappingURL=TableBodyRow.svelte.d.ts.map