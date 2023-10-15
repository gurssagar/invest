import { SvelteComponentTyped } from "svelte";
import type { InputType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        id?: string | undefined;
        style?: "filled" | "outlined" | "standard" | undefined;
        type?: InputType | undefined;
        size?: "default" | "small" | undefined;
        color?: "red" | "green" | "base" | undefined;
        value?: any;
        label?: string | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: MouseEvent;
        focus: FocusEvent;
        input: Event;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        mouseover: MouseEvent;
        paste: ClipboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FloatingLabelInputProps = typeof __propDef.props;
export type FloatingLabelInputEvents = typeof __propDef.events;
export type FloatingLabelInputSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Floating Label](https://flowbite-svelte.com/docs/forms/floating-label)
 * ## Props
 * @prop id: string = generateId();
 * @prop style: 'filled' | 'outlined' | 'standard' = 'standard';
 * @prop type: InputType = 'text';
 * @prop size: 'small' | 'default' = 'default';
 * @prop color: 'base' | 'green' | 'red' = 'base';
 * @prop value: string = '';
 * @prop label: string = '';
 * ## Event
 * - on:blur
 * - on:change
 * - on:click
 * - on:focus
 * - on:input
 * - on:keydown
 * - on:keypress
 * - on:keyup
 * - on:mouseenter
 * - on:mouseleave
 * - on:mouseover
 * - on:paste
 * ## Example
 * ```
 * <script>
 *   import { FloatingLabelInput, Helper } from 'flowbite-svelte';
 * </script>
 *
 * <div id="exampleWrapper" class="grid gap-6 items-end w-full md:grid-cols-3">
 *   <FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Floating filled"/>
 * </div>
 * ```
 */
export default class FloatingLabelInput extends SvelteComponentTyped<FloatingLabelInputProps, FloatingLabelInputEvents, FloatingLabelInputSlots> {
}
export {};
//# sourceMappingURL=FloatingLabelInput.svelte.d.ts.map