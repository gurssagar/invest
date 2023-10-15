import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        name?: string | undefined;
        selected?: boolean | undefined;
        indicatorClass?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndicatorProps = typeof __propDef.props;
export type IndicatorEvents = typeof __propDef.events;
export type IndicatorSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Carousel](https://flowbite-svelte.com/docs/components/carousel)
 * ## Props
 * @prop name: string = '';
 * @prop selected: boolean = false;
 * @prop indicatorClass: string = '';
 */
export default class Indicator extends SvelteComponentTyped<IndicatorProps, IndicatorEvents, IndicatorSlots> {
}
export {};
//# sourceMappingURL=Indicator.svelte.d.ts.map