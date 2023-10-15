import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        src?: string | undefined;
        href?: string | undefined;
        rounded?: boolean | undefined;
        border?: boolean | undefined;
        stacked?: boolean | undefined;
        dot?: object | undefined;
        alt?: string | undefined;
        size?: "xs" | "sm" | "lg" | "xl" | "md" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type AvatarProps = typeof __propDef.props;
export type AvatarEvents = typeof __propDef.events;
export type AvatarSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Avatar](https://flowbite-svelte.com/docs/components/avatar)
 * - Bordered
 * - Placeholder
 * - Placeholder initials
 * - Avatar tooltip
 * - Dot indicator
 * - Stacked
 * - Avatar text
 * - User dropdown
 * - Sizes
 * ## Props
 * @prop src: string = '';
 * @prop href: string | undefined = undefined;
 * @prop rounded: boolean = false;
 * @prop border: boolean = false;
 * @prop stacked: boolean = false;
 * @prop dot: object | undefined = undefined;
 * @prop alt: string = '';
 * @prop size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
 * ## Example
 * ```
 * <script>
 *   import { Avatar } from "flowbite-svelte"
 * </script>
 *
 * <div class="flex space-x-4">
 *   <Avatar src="/images/profile-picture-2.webp"/>
 *   <Avatar src="/images/profile-picture-2.webp" rounded/>
 * </div>
 * ```
 */
export default class Avatar extends SvelteComponentTyped<AvatarProps, AvatarEvents, AvatarSlots> {
}
export {};
//# sourceMappingURL=Avatar.svelte.d.ts.map