import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        spanClass?: string | undefined;
        aClass?: string | undefined;
        year?: number | undefined;
        href?: string | undefined;
        by?: string | undefined;
        target?: string | undefined;
        copyrightMessage?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FooterCopyrightProps = typeof __propDef.props;
export type FooterCopyrightEvents = typeof __propDef.events;
export type FooterCopyrightSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Footer](https://flowbite-svelte.com/docs/components/footer)
 * ## Props
 * @prop spanClass: string = 'block text-sm text-gray-500 sm:text-center dark:text-gray-400';
 * @prop aClass: string = 'hover:underline';
 * @prop year: number = new Date().getFullYear();
 * @prop href: string = '';
 * @prop by: string = '';
 * @prop target: string | undefined = undefined;
 * @prop copyrightMessage: string = 'All Rights Reserved.';
 */
export default class FooterCopyright extends SvelteComponentTyped<FooterCopyrightProps, FooterCopyrightEvents, FooterCopyrightSlots> {
}
export {};
//# sourceMappingURL=FooterCopyright.svelte.d.ts.map