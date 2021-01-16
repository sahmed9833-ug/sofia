<script>
  import { db } from "../../firebase.js";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  const skillsCollection = db.collection("skills").orderBy("title");
  const skills = collectionData(skillsCollection, "id").pipe(startWith([]));

  const experienceCollection = db
    .collection("experience")
    .orderBy("from", "desc");
  const experience = collectionData(experienceCollection, "id").pipe(
    startWith([])
  );

  const educationCollection = db
    .collection("education")
    .orderBy("from", "desc");
  const education = collectionData(educationCollection, "id").pipe(
    startWith([])
  );

  function getDateFromTimestamp(timestamp) {
    if (timestamp >= 315506361600.0) {
      return "Present";
    }

    return timestamp.toDate().toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
    });
  }
</script>

<svelte:head>
  <title>CV - Saeed Ahmed</title>
</svelte:head>

<div>
  <h1>CV</h1>
  <hr />
  <h2>Skills</h2>
  <ul>
    {#each $skills as skill}
      <li>{skill.title}</li>
    {/each}
  </ul>
  <hr />
  <h2>Experience</h2>
  {#each $experience as job}
    <h3>{job.company}</h3>
    <h4>
      {job.role},
      <em
        >{getDateFromTimestamp(job.from)}
        -
        {getDateFromTimestamp(job.to)}</em
      >
    </h4>
    <h4><span>{job.location}</span></h4>
    <p>
      {@html job.description}
    </p>
  {/each}
  <hr />
  <h2>Education</h2>
  {#each $education as school}
    <h3>{school.institution}</h3>
    <h4>
      {school.course},
      <em
        >{getDateFromTimestamp(school.from)}
        -
        {getDateFromTimestamp(school.to)}</em
      >
    </h4>
    <h4><span>Grade: </span>{school.result}</h4>
    <p>
      {@html school.description}
    </p>
  {/each}
</div>

<style>
  h2,
  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  h4 {
    margin-top: 10px;
    margin-bottom: 0px;
  }
  span {
    color: rgba(90, 50, 0, 0.6);
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    padding: 10px 20px;
    margin: 5px 10px;
    background-color: burlywood;
    border: 1px solid rgba(90, 50, 0, 0.7);
  }
</style>
