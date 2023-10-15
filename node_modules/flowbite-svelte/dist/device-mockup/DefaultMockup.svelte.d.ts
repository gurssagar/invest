import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        defaultTop: string;
        defaultLeftTop: string;
        defaultLeftBot: string;
        defaultRight: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DefaultMockupProps = typeof __propDef.props;
export type DefaultMockupEvents = typeof __propDef.events;
export type DefaultMockupSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Device Mockups](https://flowbite-svelte.com/docs/components/device-mockups)
 * ## Props
 * @prop defaultTop: string;
 * @prop defaultLeftTop: string;
 * @prop defaultLeftBot: string;
 * @prop defaultRight: string;
 * ## Example
 * ```
 * <script>
 *   import { DeviceMockup } from 'flowbite-svelte';
 * </script>
 *
 * <DeviceMockup>
 *   <img
 *     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
 *     class="dark:hidden w-[272px] h-[572px]"
 *     alt="default example 1" />
 *   <img
 *     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
 *     class="hidden dark:block w-[272px] h-[572px]"
 *     alt="default example 2" />
 * </DeviceMockup>
 * ```
 */
export default class DefaultMockup extends SvelteComponentTyped<DefaultMockupProps, DefaultMockupEvents, DefaultMockupSlots> {
}
export {};
//# sourceMappingURL=DefaultMockup.svelte.d.ts.map