// Temporal replacement for official Polymer declarations

declare namespace Polymer {

    class Element {
        resolveUrl: (url: string) => string;
        $: any
    }

    function importHref(href: string, onload?: () => void, onerror?: () => {}, optAsync?: boolean): HTMLLinkElement;
}
