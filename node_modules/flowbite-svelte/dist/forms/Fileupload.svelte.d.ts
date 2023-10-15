import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: string | undefined;
        files?: FileList | undefined;
        inputClass?: string | undefined;
    };
    events: {
        change: Event;
        keyup: KeyboardEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        focus: FocusEvent;
        blur: FocusEvent;
        click: MouseEvent;
        mouseover: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        paste: ClipboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FileuploadProps = typeof __propDef.props;
export type FileuploadEvents = typeof __propDef.events;
export type FileuploadSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to File Input](https://flowbite-svelte.com/docs/forms/file-input)
 * ## Props
 * @prop value: string = '';
 * @prop files: FileList | undefined = undefined;
 * @prop inputClass: string = 'border !p-0 dark:text-gray-400';
 * ## Event
 * - on:change
 * - on:keyup
 * - on:keydown
 * - on:keypress
 * - on:focus
 * - on:blur
 * - on:click
 * - on:mouseover
 * - on:mouseenter
 * - on:mouseleave
 * - on:paste
 * ## Example
 * ```
 * <script>
 *   import { Fileupload, Label } from 'flowbite-svelte'
 *   let value;
 * </script>
 *
 * <Label class="space-y-2 mb-2">
 *   <span>Upload file</span>
 *   <Fileupload bind:value/>
 * </Label>
 * <Label>File: {value }</Label>
 * ```
 */
export default class Fileupload extends SvelteComponentTyped<FileuploadProps, FileuploadEvents, FileuploadSlots> {
}
export {};
//# sourceMappingURL=Fileupload.svelte.d.ts.map