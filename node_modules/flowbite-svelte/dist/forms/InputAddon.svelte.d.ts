import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: 'sm' | 'md' | 'lg' | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type InputAddonProps = typeof __propDef.props;
export type InputAddonEvents = typeof __propDef.events;
export type InputAddonSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Input Fields](https://flowbite-svelte.com/docs/forms/input-field)
 * ## Props
 * @prop size: 'sm' | 'md' | 'lg' | undefined = undefined;
 * ## Example
 * ```
 * <div>
 *   <Label class="mb-2" for="input-addon-sm">Small additional text</Label>
 *   <ButtonGroup class="w-full" size="sm">
 *     <InputAddon>@</InputAddon>
 *     <Input id="input-addon-sm" type="email" placeholder="elonmusk" />
 *   </ButtonGroup>
 * </div>
 * ```
 */
export default class InputAddon extends SvelteComponentTyped<InputAddonProps, InputAddonEvents, InputAddonSlots> {
}
export {};
//# sourceMappingURL=InputAddon.svelte.d.ts.map