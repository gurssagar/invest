import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        caption?: string | undefined;
        src?: string | undefined;
        srcset?: string | undefined;
        size?: string | undefined;
        alignment?: string | undefined;
        imgClass?: string | undefined;
        figClass?: string | undefined;
        alt?: string | undefined;
        effect?: string | undefined;
        captionClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ImgProps = typeof __propDef.props;
export type ImgEvents = typeof __propDef.events;
export type ImgSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Images](https://flowbite-svelte.com/docs/typography/image)
 * - Setup
 * - Default image
 * - Image caption
 * - Rounded corners
 * - Image shadow
 * - Retina-ready
 * - Image card
 * - Image effects
 * - Alignment
 * - Sizes
 * ## Props
 * @prop caption: string | undefined = undefined;
 * @prop src: string | undefined = undefined;
 * @prop srcset: string | undefined = undefined;
 * @prop size: string = 'max-w-full';
 * @prop alignment: string = '';
 * @prop imgClass: string = 'h-auto';
 * @prop figClass: string = 'max-w-lg';
 * @prop alt: string = '';
 * @prop effect: string = '';
 * @prop captionClass: string = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400';
 * ## Example
 * ```
 * <script>
 *   import { Img } from 'flowbite-svelte';
 * </script>
 *
 * <Img src="/images/examples/image-1@2x.jpg" alt="sample 1"/>
 * ```
 */
export default class Img extends SvelteComponentTyped<ImgProps, ImgEvents, ImgSlots> {
}
export {};
//# sourceMappingURL=Img.svelte.d.ts.map