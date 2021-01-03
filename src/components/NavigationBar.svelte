<script>
    import MediaQuery from "svelte-media-query";

    import Logo from "./Logo.svelte";
    import NavigationItems from "./NavigationItems.svelte";
    import Footer from "./Footer.svelte";

    let showingItems = false;
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
        border-bottom: 3px solid rgba(90, 50, 0, 0.8);
        z-index: 99;
    }
    button {
        height: 50px;
        width: 90px;
        margin-top: 13px;
        margin-right: 13px;
        float: right;
        background-color: bisque;
        color: rgb(90, 50, 0);
        font-weight: 700;
        border: 3px solid rgba(90, 50, 0, 0.8);
    }
    button:active {
        background-color: rgb(184, 149, 107);
        color: bisque;
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
            <Logo on:logoClick={(e) => (showingItems = false)} />
            <button
                on:click={(e) => (showingItems = !showingItems)}>Menu</button>
        </div>
        <NavigationItems bind:showing={showingItems} />
    {/if}
</MediaQuery>
