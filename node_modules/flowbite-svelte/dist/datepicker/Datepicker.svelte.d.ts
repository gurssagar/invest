import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        range?: boolean | undefined;
        datepickerButtons?: boolean | undefined;
        datepickerFormat?: string | undefined;
        datepickerOrientation?: string | undefined;
        datepickerTitle?: string | undefined;
        attribute?: string | undefined;
        inputClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DatepickerProps = typeof __propDef.props;
export type DatepickerEvents = typeof __propDef.events;
export type DatepickerSlots = typeof __propDef.slots;
/**
 * **EXPERIMENTAL**
 * ## Features
 * [Go to Datepicker](https://flowbite-svelte.com/docs/experimental/datepicker)
 * ## Props
 * @prop range: boolean = false;
 * @prop datepickerButtons: boolean = false;
 * @prop datepickerFormat: string = 'mm/dd/yyyy';
 * @prop datepickerOrientation: string = 'bottom';
 * @prop datepickerTitle: string = 'Flowbite datepicker';
 * @prop attribute: string = '';
 * @prop inputClass: string = 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
 */
export default class Datepicker extends SvelteComponentTyped<DatepickerProps, DatepickerEvents, DatepickerSlots> {
}
export {};
//# sourceMappingURL=Datepicker.svelte.d.ts.map