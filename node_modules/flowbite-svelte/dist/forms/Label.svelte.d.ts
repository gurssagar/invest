import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: "gray" | "red" | "green" | "disabled" | undefined;
        defaultClass?: string | undefined;
        show?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LabelProps = typeof __propDef.props;
export type LabelEvents = typeof __propDef.events;
export type LabelSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Label](https://flowbite-svelte.com/docs/utilities/label)
 * ## Props
 * @prop color: 'gray' | 'green' | 'red' | 'disabled' = 'gray';
 * @prop defaultClass: string = 'text-sm font-medium block';
 * @prop show: boolean = true;
 * ## Example
 * ```
 * <script>
 *   import { Label, Checkbox } from 'flowbite-svelte'
 * </script>
 *
 * <Label color="red" class="mt-4 flex items-center font-bold italic">
 *   <Checkbox class="mr-2" /> Your Label
 * </Label>
 * ```
 */
export default class Label extends SvelteComponentTyped<LabelProps, LabelEvents, LabelSlots> {
}
export {};
//# sourceMappingURL=Label.svelte.d.ts.map