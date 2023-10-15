import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: number;
        size?: "sm" | "lg" | "md" | undefined;
    };
    events: {
        change: Event;
        click: MouseEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RangeProps = typeof __propDef.props;
export type RangeEvents = typeof __propDef.events;
export type RangeSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Range](https://flowbite-svelte.com/docs/forms/range)
 * - Setup
 * - Range slider example
 * - Disabled state
 * - Binding value
 * - Min and max
 * - Steps
 * - Sizes
 * - Unknown attributes
 * ## Props
 * @prop value: number;
 * @prop size: 'sm' | 'md' | 'lg' = 'md';
 * ## Event
 * - on:change
 * - on:click
 * - on:keydown
 * - on:keypress
 * - on:keyup
 */
export default class Range extends SvelteComponentTyped<RangeProps, RangeEvents, RangeSlots> {
}
export {};
//# sourceMappingURL=Range.svelte.d.ts.map