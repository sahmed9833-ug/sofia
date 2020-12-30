<script>
  let y = 0;

  $: headerType = y < 10 ? "full" : "mini";
</script>

<style>
  div {
    position: fixed;
    width: 100%;
    height: 180px;
    top: 0;
    background-color: burlywood;
    transition: 200ms ease-in-out;
    z-index: 10;
  }
  .full {
    transform: translateY(0%);
  }
  .mini {
    transform: translateY(-60%);
  }
</style>

<svelte:window bind:scrollY={y} />

<div class={headerType}>
  <slot name="links" />
</div>
