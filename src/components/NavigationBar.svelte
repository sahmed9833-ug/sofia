<script>
    import MediaQuery from "svelte-media-query";

    import Logo from "./Logo.svelte";
    import NavigationItems from "./NavigationItems.svelte";
    import Footer from "./Footer.svelte";
</script>

<style>
    div {
        position: fixed;
        background-color: burlywood;
    }
    div.side {
        width: 25%;
        height: 100%;
        top: 0;
        background-color: burlywood;
    }
    div.top {
        position: fixed;
        width: 100%;
        height: 75px;
        top: 0;
    }
</style>

<MediaQuery query="(min-width: 1281px)" let:matches>
    {#if matches}
        <div class="side">
            <Logo />
            <NavigationItems />
            <Footer />
        </div>
    {/if}
</MediaQuery>

<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
    {#if matches}
        <div class="side">
            <Logo />
            <NavigationItems />
            <Footer />
        </div>
    {/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
    {#if matches}
        <div class="top">
            <Logo />
            <NavigationItems />
        </div>
    {/if}
</MediaQuery>
