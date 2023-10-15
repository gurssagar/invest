import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        imgHeight?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ImagePlaceholderProps = typeof __propDef.props;
export type ImagePlaceholderEvents = typeof __propDef.events;
export type ImagePlaceholderSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Skeleton Image Placeholder](https://flowbite-svelte.com/docs/components/skeleton#Image_placeholder)
 * ## Props
 * @prop divClass: string = 'space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center';
 * @prop imgHeight: string = '48';
 * ## Example
 * ```
 * <script>
 *   import { ImagePlaceholder } from 'flowbite-svelte'
 * </script>
 *
 * <ImagePlaceholder />
 * <ImagePlaceholder imgHeight={60} class='mt-8'/>
 * ```
 */
export default class ImagePlaceholder extends SvelteComponentTyped<ImagePlaceholderProps, ImagePlaceholderEvents, ImagePlaceholderSlots> {
}
export {};
//# sourceMappingURL=ImagePlaceholder.svelte.d.ts.map