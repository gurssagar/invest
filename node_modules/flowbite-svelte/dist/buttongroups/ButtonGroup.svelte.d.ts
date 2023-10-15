import { SvelteComponentTyped } from "svelte";
import type { SizeType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: SizeType | undefined;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ButtonGroupProps = typeof __propDef.props;
export type ButtonGroupEvents = typeof __propDef.events;
export type ButtonGroupSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Button Group](https://flowbite-svelte.com/docs/components/button-group)
 * ## Props
 * @prop size: SizeType = 'md';
 * @prop divClass: string = 'inline-flex rounded-lg shadow-sm';
 */
export default class ButtonGroup extends SvelteComponentTyped<ButtonGroupProps, ButtonGroupEvents, ButtonGroupSlots> {
}
export {};
//# sourceMappingURL=ButtonGroup.svelte.d.ts.map