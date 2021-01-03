<script>
    import { createEventDispatcher } from "svelte";
    import { Router, link } from "svelte-routing";
    import MediaQuery from "svelte-media-query";

    const dispatch = createEventDispatcher();

    function dispatchLogoClick() {
        dispatch("logoClick");
    }
</script>

<style>
    div {
        margin: auto;

        /* placeholder styling */
        border-radius: 50%;
        background-color: blue;
        color: white;
        text-align: center;
    }
    div.desktop {
        height: 300px;
        width: 300px;
    }
    div.tablet {
        height: 150px;
        width: 90%;
    }
    div.mobile {
        height: 75px;
        width: 75px;
        display: block;
        float: left;
    }
</style>

<Router>
    <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
            <a href="/" use:link>
                <div class="desktop" /></a>
        {/if}
    </MediaQuery>

    <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
        {#if matches}
            <a href="/" use:link>
                <div class="tablet" /></a>
        {/if}
    </MediaQuery>

    <MediaQuery query="(max-width: 480px)" let:matches>
        {#if matches}
            <a href="/" use:link on:click={dispatchLogoClick}>
                <div class="mobile" /></a>
        {/if}
    </MediaQuery>
</Router>
