<script>
    import { Router, links } from "svelte-routing";
    import MediaQuery from "svelte-media-query";
</script>

<style>
    ul {
        width: 100%;
        padding: 0;
        list-style-type: none;
    }
    ul.mobile {
        margin: 0;
        height: 100%;
    }
    li {
        height: 30px;
        margin-top: 10px;
    }
    li.mobile {
        display: inline-block;
        width: 100px;
        height: 100%;
        margin: 0;
    }
    hr {
        width: 65%;
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
        height: 60px;
        padding-top: 15px;
        font-size: medium;
        font-family: "Montserrat", sans-serif;
    }
    a.mobile:active,
    a.mobile:hover {
        background-color: rgb(90, 50, 0);
        color: bisque;
    }
    i {
        font-size: xx-large;
    }
</style>

<MediaQuery query="(min-width: 481px)" let:matches>
    {#if matches}
        <uL use:links>
            <Router>
                <li><a href="/">Home </a></li>
                <hr />
                <li><a href="cv">CV </a></li>
            </Router>
        </uL>
    {/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
    {#if matches}
        <uL class="mobile" use:links>
            <Router>
                <li class="mobile">
                    <a class="mobile" href="/"><i
                            class="las la-home" /><br />Home
                    </a>
                </li>
                <li class="mobile">
                    <a class="mobile" href="cv"><i
                            class="las la-file-alt" /><br />CV
                    </a>
                </li>
            </Router>
        </uL>
    {/if}
</MediaQuery>
