import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        androidTop: string;
        androidLeftTop: string;
        androidLeftMid: string;
        androidLeftBot: string;
        androidRight: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AndroidProps = typeof __propDef.props;
export type AndroidEvents = typeof __propDef.events;
export type AndroidSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Device Mockups](https://flowbite-svelte.com/docs/components/device-mockups)
 * ## Props
 * @prop androidTop: string;
 * @prop androidLeftTop: string;
 * @prop androidLeftMid: string;
 * @prop androidLeftBot: string;
 * @prop androidRight: string;
 * ## Example
 * ```
 * <script>
 *   import { DeviceMockup } from 'flowbite-svelte';
 * </script>
 *
 * <DeviceMockup device="android">
 *   <img
 *     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
 *     class="dark:hidden w-[272px] h-[572px]"
 *     alt="android example 1" />
 *   <img
 *     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
 *     class="hidden dark:block w-[272px] h-[572px]"
 *     alt="android example 2" />
 * </DeviceMockup>
 * ```
 */
export default class Android extends SvelteComponentTyped<AndroidProps, AndroidEvents, AndroidSlots> {
}
export {};
//# sourceMappingURL=Android.svelte.d.ts.map