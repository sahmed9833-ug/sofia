<script lang="ts">
  import { db } from "../../firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import type { Observable } from "rxjs";

  import { WEBSITE_NAME } from "../constants/strings";
  
  type Skill = {
    category: string;
    entries: string[];
  }

  const skillsCollection = db
    .collection("skills");
  const skills = collectionData(skillsCollection, "id").pipe(startWith([])) as Observable<Skill[]>;
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
