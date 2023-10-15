import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        iosTop: string;
        iosLeftTop: string;
        iosLeftBot: string;
        iosRight: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IosProps = typeof __propDef.props;
export type IosEvents = typeof __propDef.events;
export type IosSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Device Mockups](https://flowbite-svelte.com/docs/components/device-mockups)
 * ## Props
 * @prop iosTop: string;
 * @prop iosLeftTop: string;
 * @prop iosLeftBot: string;
 * @prop iosRight: string;
 * ## Example
 * ```
 * <script>
 *   import { DeviceMockup } from 'flowbite-svelte';
 * </script>
 *
 * <DeviceMockup device="ios">
 *   <img
 *     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
 *     class="dark:hidden w-[272px] h-[572px]"
 *     alt="ios example 1" />
 *   <img
 *     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
 *     class="hidden dark:block w-[272px] h-[572px]"
 *     alt="ios example 2" />
 * </DeviceMockup>
 * ```
 */
export default class Ios extends SvelteComponentTyped<IosProps, IosEvents, IosSlots> {
}
export {};
//# sourceMappingURL=Ios.svelte.d.ts.map