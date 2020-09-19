<script>
	import {Route,router} from 'tinro';
	import {Variables,Container,Block} from "svelte-atoms";
	import {user} from './lib/userStore.js'

	import Login from './Login.svelte';
	import Cabinet from './cabinet/Cabinet.svelte';

	router.useHashNavigation();
	//$: if(!$user) router.goto('/login');
</script>

<Variables />

<Container>
		<Route path="/login"><Login/></Route>
		<Route path="/cabinet"><Cabinet/></Route>
</Container>