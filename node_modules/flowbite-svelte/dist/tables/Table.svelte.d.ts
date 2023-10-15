import { SvelteComponentTyped } from "svelte";
import type { TableColorType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        striped?: boolean | undefined;
        hoverable?: boolean | undefined;
        noborder?: boolean | undefined;
        shadow?: boolean | undefined;
        color?: TableColorType | undefined;
        customeColor?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Table](https://flowbite-svelte.com/docs/components/table)
 * - Setup
 * - Default table
 * - Striped rows
 * - Hover state
 * - Checkbox
 * - Search input
 * - Sorting by column
 * - Table head
 * - Table foot
 * - Table caption
 * - Without border
 * - Table with shadow
 * - Overflow scrolling
 * - Table colors
 * - Striped rows color
 * ## Props
 * @prop divClass: string = 'relative overflow-x-auto';
 * @prop striped: boolean = false;
 * @prop hoverable: boolean = false;
 * @prop noborder: boolean = false;
 * @prop shadow: boolean = false;
 * @prop color: TableColorType = 'default';
 * @prop customeColor: string = '';
 * ## Example
 * ```
 * <script>
 *   import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
 * </script>
 *
 * <Table>
 *   <TableHead>
 *     <TableHeadCell>Product name</TableHeadCell>
 *     <TableHeadCell>Color</TableHeadCell>
 *     <TableHeadCell>Category</TableHeadCell>
 *     <TableHeadCell>Price</TableHeadCell>
 *   </TableHead>
 *   <TableBody class="divide-y">
 *     <TableBodyRow>
 *       <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
 *       <TableBodyCell>Sliver</TableBodyCell>
 *       <TableBodyCell>Laptop</TableBodyCell>
 *       <TableBodyCell>$2999</TableBodyCell>
 *     </TableBodyRow>
 *     <TableBodyRow>
 *       <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
 *       <TableBodyCell>White</TableBodyCell>
 *       <TableBodyCell>Laptop PC</TableBodyCell>
 *       <TableBodyCell>$1999</TableBodyCell>
 *     </TableBodyRow>
 *     <TableBodyRow>
 *       <TableBodyCell>Magic Mouse 2</TableBodyCell>
 *       <TableBodyCell>Black</TableBodyCell>
 *       <TableBodyCell>Accessories</TableBodyCell>
 *       <TableBodyCell>$99</TableBodyCell>
 *     </TableBodyRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export default class Table extends SvelteComponentTyped<TableProps, TableEvents, TableSlots> {
}
export {};
//# sourceMappingURL=Table.svelte.d.ts.map