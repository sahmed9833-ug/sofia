<script>
    import { Router, links } from "svelte-routing";
</script>

<style>
    ul {
        width: 100%;
        padding: 0;
        list-style-type: none;
    }
    li {
        height: 30px;
        margin-top: 10px;
    }
    hr {
        width: 65%;
        border-top: 1px solid rgb(158, 129, 94);
        border-bottom: none;
    }
    a {
        display: block;
        height: 100%;
        font-family: "Martel", serif;
        font-size: large;
        text-align: center;
        color: rgb(90, 50, 0);
    }
</style>

<nav>
    <uL use:links>
        <Router>
            <li><a href="/">Home </a></li>
            <hr />
            <li><a href="cv">CV </a></li>
        </Router>
    </uL>
</nav>
