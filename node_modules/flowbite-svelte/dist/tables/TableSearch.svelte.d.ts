import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        inputValue?: string | undefined;
        striped?: boolean | undefined;
        hoverable?: boolean | undefined;
        placeholder?: string | undefined;
        customColor?: string | undefined;
        color?: "red" | "yellow" | "green" | "purple" | "blue" | "default" | "custom" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableSearchProps = typeof __propDef.props;
export type TableSearchEvents = typeof __propDef.events;
export type TableSearchSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Table](https://flowbite-svelte.com/docs/components/table)
 * ## Props
 * @prop divClass: string = 'relative overflow-x-auto shadow-md sm:rounded-lg';
 * @prop inputValue: string = '';
 * @prop striped: boolean = false;
 * @prop hoverable: boolean = false;
 * @prop placeholder: string = 'Search';
 * @prop customColor: string = '';
 * @prop color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'default' | 'custom' = 'default';
 */
export default class TableSearch extends SvelteComponentTyped<TableSearchProps, TableSearchEvents, TableSearchSlots> {
}
export {};
//# sourceMappingURL=TableSearch.svelte.d.ts.map