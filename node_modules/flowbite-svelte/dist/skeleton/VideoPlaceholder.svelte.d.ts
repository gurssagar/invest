import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        size?: string | number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type VideoPlaceholderProps = typeof __propDef.props;
export type VideoPlaceholderEvents = typeof __propDef.events;
export type VideoPlaceholderSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Skeleton Video Placeholder](https://flowbite-svelte.com/docs/components/skeleton#Video_placeholder)
 * ## Props
 * @prop divClass: string =
 *   'flex justify-center items-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700';
 * @prop size: keyof Sizes = 'sm';
 * ## Example
 * ```
 * <script>
 *   import { VideoPlaceholder } from 'flowbite-svelte'
 * </script>
 *
 * <VideoPlaceholder />
 * <VideoPlaceholder size='md' class='mt-8'/>
 * <VideoPlaceholder size='lg' class='mt-8'/>
 * <VideoPlaceholder size='xl' class='mt-8'/>
 * <VideoPlaceholder size='xxl' class='mt-8'/>
 * ```
 */
export default class VideoPlaceholder extends SvelteComponentTyped<VideoPlaceholderProps, VideoPlaceholderEvents, VideoPlaceholderSlots> {
}
export {};
//# sourceMappingURL=VideoPlaceholder.svelte.d.ts.map