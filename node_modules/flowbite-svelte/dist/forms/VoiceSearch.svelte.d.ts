import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        id?: string | undefined;
        labelClass?: string | undefined;
        iconClass?: string | undefined;
        iconDivClass?: string | undefined;
        inputClass?: string | undefined;
        btnClass?: string | undefined;
        voiceBtnClass?: string | undefined;
        voiceIconClass?: string | undefined;
        placeholder?: string | undefined;
    };
    events: {
        submit: SubmitEvent;
        handleVoiceBtn: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type VoiceSearchProps = typeof __propDef.props;
export type VoiceSearchEvents = typeof __propDef.events;
export type VoiceSearchSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Voice Search](https://flowbite-svelte.com/docs/forms/search-input#Voice_Search)
 * ## Props
 * @prop id: string = '';
 * @prop labelClass: string = 'sr-only';
 * @prop iconClass: string = 'w-5 h-5 text-gray-500 dark:text-gray-400';
 * @prop iconDivClass: string = 'flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none';
 * @prop inputClass: string = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
 * @prop btnClass: string = 'inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
 * @prop voiceBtnClass: string = 'flex absolute inset-y-0 right-0 items-center pr-3';
 * @prop voiceIconClass: string = 'w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white';
 * @prop placeholder: string = 'Search Mockups, Logos, Design Templates...';
 * ## Example
 * ```
 * <script>
 *   import { Search, Button } from 'flowbite-svelte'
 *   function handleVoiceBtn() {
 *     alert('You clicked voice button');
 *   }
 * </script>
 *
 * <form class="flex gap-2">
 *   <Search size='md' class="flex gap-2 items-center" placeholder="Search Mockups, Logos, Design Templates...">
 *     <button type="button" on:click={handleVoiceBtn} class="outline-none">
 *       <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"/></svg>
 *     </button>
 *   </Search>
 *   <Button size='sm'>
 *     <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
 *     Search
 *   </Button>
 * </form>
 * ```
 */
export default class VoiceSearch extends SvelteComponentTyped<VoiceSearchProps, VoiceSearchEvents, VoiceSearchSlots> {
}
export {};
//# sourceMappingURL=VoiceSearch.svelte.d.ts.map