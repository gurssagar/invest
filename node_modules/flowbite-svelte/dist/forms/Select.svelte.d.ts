import { SvelteComponentTyped } from "svelte";
import type { SelectOptionType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        items?: SelectOptionType[] | undefined;
        value?: any;
        placeholder?: string | undefined;
        underline?: boolean | undefined;
        size?: "sm" | "lg" | "md" | undefined;
        defaultClass?: string | undefined;
        underlineClass?: string | undefined;
    };
    events: {
        change: Event;
        contextmenu: MouseEvent;
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Select](https://flowbite-svelte.com/docs/forms/select)
 * - Setup
 * - Select input example
 * - Disabled state
 * - Underline select
 * - Select with dropdown
 * - Sizes
 * - Custom options
 * ## Props
 * @prop items: SelectOptionType[] = [];
 * @prop value: string | number;
 * @prop placeholder: string = 'Choose option ...';
 * @prop underline: boolean = false;
 * @prop size: 'sm' | 'md' | 'lg' = 'md';
 * @prop defaultClass: string = 'text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';
 * @prop underlineClass: string = 'text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer';
 * ## Example
 * ```
 * <script>
 *   import { Select, Label } from 'flowbite-svelte';
 *   let selected;
 *   let countries = [
 *     {value:"us", name: "United States"},
 *     {value:"ca", name: "Canada"},
 *     {value:"fr", name: "France"},
 *   ]
 * </script>
 *
 * <Label>Select an option
 *   <Select class="mt-2" items={countries} bind:value={selected} />
 * </Label>
 * ```
 */
export default class Select extends SvelteComponentTyped<SelectProps, SelectEvents, SelectSlots> {
}
export {};
//# sourceMappingURL=Select.svelte.d.ts.map