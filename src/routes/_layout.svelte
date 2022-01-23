<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Inter:wght@900&family=Rubik:wght@700&display=swap"
  rel="stylesheet"
/>
<Nav {segment} />

<main>
  <slot />
</main>

<footer>
  <div class="columns">
    <div class="small">
      <h4>Customer support</h4>
      <p>Feel free to contact about any questions</p>
      <p><a href="about" class="button black">Send message<i>&rarr;</i></a></p>
    </div>
    <div class="large">
      <h4>Love poker project?</h4>
      <a href="https://www.buymeacoffee.com//konstantinov" target="_blank"
        ><img src="/images/buy-me-a-coffee.svg" alt="Buy me a coffee" /></a
      >
    </div>
  </div>
  <div class="copyright-container">
    <a class="copyright" href="https://github.com/konstantinov" target="_blank">Dmitry Konstantinov</a> &copy; 2022
  </div>
</footer>

<style>
  footer {
    background: #000;
    padding: 20px 10%;
  }
  .copyright {
    color: rgb(255, 221, 0);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition-duration: 1s;
    transition-property: color, border-color;
    padding: 2px 0;
  }

  .copyright:hover {
    border-color: rgb(255, 221, 0);
  }

  .copyright:active {
    color: red;
    border-color: red;
    transition-duration: 0;
  }
  .columns {
    display: flex;
    flex-flow: row nowrap;
    font-size: 18px;
  }

  .small {
    flex-basis: 350px;
    flex-grow: 0;
    padding-right: 20px;
  }
  .large {
    flex-grow: 1;
    padding-left: 29px;
  }
  .copyright-container {
    padding-top: 40px;
  }
  @media (max-width: 1000px) {
    footer {
      padding: 20px 10px;
    }
    .small {
      flex-basis: 290px;
      padding-right: 5px;
    }
    .large {
      padding-left: 5px;
    }
  }
  @media (max-width: 600px) {
    .columns {
      flex-flow: column;
    }
    .large {
      order: -1;
    }
    .small {
      flex-basis: unset;
      margin-top: 30px;
    }
  }
  .button {
    min-width: 0;
    margin: 10px 0;
    display: inline-flex;
    padding: 0 20px;
  }

  footer {
    font: 700 14px/20px "Anonymous Pro", monospace;
    color: #fff;
  }
</style>
