import { SvelteComponentTyped } from "svelte";
import type { PsizeType, PweightType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string | undefined;
        height?: "normal" | "relaxed" | "loose" | undefined;
        align?: "center" | "left" | "right" | undefined;
        justify?: boolean | undefined;
        italic?: boolean | undefined;
        firstupper?: boolean | undefined;
        upperClass?: string | undefined;
        opacity?: number | undefined;
        whitespace?: "normal" | "pre" | "nowrap" | "preline" | "prewrap" | undefined;
        size?: PsizeType | undefined;
        space?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | undefined;
        weight?: PweightType | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PProps = typeof __propDef.props;
export type PEvents = typeof __propDef.events;
export type PSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Paragraph](https://flowbite-svelte.com/docs/typography/paragraph)
 * - Leading paragraph
 * - First letter
 * - Paragraph link
 * - Paragraph bold
 * - Paragraph underline
 * - Paragraph italic
 * - Paragraph popover
 * - Layout
 * - Text alignment
 * ## Props
 * @prop color: string = 'text-gray-900 dark:text-white';
 * @prop height: 'normal' | 'relaxed' | 'loose' = 'normal';
 * @prop align: 'left' | 'center' | 'right' = 'left';
 * @prop justify: boolean = false;
 * @prop italic: boolean = false;
 * @prop firstupper: boolean = false;
 * @prop upperClass: string = 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left';
 * @prop opacity: number | undefined = undefined;
 * @prop whitespace: 'normal' | 'nowrap' | 'pre' | 'preline' | 'prewrap' = 'normal';
 * @prop size: PsizeType = 'base';
 * @prop space: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | undefined = undefined;
 * @prop weight: PweightType = 'normal';
 * ## Example
 * ```
 * <script>
 *   import { P } from 'flowbite-svelte'
 * </script>
 *
 * <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
 *   Track work across the enterprise through an open, collaborative platform. Link issues across
 *   Jira and ingest data from other software development tools, so your IT support and operations
 *   teams have richer contextual information to rapidly respond to requests, incidents, and changes.
 * </P>
 * <P weight="light" color="text-gray-500 dark:text-gray-400">
 *   Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
 *   Accelerate critical development work, eliminate toil, and deploy changes with ease, with a
 *   complete audit trail for every change.
 * </P>
 * ```
 */
export default class P extends SvelteComponentTyped<PProps, PEvents, PSlots> {
}
export {};
//# sourceMappingURL=P.svelte.d.ts.map