import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        theadClass?: string | undefined;
        defaultRow?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableHeadProps = typeof __propDef.props;
export type TableHeadEvents = typeof __propDef.events;
export type TableHeadSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Table](https://flowbite-svelte.com/docs/components/table)
 * ## Props
 * @prop theadClass: string = 'text-xs uppercase';
 * @prop defaultRow: boolean = true;
 */
export default class TableHead extends SvelteComponentTyped<TableHeadProps, TableHeadEvents, TableHeadSlots> {
}
export {};
//# sourceMappingURL=TableHead.svelte.d.ts.map