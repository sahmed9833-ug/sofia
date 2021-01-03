<script>
    import { fly, fade } from "svelte/transition";
    import { Router, links } from "svelte-routing";
    import MediaQuery from "svelte-media-query";

    export let showing;
</script>

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
        border-top: 1px solid rgb(158, 129, 94);
        border-bottom: none;
    }
    a {
        display: block;
        font-family: "Martel", serif;
        font-size: large;
        text-align: center;
        color: rgb(90, 50, 0);
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
    }
</style>

<MediaQuery query="(min-width: 481px)" let:matches>
    {#if matches}
        <uL use:links>
            <Router>
                <li><a href="about">About</a></li>
                <hr />
                <li><a href="cv">CV </a></li>
                <hr />
                <li><a href="projects">Projects</a></li>
            </Router>
        </uL>
    {/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
    {#if matches && showing}
        <uL
            class="mobile"
            use:links
            in:fly={{ y: -200, duration: 300 }}
            out:fly={{ y: -200, duration: 300 }}
            on:click={(e) => (showing = false)}>
            <Router>
                <li class="mobile">
                    <a class="mobile" href="about">About </a>
                </li>
                <li class="mobile"><a class="mobile" href="cv">CV </a></li>
                <li class="mobile">
                    <a class="mobile" href="projects">Projects </a>
                </li>
            </Router>
        </uL>
        <div in:fade={{ duration: 200 }} out:fade={{ duration: 200 }} />
    {/if}
</MediaQuery>
