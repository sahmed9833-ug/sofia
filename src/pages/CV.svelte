<script>
    import { db } from "../../firebase.js";
    import { collectionData } from "rxfire/firestore";
    import { startWith } from "rxjs/operators";

    const query = db.collection("skills");
    const skills = collectionData(query, "id").pipe(startWith([]));
</script>

<style>
    div {
        text-align: center;
    }
    h1 {
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 100;
    }
</style>

<div>
    <h1>CV goes here</h1>

    <h2>Skills</h2>
    <ul>
        {#each $skills as skill}
            <li>{skill.title}</li>
        {/each}
    </ul>
</div>
