<script>
    import Logo from "./Logo.svelte";
    import Navigation from "./Navigation.svelte";
    import Footer from "./Footer.svelte";
</script>

<style>
    div.bar {
        position: fixed;
        width: 25%;
        height: 100%;
        top: 0;
        background-color: burlywood;
    }
</style>

<div class="bar">
    <Logo />
    <Navigation />
    <Footer />
</div>
