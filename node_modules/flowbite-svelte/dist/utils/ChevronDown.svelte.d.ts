import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: string | undefined;
        color?: string | undefined;
        variation?: "solid" | "outline" | undefined;
        ariaLabel?: string | undefined;
        role?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChevronDownProps = typeof __propDef.props;
export type ChevronDownEvents = typeof __propDef.events;
export type ChevronDownSlots = typeof __propDef.slots;
/**
 * ## Props
 * @prop size = '20';
 * @prop color = 'currentColor';
 * @prop variation: 'solid' | 'outline' = 'outline';
 * @prop ariaLabel = 'chevron down';
 * ## Event
 * - on:click
 */
export default class ChevronDown extends SvelteComponentTyped<ChevronDownProps, ChevronDownEvents, ChevronDownSlots> {
}
export {};
//# sourceMappingURL=ChevronDown.svelte.d.ts.map