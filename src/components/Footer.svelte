<script>
  import MediaQuery from "svelte-media-query";
</script>

<MediaQuery query="(min-width: 481px) and (min-height: 450px)" let:matches>
  {#if matches}
    <div>
      <p>
        <a href="https://github.com/sahmed9833-ug">GitHub</a>
        |
        <a href="https://www.linkedin.com/in/saeed-ahmed-849965150/">LinkedIn</a
        >
      </p>
      <p class="notes">Sofia Ahmed &#169; 2021</p>
    </div>
  {/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
  {#if matches}
    <div class="mobile">
      <p>
        <a href="https://github.com/sahmed9833-ug">GitHub</a>
        |
        <a href="https://www.linkedin.com/in/saeed-ahmed-849965150/">LinkedIn</a
        >
      </p>
      <p class="notes">Saeed Ahmed &#169; 2021</p>
    </div>
  {/if}
</MediaQuery>

<style>
  div {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 0;
  }
  div.mobile {
    bottom: auto;
    background-color: burlywood;
  }
  p {
    text-align: center;
    font-family: "Martel", serif;
    font-size: small;
    color: rgb(90, 50, 0);
  }
  a {
    font-weight: unset;
    color: rgb(90, 50, 0);
  }
  p.notes {
    font-size: x-small;
  }
</style>
