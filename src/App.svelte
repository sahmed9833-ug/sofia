<script>
	import { Router, Route } from "svelte-routing";

	// components
	import Sidebar from "./components/Sidebar.svelte";
	import Body from "./components/Body.svelte";

	// pages
	import Home from "./pages/Home.svelte";
	import CV from "./pages/CV.svelte";

	export let url = "";
</script>

<style>
	main {
		padding-left: 25%;
	}
</style>

<Router {url}>
	<Sidebar />
	<main>
		<Body>
			<div slot="content">
				<Route path="/" component={Home} />
				<Route path="cv" component={CV} />
			</div>
		</Body>
	</main>
</Router>
