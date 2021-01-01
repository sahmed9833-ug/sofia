<script>
    import MediaQuery from "svelte-media-query";
</script>

<style>
    div {
        height: 30%;
    }
    div.mobile {
        height: 100%;
        display: block;
        float: left;
        width: 75px;
    }
</style>

<MediaQuery query="(min-width: 481px)" let:matches>
    {#if matches}
        <div />
    {/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
    {#if matches}
        <div class="mobile" />
    {/if}
</MediaQuery>
