<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from 'smelte/src/components/Button/Button.svelte';
	import Menu from 'smelte/src/components/Menu/Menu.svelte';
	import Icon from 'smelte/src/components/Icon/Icon.svelte';
	import MenuActions from './Actions';

	let open = false;

	export const items = [
		{ value: MenuActions.CREATE, text: 'Create a beacon' },
		{ value: MenuActions.CONFIGURE, text: 'Change map config' }
	];

	interface Events {
		choose: MenuActions;
	}

	const dispatch = createEventDispatcher<Events>();

	const onChange = (e: CustomEvent<MenuActions>) => {
		dispatch('choose', e.detail);
	};
</script>

<nav class="navbar px-2">
	<Menu bind:open {items} on:change={onChange}>
		<div slot="activator">
			<Button text class="over-map" on:click={() => (open = !open)}>
				<Icon>more_vert</Icon>
			</Button>
		</div>
	</Menu>
</nav>

<style>
	:global(.navbar .absolute) {
		z-index: var(--map-z-index);
	}
</style>
