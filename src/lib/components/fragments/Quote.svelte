<blockquote class="QUOTE"><slot /></blockquote>

<style>
  .QUOTE {
    position: relative;
    font-size: var(--quote-size, var(--font-size-xl));
  }
  .QUOTE::before {
    content: "«";
    transform: translateX(-105%);
    position: absolute;
  }
  .QUOTE::after {
    content: "»";
  }
</style>
