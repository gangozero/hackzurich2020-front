<script>
	import {Route,router} from 'tinro';
	import {Variables,Container} from "svelte-atoms";
	import {user} from './lib/userStore.js'
	import Login from './Login.svelte';

	router.useHashNavigation();
	$: if(!$user) router.goto('/login');
</script>

<Variables />

<Container>
	<Route path="/login"><Login/></Route>
</Container>