import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: string | undefined;
        files?: FileList | undefined;
        defaultClass?: string | undefined;
    };
    events: {
        focus: FocusEvent;
        blur: FocusEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        mouseover: MouseEvent;
        dragenter: DragEvent;
        dragleave: DragEvent;
        dragover: DragEvent;
        drop: DragEvent;
        change: Event;
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DropzoneProps = typeof __propDef.props;
export type DropzoneEvents = typeof __propDef.events;
export type DropzoneSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to File Input](https://flowbite-svelte.com/docs/forms/file-input)
 * ## Props
 * @prop value: string = '';
 * @prop files: FileList | undefined = undefined;
 * @prop defaultClass: string = 'flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600';
 * ## Event
 * - on:focus
 * - on:blur
 * - on:mouseenter
 * - on:mouseleave
 * - on:mouseover
 * - on:dragenter
 * - on:dragleave
 * - on:dragover
 * - on:drop
 * ## Example
 * ```
 * <script>
 *   import { Dropzone } from 'flowbite-svelte'
 * </script>
 *
 * <Dropzone id='dropzone'>
 *   <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
 *   <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
 *   <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
 * </Dropzone>
 * ```
 */
export default class Dropzone extends SvelteComponentTyped<DropzoneProps, DropzoneEvents, DropzoneSlots> {
}
export {};
//# sourceMappingURL=Dropzone.svelte.d.ts.map