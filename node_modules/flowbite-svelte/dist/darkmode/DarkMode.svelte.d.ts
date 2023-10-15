import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        btnClass?: string | undefined;
        size?: "sm" | "lg" | "md" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        lightIcon: {};
        darkIcon: {};
    };
};
export type DarkModeProps = typeof __propDef.props;
export type DarkModeEvents = typeof __propDef.events;
export type DarkModeSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Darkmode](https://flowbite-svelte.com/docs/components/darkmode)
 * ## Props
 * @prop initialTheme: string = 'light';
 * @prop btnClass: string =
 *   'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5';
 * @prop size: 'sm' | 'md' | 'lg' = 'md';
 */
export default class DarkMode extends SvelteComponentTyped<DarkModeProps, DarkModeEvents, DarkModeSlots> {
}
export {};
//# sourceMappingURL=DarkMode.svelte.d.ts.map