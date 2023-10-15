import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        helperClass?: string | undefined;
        color?: "gray" | "red" | "green" | "disabled" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HelperProps = typeof __propDef.props;
export type HelperEvents = typeof __propDef.events;
export type HelperSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Forms](https://flowbite-svelte.com/docs/components/forms)
 * ## Props
 * @prop helperClass: string = 'text-xs font-normal text-gray-500 dark:text-gray-300';
 * @prop color: 'gray' | 'green' | 'red' | 'disabled' = 'gray';
 * ## Example
 * ```
 *   <Helper class="mt-2" color="green">
 *     <span class="font-medium">Well done!</span> Some success message.
 *   </Helper>
 * ```
 */
export default class Helper extends SvelteComponentTyped<HelperProps, HelperEvents, HelperSlots> {
}
export {};
//# sourceMappingURL=Helper.svelte.d.ts.map