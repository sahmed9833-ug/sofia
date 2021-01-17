<script>
  let textTwo;
  let textThree;
  let textFour;

  function firstClick() {
    textTwo.innerHTML =
      'Oops! Sorry I meant <a target="_blank" href="https://youtu.be/L_jWHffIx5E" onclick="secondClick()">here</a>!';
  }

  function secondClick() {
    textThree.innerHTML =
      'It\'s <a target="_blank" href="https://www.github.com/sahmed9833-ug/saeed">this one</a> I promise!';
  }

  function thirdClick() {
    textFour.innerHTML = "I hope it was worth it. 😅";
  }
</script>

<svelte:head>
  <title>Home - Saeed Ahmed</title>
</svelte:head>

<main>
  <h1>Welcome!</h1>
  <p on:click={firstClick}>
    This website serves as a place for me to dump CV, projects and whatever
    other nonsense I feel like putting out here on the internet. You can take a
    peek at the site's source code <a
      target="_blank"
      href="https://youtu.be/dQw4w9WgXcQ">here</a
    >!
  </p>
  <p bind:this={textTwo} on:click={secondClick} />
  <p bind:this={textThree} on:click={thirdClick} />
  <p bind:this={textFour} />
</main>

<style>
</style>
