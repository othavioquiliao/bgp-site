/* eslint-disable @typescript-eslint/no-explicit-any */
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// Declarando globalmente a propriedade dataLayer e a função gtag
	interface Window {
		dataLayer: any[];
		gtag?: (...args: any[]) => void;
	}
}

export {};
