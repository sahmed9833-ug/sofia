<script>
    import MediaQuery from "svelte-media-query";
</script>

<style>
    div {
        margin: 0 auto;
    }
    div.desktop {
        width: 75%;
    }
    div.tablet {
        width: 85%;
    }
    div.mobile {
        width: 90%;
        padding-top: 10px;
    }
</style>

<MediaQuery query="(min-width: 1281px)" let:matches>
    {#if matches}
        <div class="desktop">
            <slot name="content" />
        </div>
    {/if}
</MediaQuery>

<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
    {#if matches}
        <div class="tablet">
            <slot name="content" />
        </div>
    {/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
    {#if matches}
        <div class="mobile">
            <slot name="content" />
        </div>
    {/if}
</MediaQuery>
