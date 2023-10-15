import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: number | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: MouseEvent;
        contextmenu: MouseEvent;
        focus: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseover: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        paste: ClipboardEvent;
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NumberInputProps = typeof __propDef.props;
export type NumberInputEvents = typeof __propDef.events;
export type NumberInputSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Number Input](https://flowbite-svelte.com/docs/forms/input-field#Number_input)
 * ## Props
 * @prop value: number = 0;
 * ## Event
 * - on:blur
 * - on:change
 * - on:click
 * - on:contextmenu
 * - on:focus
 * - on:keydown
 * - on:keypress
 * - on:keyup
 * - on:mouseover
 * - on:mouseenter
 * - on:mouseleave
 * - on:paste
 * - on:input
 */
export default class NumberInput extends SvelteComponentTyped<NumberInputProps, NumberInputEvents, NumberInputSlots> {
}
export {};
//# sourceMappingURL=NumberInput.svelte.d.ts.map