<script>
    import MediaQuery from "svelte-media-query";
</script>

<style>
    div.desktop {
        position: relative;
        margin-left: 25%;
    }

    div.tablet {
        margin-left: 25%;
    }

    div.mobile {
        margin-top: 75px;
        padding-top: 3%;
        padding-left: 3%;
        padding-right: 3%;
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
