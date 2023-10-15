import { SvelteComponentTyped } from "svelte";
import type { FormSizeType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: FormSizeType | undefined;
        placeholder?: string | undefined;
        value?: any;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        input: Event;
        click: MouseEvent;
        focus: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        mouseover: MouseEvent;
        paste: ClipboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SearchProps = typeof __propDef.props;
export type SearchEvents = typeof __propDef.events;
export type SearchSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Search Input](https://flowbite-svelte.com/docs/forms/search-input)
 * - Setup
 * - Search bar example
 * - Simple search input
 * - Voice Search
 * - Events
 * - Example
 * ## Props
 * @prop size: FormSizeType = 'lg';
 * @prop placeholder: string = 'Search';
 * @prop value: string | number = '';
 * ## Event
 * - on:blur
 * - on:change
 * - on:input
 * - on:click
 * - on:focus
 * - on:keydown
 * - on:keypress
 * - on:keyup
 * - on:mouseenter
 * - on:mouseleave
 * - on:mouseover
 * - on:paste
 * ## Example
 * ```
 * <script>
 *   import { Search, Button } from 'flowbite-svelte'
 * </script>
 *
 * <Search >
 *   <Button>Search</Button>
 * </Search>
 * ```
 */
export default class Search extends SvelteComponentTyped<SearchProps, SearchEvents, SearchSlots> {
}
export {};
//# sourceMappingURL=Search.svelte.d.ts.map