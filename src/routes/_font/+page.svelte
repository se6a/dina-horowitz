<div class="outer">
  <div class="inner woff optimized">
    <p>WOFF (opt)</p>
    <p>Die Fallsupervision ermöglicht Qualitätssicherung.</p>
  </div>

  <div class="inner woff">
    <p>WOFF</p>
    <p>Die Fallsupervision ermöglicht Qualitätssicherung.</p>
  </div>

  <div class="inner otf">
    <p>OTF</p>
    <p>Die Fallsupervision ermöglicht Qualitätssicherung.</p>
  </div>

  <div class="inner otf optimized">
    <p>OTF (opt)</p>
    <p>Die Fallsupervision ermöglicht Qualitätssicherung.</p>
  </div>
</div>

<style>
  .outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 26px;
  }

  .inner {
    display: flex;
  }

  p {
    max-width: 80ch;
  }

  p:first-child {
    width: 200px;
    font-weight: 500;
  }

  .otf {
    font-family: "MaisonNeue-TEST";
  }

  .woff {
    font-family: "MaisonNeue";
  }

  .optimized {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    /* text-shadow: 0 0 1px rgba(0, 0, 0, 0.3); */
  }
</style>
