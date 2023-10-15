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
export type InformationCircleProps = typeof __propDef.props;
export type InformationCircleEvents = typeof __propDef.events;
export type InformationCircleSlots = typeof __propDef.slots;
/**
 * ## Props
 * @prop size = '24';
 * @prop color = 'currentColor';
 * @prop variation: 'solid' | 'outline' = 'outline';
 * @prop ariaLabel = 'information circle';
 * ## Event
 * - on:click
 */
export default class InformationCircle extends SvelteComponentTyped<InformationCircleProps, InformationCircleEvents, InformationCircleSlots> {
}
export {};
//# sourceMappingURL=InformationCircle.svelte.d.ts.map