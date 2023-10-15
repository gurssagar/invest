import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        outerClass?: string | undefined;
        innerClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BottomNavHeaderProps = typeof __propDef.props;
export type BottomNavHeaderEvents = typeof __propDef.events;
export type BottomNavHeaderSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Bottom Navigation](https://flowbite-svelte.com/docs/components/bottom-navigation)
 * ## Props
 * @prop outerClass: string = 'w-full';
 * @prop innerClass: string = 'grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600';
 * ## Example
 * ```
 * <BottomNav position="absolute" navType="group" innerDiv="grid-cols-5">
 *   <BottomNavHeader slot="header">
 *       <BottomNavHeaderItem itemName="New" />
 *       <BottomNavHeaderItem itemName="Popular" active={true}/>
 *       <BottomNavHeaderItem itemName="Following" />
 *   </BottomNavHeader>
 *   ...
 * </BottomNav>
 * ```
 */
export default class BottomNavHeader extends SvelteComponentTyped<BottomNavHeaderProps, BottomNavHeaderEvents, BottomNavHeaderSlots> {
}
export {};
//# sourceMappingURL=BottomNavHeader.svelte.d.ts.map