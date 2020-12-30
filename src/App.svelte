<script>
	import { Router, Link, Route } from "svelte-routing";

	// components
	import Header from "./components/Header.svelte";
	import Body from "./components/Body.svelte";

	// pages
	import Home from "./pages/Home.svelte";
	import CV from "./pages/CV.svelte";

	export let url = "";
</script>

<style>
	main {
		padding-top: 180px;
		z-index: -1;
	}
</style>

<Router {url}>
	<Header>
		<div slot="links">
			<Link to="/">Home</Link>
			<Link to="cv">CV</Link>
		</div>
	</Header>
	<main>
		<Body>
			<div slot="content">
				<Route path="/" component={Home} />
				<Route path="cv" component={CV} />
			</div>
		</Body>
	</main>
</Router>
