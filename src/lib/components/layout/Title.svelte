<div class="SECTION-TITLE layout useFullwidthBg">
  <h1>Für Familien</h1>
  <p>Beratung und Case Management</p>

  <div class="space-4" />

  <nav class="pageNavigation anchors">
    <a class="anchor" href="#xyz">Problemstellung</a>
    <a class="anchor" href="#xyz">Herausforderung</a>
    <a class="anchor" href="#xyz">Konditionen</a>
  </nav>
</div>

<style>
  .SECTION-TITLE {
    --background: var(--green);
  }

  .SECTION-TITLE h1,
  .SECTION-TITLE p {
    font-weight: 400;
    font-size: 100px;
  }

  h1 {
    color: white;
  }

  .pageNavigation {
    font-size: 26px;
    display: flex;
    gap: var(--space-2);
    overflow-x: auto;
  }

  .pageNavigation > * {
    flex-shrink: 0;
  }

  .useFullwidthBg {
    position: relative;
  }

  .useFullwidthBg::after {
    content: "";
    display: block;
    background-color: var(--background, silver);
    width: 100vw;
    top: 0;
    bottom: 0;
    position: absolute;
    margin-left: 50%;
    left: -50vw;
    z-index: -1;
  }
</style>
