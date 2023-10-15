import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        steps?: string[] | undefined;
        currentStep?: number | undefined;
        size?: string | undefined;
        color?: "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "primary" | "custom" | "secondary" | undefined;
        glow?: boolean | undefined;
        hideLabel?: boolean | undefined;
        completedCustom?: string | undefined;
        currentCustom?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StepIndicatorProps = typeof __propDef.props;
export type StepIndicatorEvents = typeof __propDef.events;
export type StepIndicatorSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Step Indicator](https://flowbite-svelte.com/docs/extend/step-indicator)
 * - Setup
 * - Default step indicator
 * - Glow
 * - Hide label
 * - Sizes
 * - Colors
 * ## Props
 * @prop steps: string[] = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
 * @prop currentStep = 1;
 * @prop size: string = 'h-2.5';
 * @prop color: 'primary'| 'secondary' |'gray' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'blue' | 'custom' = 'primary';
 * @prop glow: boolean = false;
 * @prop hideLabel: boolean = false;
 * @prop completedCustom: string = '';
 * @prop currentCustom: string = '';
 * ## Example
 * ```
 * <script>
 *   import { StepIndicator } from 'flowbite-svelte'
 *   let currentStep = 2;
 *   let steps = [
 *     'Step 1',
 *     'Step 2',
 *     'Step 3',
 *     'Step 4',
 *     'Step 5'
 *   ]
 * </script>
 *
 * <StepIndicator {currentStep} {steps}/>
 * ```
 */
export default class StepIndicator extends SvelteComponentTyped<StepIndicatorProps, StepIndicatorEvents, StepIndicatorSlots> {
}
export {};
//# sourceMappingURL=StepIndicator.svelte.d.ts.map