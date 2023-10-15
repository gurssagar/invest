import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        ratings?: {
            label: string;
            rating: number;
        }[] | undefined;
        ratings2?: {
            label: string;
            rating: number;
        }[] | undefined;
        headerLabel: {
            desc1: string;
            desc2: string;
            desc3: string;
            link: {
                label: string;
                url: string;
            };
        };
        desc1Class?: string | undefined;
        desc2Class?: string | undefined;
        desc3spanClass?: string | undefined;
        desc3pClass?: string | undefined;
        linkClass?: string | undefined;
        barColor?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScoreRatingProps = typeof __propDef.props;
export type ScoreRatingEvents = typeof __propDef.events;
export type ScoreRatingSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
 * ## Props
 * @prop ratings: { label: string; rating: number }[] = [];
 * @prop ratings2: { label: string; rating: number }[] = [];
 * @prop headerLabel: {
 *   desc1: string;
 *   desc2: string;
 *   desc3: string;
 *   link: { label: string; url: string };
 * };
 * @prop desc1Class: string =
 *   'bg-primary-100 w-8 text-primary-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-primary-200 dark:text-primary-800';
 * @prop desc2Class: string = 'ml-2 w-24 font-medium text-gray-900 dark:text-white';
 * @prop desc3spanClass: string = 'mx-2 w-1 h-1 bg-gray-900 rounded-full dark:bg-gray-500';
 * @prop desc3pClass: string = 'text-sm  w-24 font-medium text-gray-500 dark:text-gray-400';
 * @prop linkClass: string = 'ml-auto w-32 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500';
 * @prop barColor: string = 'bg-primary-600 h-2.5 rounded dark:bg-primary-500';
 * ## Example
 * ```
 * <script>
 *   import { ScoreRating } from 'flowbite-svelte';
 * </script>
 *
 * <ScoreRating
 *   {headerLabel}
 *   ratings={[
 *     { label: 'Staff', rating: 8.8 },
 *     { label: 'Comfort', rating: 8.9 },
 *     { label: 'Free WiFi', rating: 8.8 },
 *     { label: 'Facilities', rating: 5.4 }
 *   ]}
 *   ratings2={[
 *     { label: 'Value for money', rating: 8.9 },
 *     { label: 'Cleanliness', rating: 7.0 },
 *     { label: 'Location', rating: 8.0 }
 *   ]}
 * />
 * ```
 */
export default class ScoreRating extends SvelteComponentTyped<ScoreRatingProps, ScoreRatingEvents, ScoreRatingSlots> {
}
export {};
//# sourceMappingURL=ScoreRating.svelte.d.ts.map