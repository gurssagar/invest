import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        ariaLabel?: string | undefined;
        aClass?: string | undefined;
        target?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FooterIconProps = typeof __propDef.props;
export type FooterIconEvents = typeof __propDef.events;
export type FooterIconSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Footer](https://flowbite-svelte.com/docs/components/footer)
 * ## Props
 * @prop href: string = '';
 * @prop ariaLabel: string = '';
 * @prop aClass: string = 'text-gray-500 hover:text-gray-900 dark:hover:text-white';
 * @prop target: string | undefined = undefined;
 */
export default class FooterIcon extends SvelteComponentTyped<FooterIconProps, FooterIconEvents, FooterIconSlots> {
}
export {};
//# sourceMappingURL=FooterIcon.svelte.d.ts.map