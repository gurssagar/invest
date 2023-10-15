import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        aClass?: string | undefined;
        spanClass?: string | undefined;
        imgClass?: string | undefined;
        href?: string | undefined;
        src?: string | undefined;
        alt?: string | undefined;
        name?: string | undefined;
        target?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FooterBrandProps = typeof __propDef.props;
export type FooterBrandEvents = typeof __propDef.events;
export type FooterBrandSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Footer](https://flowbite-svelte.com/docs/components/footer)
 * ## Props
 * @prop aClass: string = 'flex items-center';
 * @prop spanClass: string = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
 * @prop imgClass: string = 'mr-3 h-8';
 * @prop href: string = '';
 * @prop src: string = '';
 * @prop alt: string = '';
 * @prop name: string = '';
 * @prop target: string | undefined = undefined;
 */
export default class FooterBrand extends SvelteComponentTyped<FooterBrandProps, FooterBrandEvents, FooterBrandSlots> {
}
export {};
//# sourceMappingURL=FooterBrand.svelte.d.ts.map