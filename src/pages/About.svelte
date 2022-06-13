<script lang="ts">
  import { WEBSITE_NAME } from "../constants/strings";
  
  const doggoImageSrc = "../images/doggos.webp"; 
</script>

<svelte:head>
  <title>About - {WEBSITE_NAME}</title>
</svelte:head>

<main>
  <h1>About</h1>
  <hr>
    <p>I have always prided myself on my attention to detail and order and the field of engineering appealed to me on the basis of accuracy and robustness being central to success. Since graduating university I have progressed at a rate well within my personal development and base my approach to any role on ownership, delivery and above all, knowledge sharing.<br><br>
  
  Outside of work I enjoy partaking in many hobbies such as LEGO, video games, painting (though I can’t say I’m very good!), reading, and going for walks with the two wonderful furballs below!<br><br>
  
  <img src={doggoImageSrc} alt="Hannie and Marlow!"/></p>
</main>

<style lang="scss">
  @import '../styles/colours.scss';

  img {
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 4px solid $background-secondary;
  }
</style>
