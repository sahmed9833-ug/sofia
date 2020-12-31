<script>
    import { Router, links } from "svelte-routing";
</script>

<style>
    nav {
        height: 60%;
    }
    ul {
        width: 50%;
        margin-left: 17.5%;
        padding-left: 30px;
        padding-right: 30px;
        list-style-type: none;
    }
    li {
        height: 30px;
        margin-top: 10px;
    }
    hr {
        border-top: 1px solid rgb(90, 50, 0);
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
