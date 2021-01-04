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
</script>

<style>
	main {
		position: relative;
		min-height: 100%;
	}
</style>

<Router {url}>
	<MediaQuery query="(min-width: 481px)" let:matches>
		{#if matches}
			<NavigationBar />
			<main>
				<Body>
					<div slot="content">
						<Route path="/" component={Home} />
						<Route path="about" component={About} />
						<Route path="cv" component={CV} />
						<Route path="projects" component={Projects} />
					</div>
				</Body>
			</main>
		{/if}
	</MediaQuery>

	<MediaQuery query="(max-width: 480px)" let:matches>
		{#if matches}
			<NavigationBar />
			<main>
				<Body>
					<div slot="content">
						<Route path="/" component={Home} />
						<Route path="about" component={About} />
						<Route path="cv" component={CV} />
						<Route path="projects" component={Projects} />
					</div>
				</Body>
			</main>
			<Footer />
		{/if}
	</MediaQuery>
</Router>
