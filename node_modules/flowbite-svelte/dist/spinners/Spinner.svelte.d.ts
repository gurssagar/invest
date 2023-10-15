import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: 'primary' | 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'pink' | 'purple' | 'white' | 'custom' | undefined;
        bg?: string | undefined;
        customColor?: string | undefined;
        size?: string | undefined;
        currentFill?: string | undefined;
        currentColor?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SpinnerProps = typeof __propDef.props;
export type SpinnerEvents = typeof __propDef.events;
export type SpinnerSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Spinner](https://flowbite-svelte.com/docs/components/spinner)
 * - Setup
 * - Default spinner
 * - Colors
 * - Sizes
 * - Alignment
 * - Buttons
 * ## Props
 * @prop color: | 'primary' | 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'pink'| 'purple' | 'white' | 'custom' | undefined = 'primary';
 * @prop bg: string = 'text-gray-300';
 * @prop customColor: string = '';
 * @prop size: string = '8';
 * @prop currentFill: string = 'currentFill';
 * @prop currentColor: string = 'currentColor';
 * ## Example
 * ```
 * <script>
 *   import { Spinner } from 'flowbite-svelte';
 * </script>
 * <Spinner />
 * ```
 */
export default class Spinner extends SvelteComponentTyped<SpinnerProps, SpinnerEvents, SpinnerSlots> {
}
export {};
//# sourceMappingURL=Spinner.svelte.d.ts.map