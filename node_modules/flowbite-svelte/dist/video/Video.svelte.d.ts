import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        src: string;
        type?: string | undefined;
        trackSrc?: string | undefined;
        srclang?: string | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type VideoProps = typeof __propDef.props;
export type VideoEvents = typeof __propDef.events;
export type VideoSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Video](https://flowbite-svelte.com/docs/components/video)
 * - Setup
 * - Video player
 * - Autoplay
 * - Muted
 * - Sizes
 * ## Props
 * @prop src: string;
 * @prop type: string = 'video/mp4';
 * @prop trackSrc: string = '';
 * @prop srclang: string = 'en';
 * @prop label: string = 'english_captions';
 */
export default class Video extends SvelteComponentTyped<VideoProps, VideoEvents, VideoSlots> {
}
export {};
//# sourceMappingURL=Video.svelte.d.ts.map