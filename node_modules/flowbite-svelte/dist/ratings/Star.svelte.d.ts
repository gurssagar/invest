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
export type StarProps = typeof __propDef.props;
export type StarEvents = typeof __propDef.events;
export type StarSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
 * ## Props
 * @prop fillPercent: number = 100;
 * @prop fillColor: string = '#F5CA14';
 * @prop strokeColor: string = '#F5CA14';
 * @prop size: number = 24;
 * @prop ariaLabel: string = 'star';
 * @prop id: string = generateId();
 * ## Event
 * - on:click
 * ## Example
 * ```
 * <script>
 *   import { Rating } from 'flowbite-svelte';
 * </script>
 *
 * <Rating id="example-1" total={5} size={50} rating={1.4} />
 * <Rating id="example-1b" total={5} size={50} rating={4.66} />
 * ```
 */
export default class Star extends SvelteComponentTyped<StarProps, StarEvents, StarSlots> {
}
export {};
//# sourceMappingURL=Star.svelte.d.ts.map