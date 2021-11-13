<script lang="ts">
  import MediaQuery from "svelte-media-query";
</script>

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

<style lang="scss">
  div {
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;
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
    padding-bottom: 10px;
  }
</style>
