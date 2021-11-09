<script lang="ts">
	import type { IIndoorPosition } from '$src/interfaces/position.interface';

	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import type { IndoorMapEvents } from '../../interfaces/indoor-map.interface';
	import type { IndoorMap } from './indoor-map.model';
	import { createMap } from './map';
	import MapContext from './map-context';

	const dispatch = createEventDispatcher<IndoorMapEvents>();

	const notifyBoundsUpdate = (newDimentions: IIndoorPosition) => {
		dispatch('boundsUpdate', newDimentions);
	};

	const notifyMapUpdate = () => {
		dispatch('mapUpdate');
	};

	export let editMode = true;

	let map: IndoorMap;
	export let backgroundImage = './static/indoor-map.png';
	$: {
		map?.updateBackgroundImage(backgroundImage, editMode).then((newSize) => {
			notifyMapUpdate();
			notifyBoundsUpdate(newSize);
		});
	}

	export let mapSize: IIndoorPosition = {
		x: NaN,
		y: NaN
	};

	$: {
		if (map) updateMapBounds(mapSize);
	}

	const updateMapBounds = (newBounds: IIndoorPosition) => {
		map?.setBounds(newBounds);
		mapSize = newBounds;
		notifyBoundsUpdate(newBounds);
	};

	let mapNode: HTMLDivElement;

	MapContext.set(() => map);

	onMount(async () => {
		map = await createMap({ imageOverlay: backgroundImage, target: mapNode });
		notifyBoundsUpdate(map.getBounds());
	});

	onDestroy(() => {
		if (!map) return;

		map.destroy();
	});
</script>

<div class="map" bind:this={mapNode}>
	{#if map}
		<slot />
	{/if}
</div>

<style>
	.map {
		min-height: 32rem;
		height: 100%;
		width: 100%;
	}
</style>
