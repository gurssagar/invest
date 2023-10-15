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
export type ThumbupProps = typeof __propDef.props;
export type ThumbupEvents = typeof __propDef.events;
export type ThumbupSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
 * ## Props
 * @prop fillPercent: number = 100;
 * @prop fillColor: string = '#00b500';
 * @prop strokeColor: string = '#00b500';
 * @prop size: number = 24;
 * @prop ariaLabel: string = 'thumbup';
 * @prop id: string = 'thumbup';
 * ## Event
 * - on:click
 * ## Example
 * ```
 * <script>
 *   import { Rating } from 'flowbite-svelte';
 * </script>
 *
 * <Rating total={5} rating={4.7} id="example-5c" icon={Thumbup}/>
 * <Rating total={10} rating={8.2} id="example-5d" icon={Thumbup}/>
 * ```
 */
export default class Thumbup extends SvelteComponentTyped<ThumbupProps, ThumbupEvents, ThumbupSlots> {
}
export {};
//# sourceMappingURL=Thumbup.svelte.d.ts.map