<script>
	import { Router, Route } from "svelte-routing";
	import MediaQuery from "svelte-media-query";

	// components
	import NavigationBar from "./components/NavigationBar.svelte";
	import Body from "./components/Body.svelte";
	import Footer from "./components/Footer.svelte";

	// pages
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import CV from "./pages/CV.svelte";
	import Projects from "./pages/Projects.svelte";

	export let url = "";

	let pages = [
		{ path: "/", component: Home },
		{ path: "about", component: About },
		{ path: "cv", component: CV },
		{ path: "projects", component: Projects },
	];
</script>

<style>
	main {
		position: relative;
		min-height: 100%;
		margin-left: 25%;
	}
	main.mobile {
		margin-left: 0;
		margin-top: 74px;
	}
</style>

<Router {url}>
	<MediaQuery query="(min-width: 481px)" let:matches>
		{#if matches}
			<NavigationBar />
			<main>
				<Body>
					<div slot="content">
						{#each pages as page}
							<Route
								path={page.path}
								component={page.component} />
						{/each}
					</div>
				</Body>
			</main>
		{/if}
	</MediaQuery>

	<MediaQuery query="(max-width: 480px)" let:matches>
		{#if matches}
			<NavigationBar />
			<main class="mobile">
				<Body>
					<div slot="content">
						{#each pages as page}
							<Route
								path={page.path}
								component={page.component} />
						{/each}
					</div>
				</Body>
			</main>
			<Footer />
		{/if}
	</MediaQuery>
</Router>
