<script>
  import { WEBSITE_NAME } from "../constants";
  import { db } from "../../firebase.js";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  const skillsCollection = db
    .collection("skills");
  const skills = collectionData(skillsCollection, "id").pipe(startWith([]));
</script>

<svelte:head>
  <title>Home - {WEBSITE_NAME}</title>
</svelte:head>

<main>
  <h1>Skills</h1>
  {#each $skills as skill}
    <h2>{skill.category}</h2>
    <ul>
      {#each skill.entries as entry}
      <li>{entry}</li>
      {/each}
    </ul>
  {/each}
</main>

<style>
</style>
