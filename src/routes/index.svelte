<script>
</script>

<svelte:head>
  <title>Planning poker: agile, simple and free</title>
</svelte:head>

<section class="banner">
  <div class="content">
    <h1>Start planning session</h1>
    <h2>immediately<br /> and totally free!</h2>
    <div class="flow">
      <div class="step">Start</div>
      <div class="arrow"><i>&rarr;</i></div>
      <div class="step">Share the link</div>
      <div class="arrow"><i>&rarr;</i></div>
      <div class="step">Plan!</div>
    </div>
    <div class="buttons">
      <a class="button yellow" href="start">Start now<i>&rarr;</i></a>
      <a class="button black" href="#">How it works<i>&rarr;</i></a>
    </div>
  </div>
</section>
<section class="info">
  <h3>How it works</h3>
</section>

<style>
  .content {
    max-width: 1150px;
    width: 100%;
  }

  h1 {
    color: rgb(255, 221, 0);
    font: 700 36px/50px "Anonymous Pro", Sans-serif;
    text-align: center;
    margin: 20px 0;
  }
  h2 {
    color: #fff;
    font: 900 96px/100px Inter, Sans-serif;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    margin: 50px 0;
  }
  .flow {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }
  .step {
    text-transform: uppercase;
    color: #fff;
    font: 900 24px/30px Inter, Sans-serif;
  }
  .arrow {
    width: 50px;
    height: 50px;
    font: 900 40px/30px Inter, Sans-serif;
    color: #ffffff3b;
    border-radius: 50%;
    border: 2px solid #ffffff3b;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .arrow i {
    font-style: normal;
    margin-top: -12px;
  }
  .step:last-child {
    color: rgb(255, 221, 0);
  }

  .buttons {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }

  .button {
    min-width: 235px;
	margin: 0 20px;
  }

  section.banner {
    padding: 112px 0;
  }
  @media (max-width: 1200px) {
    section.banner {
      padding: 80px 0;
    }
    h2 {
      font-size: 64px;
      line-height: 70px;
      margin: 40px 0;
    }

    h1 {
      font-size: 30px;
      line-height: 45px;
      margin: 10px 0;
    }
  }

  @media (max-width: 1000px) {
    section.banner {
      padding: 50px 0;
    }
    h2 {
      font-size: 45px;
      line-height: 60px;
      margin: 15px 0;
    }

    h1 {
      font-size: 30px;
      line-height: 45px;
      margin: 5px 0;
    }
    .flow {
      flex-flow: column;
    }
    .arrow {
      transform: rotate(90deg);
      margin: 20px 0;
    }
  }
  @media (max-width: 600px) {
    .content {
      background: transparent;
    }
    .button {
      min-width: 185px;
    }
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 28px;
      line-height: 35px;
    }
    h1 {
      font-size: 20px;
      line-height: 25px;
    }

    .buttons {
      flex-flow: column;
    }

    .button {
      margin: 10px 0;
    }
    .arrow {
      width: 20px;
      height: 20px;
      font-size: 20px;
      margin: 10px 0;
    }
    .arrow i {
      margin-top: -8px;
    }

    .step {
      font-size: 16px;
      line-height: 18px;
    }

    .buttons {
      margin-top: 15px;
    }
  }
</style>
