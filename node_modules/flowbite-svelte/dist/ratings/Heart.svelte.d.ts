import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        fillPercent?: number | undefined;
        fillColor?: string | undefined;
        strokeColor?: string | undefined;
        size?: number | undefined;
        ariaLabel?: string | undefined;
        id?: string | undefined;
        role?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HeartProps = typeof __propDef.props;
export type HeartEvents = typeof __propDef.events;
export type HeartSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
 * ## Props
 * @prop fillPercent: number = 100;
 * @prop fillColor: string = '#ff0000';
 * @prop strokeColor: string = '#ff0000';
 * @prop size: number = 24;
 * @prop ariaLabel: string = 'heart';
 * @prop id: string = 'heart';
 * ## Event
 * - on:click
 */
export default class Heart extends SvelteComponentTyped<HeartProps, HeartEvents, HeartSlots> {
}
export {};
//# sourceMappingURL=Heart.svelte.d.ts.map