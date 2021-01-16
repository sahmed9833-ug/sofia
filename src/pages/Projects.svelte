<script>
  import MediaQuery from "svelte-media-query";
  import { db } from "../../firebase.js";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  const projectsCollection = db
    .collection("projects")
    .orderBy("lastModified", "desc");
  const projects = collectionData(projectsCollection, "id").pipe(startWith([]));
</script>

<svelte:head>
  <title>Projects - Saeed Ahmed</title>
</svelte:head>

<main>
  <h1>Projects</h1>
  <hr />
  <MediaQuery query="(min-width: 1281px)" let:matches>
    {#if matches}
      <ul>
        {#each $projects as project}
          <li>
            <a href={project.url}>
              <img src={project.image} alt={project.title} />
              <div class="text">
                <p><strong>{project.title}</strong></p>
                <hr />
                <p>{project.description}</p>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </MediaQuery>

  <MediaQuery query="(max-width: 1280px)" let:matches>
    {#if matches}
      <ul>
        {#each $projects as project}
          <li class="mobile">
            <img src={project.image} alt={project.title} />
            <div class="text">
              <p><strong>{project.title}</strong></p>
              <hr />
              <p>{project.description}</p>
            </div>
          </li>
        {/each}
      </ul>
    {/if}
  </MediaQuery>
</main>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    width: 300px;
    height: fit-content;
    min-height: 300px;
    display: inline-block;
    vertical-align: top;
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: burlywood;
    border: 3px solid rgb(90, 50, 0);
    transition: 0.2s ease-out;
  }

  li:hover,
  li:active {
    transform: scale(1.02);
  }

  li.mobile {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }

  a {
    text-decoration: none;
    color: rgb(90, 50, 0);
  }

  img {
    width: 100%;
    height: 70%;
  }

  div.text {
    width: 100%;
    height: 30%;
    padding-top: 5px;
    border-top: 1px solid rgb(90, 50, 0);
  }
  p {
    word-wrap: break-word;
    margin-top: 0px;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
  }
</style>
