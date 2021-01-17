<script>
  import { fly, fade } from "svelte/transition";
  import { Router, links } from "svelte-routing";
  import MediaQuery from "svelte-media-query";

  export let showing;

  let navItems = [
    { route: "about", text: "About" },
    { route: "cv", text: "CV" },
    { route: "projects", text: "Projects" },
  ];
</script>

<MediaQuery query="(min-width: 481px)" let:matches>
  {#if matches}
    <uL use:links>
      <Router>
        {#each navItems as item, i}
          <li><a href={item.route}>{item.text}</a></li>
          {#if i !== navItems.length - 1}
            <hr />
          {/if}
        {/each}
      </Router>
    </uL>
  {/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
  {#if matches && showing}
    <uL
      class="mobile"
      use:links
      on:click={() => (showing = false)}
      in:fly={{ y: -200, duration: 300 }}
      out:fly={{ y: -200, duration: 300 }}>
      <Router>
        {#each navItems as item}
          <li class="mobile">
            <a class="mobile" href={item.route}>{item.text}</a>
          </li>
        {/each}
      </Router>
    </uL>
    <div
      on:click={() => (showing = false)}
      in:fade={{ duration: 200 }}
      out:fade={{ duration: 200 }}
    />
  {/if}
</MediaQuery>

<style>
  ul {
    width: 100%;
    padding: 0;
    list-style-type: none;
  }
  ul.mobile {
    margin: 0;
    position: fixed;
    background-color: bisque;
    z-index: 98;
  }
  li {
    height: 30px;
    margin-top: 10px;
  }
  li.mobile {
    width: 100%;
    height: 60px;
    margin: 0;
    border-bottom: 1px solid rgba(90, 50, 0, 0.3);
  }
  hr {
    width: 35%;
  }
  a {
    display: block;
    font-family: "Martel", serif;
    font-size: large;
    font-weight: unset;
    text-align: center;
  }
  a.mobile {
    width: 100%;
    height: 45px;
    padding-top: 23px;
    font-size: medium;
    font-family: "Montserrat", sans-serif;
  }
  a.mobile:active,
  a.mobile:hover {
    background-color: rgb(184, 149, 107);
    color: bisque;
    text-decoration: none;
  }

  div {
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 95;
  }
</style>
