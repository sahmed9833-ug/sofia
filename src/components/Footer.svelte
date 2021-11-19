<script lang="ts">
  import MediaQuery from "svelte-media-query";
  import { WEBSITE_NAME } from "../constants/strings";

  const gitHubUrl = "https://github.com/sahmed9833-ug";
  const linkedInUrl = "https://www.linkedin.com/in/sofia-ahmed-849965150/";
</script>

<MediaQuery query="(min-width: 481px) and (min-height: 450px)" let:matches>
  {#if matches}
    <div>
      <p>
        <a href="{gitHubUrl}" target="_blank">GitHub</a>
        |
        <a href="{linkedInUrl}" target="_blank">LinkedIn</a
        >
      </p>
      <p class="notes">{WEBSITE_NAME} &#169; 2021</p>
    </div>
  {/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
  {#if matches}
    <div class="mobile">
      <p>
        <a href="{gitHubUrl}" target="_blank">GitHub</a>
        |
        <a href="{linkedInUrl}" target="_blank">LinkedIn</a
        >
      </p>
      <p class="notes">{WEBSITE_NAME} &#169; 2021</p>
    </div>
  {/if}
</MediaQuery>

<style lang="scss">
  @import '../styles/colours';

  div {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 0;
  }
  div.mobile {
    bottom: auto;
    background-color: $background-secondary;
  }
  p {
    text-align: center;
    font-family: "Martel", serif;
    font-size: small;
    color: $font-primary;
  }
  a {
    font-weight: unset;
    color: $font-primary;
  }
  p.notes {
    font-size: x-small;
  }
</style>
