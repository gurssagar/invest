import { SvelteComponentTyped } from "svelte";
import type { ComponentType } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        size?: number | undefined;
        total?: number | undefined;
        rating?: number | undefined;
        partialId?: string | undefined;
        icon?: ComponentType | undefined;
        count?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        text: {};
    };
};
export type RatingProps = typeof __propDef.props;
export type RatingEvents = typeof __propDef.events;
export type RatingSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
 * - Setup
 * - Default rating
 * - Stars
 * - Rating with text
 * - Rating count
 * - Icon size and color
 * - Size and color
 * - AdvancedRating component
 * - Different icon
 * - Score rating
 * - Rating comment
 * - Review content
 * ## Props
 * @prop divClass: string = 'flex items-center';
 * @prop size: number = 24;
 * @prop total: number = 5;
 * @prop rating: number = 4;
 * @prop partialId: string = 'partialStar' + generateId();
 * @prop icon: ComponentType = Star;
 * @prop count: boolean = false;
 * ## Example
 * ```
 * <script>
 *   import { Rating } from 'flowbite-svelte';
 * </script>
 *
 * <Rating id="example-3" total={5} rating={3.4}>
 *   <p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.4 out of 5</p>
 * </Rating>
 * ```
 */
export default class Rating extends SvelteComponentTyped<RatingProps, RatingEvents, RatingSlots> {
}
export {};
//# sourceMappingURL=Rating.svelte.d.ts.map