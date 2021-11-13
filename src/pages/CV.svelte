<script lang="ts">
  import type  * as firebase from "firebase/app/";
  import { db } from "../../firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import type { Observable } from "rxjs";

  import { WEBSITE_NAME } from "../constants/strings";

  type Job = {
    role: string;
    description: string;
    company: string;
    location: string;
    from: firebase.default.firestore.Timestamp;
    to: firebase.default.firestore.Timestamp;
  }

  type School = {
    course: string;
    description: string;
    institution: string;
    from: firebase.default.firestore.Timestamp;
    to: firebase.default.firestore.Timestamp;
    result: string;
  }

  const experienceCollection = db
    .collection("experience")
    .orderBy("from", "desc");
  const experience = collectionData(experienceCollection, "id").pipe(
    startWith([])
  ) as Observable<Job[]>;

  const educationCollection = db
    .collection("education")
    .orderBy("from", "desc");
  const education = collectionData(educationCollection, "id").pipe(
    startWith([])
  ) as Observable<School[]>;

  function getDateFromTimestamp(timestamp: firebase.default.firestore.Timestamp) {
    if (timestamp === null) {
      return "Present";
    }

    return timestamp.toDate().toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
    });
  }
</script>

<svelte:head>
  <title>CV - {WEBSITE_NAME}</title>
</svelte:head>

<div>
  <h1>CV</h1>
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
</style>
