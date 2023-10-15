import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: string | undefined;
        color?: string | undefined;
        variation?: "solid" | "outline" | undefined;
        ariaLabel?: string | undefined;
        role?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type UserCircleProps = typeof __propDef.props;
export type UserCircleEvents = typeof __propDef.events;
export type UserCircleSlots = typeof __propDef.slots;
/**
 * ## Props
 * @prop size = '24';
 * @prop color = 'currentColor';
 * @prop variation: 'solid' | 'outline' = 'outline';
 * @prop ariaLabel = 'user circle';
 * ## Event
 * - on:click
 */
export default class UserCircle extends SvelteComponentTyped<UserCircleProps, UserCircleEvents, UserCircleSlots> {
}
export {};
//# sourceMappingURL=UserCircle.svelte.d.ts.map