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
export type ChevronUpProps = typeof __propDef.props;
export type ChevronUpEvents = typeof __propDef.events;
export type ChevronUpSlots = typeof __propDef.slots;
/**
 * ## Props
 * @prop size = '20';
 * @prop color = 'currentColor';
 * @prop variation: 'solid' | 'outline' = 'outline';
 * @prop ariaLabel = 'chevron up';
 * ## Event
 * - on:click
 */
export default class ChevronUp extends SvelteComponentTyped<ChevronUpProps, ChevronUpEvents, ChevronUpSlots> {
}
export {};
//# sourceMappingURL=ChevronUp.svelte.d.ts.map