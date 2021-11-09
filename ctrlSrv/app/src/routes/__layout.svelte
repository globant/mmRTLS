<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';
	import { checkMiddlewares } from '$src/middleware';
	import 'smelte/src/tailwind.css';
	import 'leaflet/dist/leaflet.css';
	import '../app.css';

	export async function load(input: LoadInput) {
		return await checkMiddlewares(input);
	}
</script>

<slot />
