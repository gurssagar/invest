import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        ceil?: boolean | undefined;
        helpfullink?: string | undefined;
        abuselink?: string | undefined;
        comment: {
            id: string;
            user: {
                name: string;
                img: {
                    src: string;
                    alt: string;
                };
                joined: string;
            };
            total: number;
            rating: number;
            heading: string;
            address: string;
            datetime: string;
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        evaluation: {};
    };
};
export type RatingCommentProps = typeof __propDef.props;
export type RatingCommentEvents = typeof __propDef.events;
export type RatingCommentSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
 * ## Props
 * @prop ceil: boolean = false;
 * @prop helpfullink: string = '';
 * @prop abuselink: string = '';
 * @prop comment: {
 *   id: string;
 *   user: {
 *     name: string;
 *     img: {
 *       src: string;
 *       alt: string;
 *     };
 *     joined: string;
 *   };
 *   total: number;
 *   rating: number;
 *   heading: string;
 *   address: string;
 *   datetime: string;
 * };
 * ## Example
 * ```
 * <script>
 *   import { RatingComment } from 'flowbite-svelte';
 * </script>
 *
 * <RatingComment {comment} helpfullink="/" abuselink="/">
 *   <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
 *     This is my third Invicta Pro Diver. They are just fantastic value.
 *   </p>
 *   <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
 *     It is obviously not the same build quality as those very expensive watches.
 *   </p>
 *   <a
 *     href="/"
 *     class="block mb-5 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
 *     >Read more</a
 *   >
 *   <svelte:fragment slot="evaluation">19 people found this helpful</svelte:fragment>
 * </RatingComment>
 * ```
 */
export default class RatingComment extends SvelteComponentTyped<RatingCommentProps, RatingCommentEvents, RatingCommentSlots> {
}
export {};
//# sourceMappingURL=RatingComment.svelte.d.ts.map