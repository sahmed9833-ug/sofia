<script>
	import { Router, Route } from "svelte-routing";

	// components
	import Navigationbar from "./components/NavigationBar.svelte";
	import Body from "./components/Body.svelte";

	// pages
	import Home from "./pages/Home.svelte";
	import CV from "./pages/CV.svelte";

	export let url = "";
</script>

<style>
</style>

<Router {url}>
	<Navigationbar />
	<main>
		<Body>
			<div slot="content">
				<Route path="/" component={Home} />
				<Route path="cv" component={CV} />
			</div>
		</Body>
	</main>
</Router>
