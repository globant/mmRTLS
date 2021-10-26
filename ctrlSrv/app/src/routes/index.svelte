<script lang="ts">
	import Marker from '../components/Map/Marker.svelte';
	import Map from '../components/Map/Map.svelte';
	import { Menu } from '$src/components/Menu/Menu';
	import Actions from '$src/components/Menu/Actions';
	import BeaconDetails from '../views/BreaconDetails/BeaconDetails.svelte';
	import NavDeviceDetails from '../views/NavDeviceDetails/NavDeviceDetails.svelte';
	import BeaconSave from '../views/BeaconSave/BeaconSave.svelte';
	import { MarkersController } from '../streams/markers/markers.controller';
	import { createMenuActionsStream, menuActions } from '$src/components/Menu/menu.stream';
	import { MarkerType } from '$src/streams/markers/types';
	import type { Marker as IMarker } from '$src/streams/markers/types';
	import { BeaconController } from '$src/streams/beacons/beacons.controller';
	import { useMarkers } from '$src/streams/markers/use-markers';
	import { mapConfigStore } from "$src/store/map-background-image.store";
	import { filter, map, pipe, pluck, withLatestFrom } from 'rxjs';
	import type { MapConfig } from '$src/interfaces/map-config.interface';
	import { goto } from '$app/navigation';

	const existingConfig = mapConfigStore.pipe(
		filter((config): config is MapConfig => !!config)
	)

	const mapBackground = existingConfig.pipe(
		pluck('imageUrl'),
	);

	const mapSize = existingConfig.pipe(
		map(({sizeX, sizeY}) => ({x: sizeX, y: sizeY}))
	);

	useMarkers();

	const markers$ = MarkersController.get().pipe(
		withLatestFrom(existingConfig),
		map(([markers, {posX, posY}]) => markers.map(marker => ({
			...marker,
			x: marker.x + posX,
			y: marker.y + posY
		})))
	);

	const currentModifiedBeacon$ = BeaconController.getObservable();

	const beaconsMarkerClicked$ = MarkersController.getBeaconSelected();
	const navDeviceMarkerClicked$ = MarkersController.getNavDeviceSelected();

	const onMarkerClick = (e: CustomEvent<{ id: IMarker['id'] }>) => {
		MarkersController.select(e.detail.id);
	};

	const isSaveBeaconExperience$ = createMenuActionsStream([Actions.CREATE, Actions.EDIT]);
	const onChange = (e: CustomEvent<Actions>) => {
		if (e.detail === Actions.CONFIGURE) {
			goto('/upload-map');
		} else {
			menuActions.next(e.detail);
		}
	};
</script>

<div class="container">
	<Map backgroundImage={$mapBackground} mapSize={$mapSize} editMode={false}>
		<Menu on:choose={onChange} />
		{#if $isSaveBeaconExperience$} <BeaconSave /> {/if}
		{#each $markers$ as { x, y, id, icon, data, type } (id)}
			<Marker
				{x}
				{y}
				{id}
				{icon}
				on:click={onMarkerClick}
				disabled={
					$currentModifiedBeacon$?.beaconId === data.id && type === MarkerType.BEACON
				}
			/>
		{/each}
	</Map>
	<BeaconDetails beacon={$beaconsMarkerClicked$} />
	<NavDeviceDetails navDevice={$navDeviceMarkerClicked$} />
</div>
