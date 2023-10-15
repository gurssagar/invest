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
export type ChevronRightProps = typeof __propDef.props;
export type ChevronRightEvents = typeof __propDef.events;
export type ChevronRightSlots = typeof __propDef.slots;
/**
 * ## Props
 * @prop color = 'currentColor';
 * @prop variation: 'solid' | 'outline' = 'outline';
 * @prop ariaLabel = 'chevron right';
 * ## Event
 * - on:click
 */
export default class ChevronRight extends SvelteComponentTyped<ChevronRightProps, ChevronRightEvents, ChevronRightSlots> {
}
export {};
//# sourceMappingURL=ChevronRight.svelte.d.ts.map