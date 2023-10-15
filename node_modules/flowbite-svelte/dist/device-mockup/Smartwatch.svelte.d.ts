import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        smartRightTop: string;
        smartRightBot: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SmartwatchProps = typeof __propDef.props;
export type SmartwatchEvents = typeof __propDef.events;
export type SmartwatchSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Device Mockups](https://flowbite-svelte.com/docs/components/device-mockups)
 * ## Props
 * @prop smartRightTop: string;
 * @prop smartRightBot: string;
 * ## Example
 * ```
 * <script>
 *   import { DeviceMockup } from 'flowbite-svelte';
 * </script>
 *
 * <DeviceMockup device="smartwatch">
 *   <img
 *     src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png"
 *     class="dark:hidden h-[193px] w-[188px"
 *     alt="smartwatch example 1" />
 *   <img
 *     src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png"
 *     class="hidden dark:block h-[193px] w-[188px]"
 *     alt="smartwatch example 2" />
 * </DeviceMockup>
 * ```
 */
export default class Smartwatch extends SvelteComponentTyped<SmartwatchProps, SmartwatchEvents, SmartwatchSlots> {
}
export {};
//# sourceMappingURL=Smartwatch.svelte.d.ts.map