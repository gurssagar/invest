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
export type SkeletonProps = typeof __propDef.props;
export type SkeletonEvents = typeof __propDef.events;
export type SkeletonSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Skeleton](https://flowbite-svelte.com/docs/components/skeleton)
 * ## Props
 * @prop divClass: string = 'animate-pulse';
 * @prop size: keyof Sizes = 'sm';
 * ## Example
 * ```
 * <script>
 *   import { Skeleton } from 'flowbite-svelte'
 * </script>
 *
 * <Skeleton size="sm" class="my-8" />
 * <Skeleton size="md" class="my-8" />
 * <Skeleton size="lg" class="my-8" />
 * <Skeleton size="xl" class="my-8" />
 * <Skeleton size="xxl" class="mt-8 mb-2.5" />
 * ```
 */
export default class Skeleton extends SvelteComponentTyped<SkeletonProps, SkeletonEvents, SkeletonSlots> {
}
export {};
//# sourceMappingURL=Skeleton.svelte.d.ts.map