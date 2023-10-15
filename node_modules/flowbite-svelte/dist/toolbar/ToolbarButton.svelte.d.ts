import { SvelteComponentTyped } from "svelte";
import type { ToolbarButtonType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: ToolbarButtonType | undefined;
        name?: string | undefined;
        ariaLabel?: string | undefined;
        size?: "xs" | "sm" | "lg" | "md" | undefined;
        href?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            svgSize: string;
        };
    };
};
export type ToolbarButtonProps = typeof __propDef.props;
export type ToolbarButtonEvents = typeof __propDef.events;
export type ToolbarButtonSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Toolbar](https://flowbite-svelte.com/docs/utilities/toolbar)
 * - Setup
 * - Default toolbar
 * - Colored toolbars
 * - Toolbar with groups
 * - WYSIWYG Editor
 * - Comment box
 * ## Props
 * @prop color: ToolbarButtonType = 'default';
 * @prop name: string | undefined = undefined;
 * @prop ariaLabel: string | undefined = undefined;
 * @prop size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
 * @prop href: string | undefined = undefined;
 * ## Example
 * ```
 * <script>
 *   import { Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
 * </script>
 *
 * <Toolbar>
 *   <ToolbarButton><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg></ToolbarButton>
 *   <ToolbarButton><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" /></svg></ToolbarButton>
 *   <ToolbarButton><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></ToolbarButton>
 * </Toolbar>
 * ```
 */
export default class ToolbarButton extends SvelteComponentTyped<ToolbarButtonProps, ToolbarButtonEvents, ToolbarButtonSlots> {
}
export {};
//# sourceMappingURL=ToolbarButton.svelte.d.ts.map