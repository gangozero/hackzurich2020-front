<script>
	import {Route,router} from 'tinro';
	import {Variables,Notifications,Container,Block} from "svelte-atoms";
	import {user} from './lib/userStore.js'

	import Login from './Login.svelte';
	import Cabinet from './cabinet/Cabinet.svelte';
	import Match from './match/Match.svelte';
	import Chat from './match/Chat.svelte';

	router.useHashNavigation();
	//user.set('159c7e6e-9131-4606-969e-046e44e879df');
	$: if(!$user) router.goto('/login');
</script>

<Variables />

<Container>
		<Route path="/login"><Login/></Route>
		<Route path="/cabinet"><Cabinet/></Route>
		<Route path="/match/:id"><Match/></Route>
		<Route path="/match/:id/chat"><Chat/></Route>
</Container>

<Notifications />