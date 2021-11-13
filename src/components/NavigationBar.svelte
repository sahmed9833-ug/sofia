<script lang="ts">
  import MediaQuery from "svelte-media-query";

  import Logo from "./Logo.svelte";
  import NavigationItems from "./NavigationItems.svelte";
  import Footer from "./Footer.svelte";

  let showingItems = false;

  $: menuButtonClass = showingItems ? "active" : "";
</script>

<MediaQuery query="(min-width: 481px)" let:matches>
  {#if matches}
    <div class="side">
      <Logo />
      <NavigationItems bind:showing={showingItems} />
      <Footer />
    </div>
  {/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
  {#if matches}
    <div class="top">
      <Logo on:logoClick={(e) => (showingItems = false)} />
      <button
        class={menuButtonClass}
        on:click={(e) => (showingItems = !showingItems)}>Menu</button
      >
    </div>
    <NavigationItems bind:showing={showingItems} />
  {/if}
</MediaQuery>

<style lang="scss">
  @import '../styles/colours.scss';

  div {
    position: fixed;
    background-color: $background-secondary;
  }
  div.side {
    width: 25%;
    height: 100%;
    top: 0;
    background-color: $background-secondary;
  }
  div.top {
    position: fixed;
    width: 100%;
    height: 75px;
    top: 0;
    border-bottom: 3px solid $font-primary;
    z-index: 99;
  }
  button {
    height: 50px;
    width: 90px;
    margin-top: 13px;
    margin-right: 13px;
    float: right;
    background-color: $background;
    color: $font-primary;
    font-weight: 700;
    border: 3px solid $font-primary;
  }
  button:active,
  button.active {
    background-color: $background-secondary;
    color: $font-primary;
  }
</style>
