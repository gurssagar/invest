import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        liClass?: string | undefined;
        aClass?: string | undefined;
        href?: string | undefined;
        target?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FooterLinkProps = typeof __propDef.props;
export type FooterLinkEvents = typeof __propDef.events;
export type FooterLinkSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Footer](https://flowbite-svelte.com/docs/components/footer)
 * ## Props
 * @prop liClass: string = 'mr-4 last:mr-0 md:mr-6';
 * @prop aClass: string = 'hover:underline';
 * @prop href: string = '';
 * @prop target: string | undefined = undefined;
 */
export default class FooterLink extends SvelteComponentTyped<FooterLinkProps, FooterLinkEvents, FooterLinkSlots> {
}
export {};
//# sourceMappingURL=FooterLink.svelte.d.ts.map