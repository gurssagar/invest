import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: "red" | "green" | "purple" | "pink" | "blue" | "cyan" | "lime" | "teal" | "purpleToBlue" | "cyanToBlue" | "greenToBlue" | "purpleToPink" | "pinkToOrange" | "tealToLime" | "redToYellow" | undefined;
        shadow?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
        change: Event;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        touchstart: TouchEvent;
        touchend: TouchEvent;
        touchcancel: TouchEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type GradientButtonProps = typeof __propDef.props;
export type GradientButtonEvents = typeof __propDef.events;
export type GradientButtonSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Button](https://flowbite-svelte.com/docs/components/button)
 * @prop color: keyof typeof gradientClasses = 'blue';
 * @prop shadow: boolean = false;
 * ## Event
 * - on:click
 * - on:change
 * - on:keydown
 * - on:keyup
 * - on:touchstart
 * - on:touchend
 * - on:touchcancel
 * - on:mouseenter
 * - on:mouseleave
 * ## Example
 * ```
 * <script>
 *   import { GradientButton } from 'flowbite-svelte';
 * </script>
 *
 * <GradientButton color="blue">Blue</GradientButton>
 * <GradientButton color="green">Green</GradientButton>
 * <GradientButton color="cyan">Cyan</GradientButton>
 * ```
 */
export default class GradientButton extends SvelteComponentTyped<GradientButtonProps, GradientButtonEvents, GradientButtonSlots> {
}
export {};
//# sourceMappingURL=GradientButton.svelte.d.ts.map