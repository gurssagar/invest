import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        tabletLeftTop: string;
        tabletLeftMid: string;
        tabletLeftBot: string;
        tabletRight: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TabletProps = typeof __propDef.props;
export type TabletEvents = typeof __propDef.events;
export type TabletSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Device Mockups](https://flowbite-svelte.com/docs/components/device-mockups)
 * ## Props
 * @prop tabletLeftTop: string;
 * @prop tabletLeftMid: string;
 * @prop tabletLeftBot: string;
 * @prop tabletRight: string;
 * ## Example
 * ```
 * <script>
 *   import { DeviceMockup } from 'flowbite-svelte';
 * </script>
 *
 * <DeviceMockup device="tablet">
 *   <img
 *     src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
 *     class="dark:hidden h-[426px] md:h-[654px]"
 *     alt="tablet example 1" />
 *   <img
 *     src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
 *     class="hidden dark:block h-[426px] md:h-[654px]"
 *     alt="tablet example 2" />
 * </DeviceMockup>
 * ```
 */
export default class Tablet extends SvelteComponentTyped<TabletProps, TabletEvents, TabletSlots> {
}
export {};
//# sourceMappingURL=Tablet.svelte.d.ts.map