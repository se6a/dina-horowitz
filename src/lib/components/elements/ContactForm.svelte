<article class="CONTACT-FORM box">
  <form action="">
    <div class="field">
      <input type="text" placeholder=" " />
      <label for="">Name</label>
    </div>

    <div class="field">
      <input type="text" placeholder=" " />
      <label for="">E-Mail</label>
    </div>

    <div class="field">
      <input type="text" placeholder=" " />
      <label for="">Telefon</label>
    </div>

    <div class="field text">
      <textarea spellcheck="false" placeholder="jj" />
      <label for="">Mitteilung</label>
    </div>
  </form>
</article>

<style>
  .field {
    display: flex;
    align-items: center;
    border-top: 1px solid black;
    height: 7rem;
    position: relative;
  }

  .field * {
    font-size: var(--font-size-m);
    font-family: inherit;
  }

  .field:last-child {
    border-bottom: 1px solid black;
  }

  input {
    border: 0;
    height: 100%;
    width: 100%;
    padding-top: 2rem;
  }

  label {
    position: absolute;
    pointer-events: none;
    margin: auto;
    transform-origin: left center;
    transition: transform var(--duration-middle), opacity var(--duration-middle);
  }

  :placeholder-shown + label {
    transform: scale(1);
    opacity: 1;
  }

  ::placeholder {
    opacity: 0;
  }

  textarea + label,
  input + label,
  textarea:focus + label,
  input:focus + label {
    transform: scale(0.5) translateY(-4rem);
    opacity: 0.8;
  }

  .field.text {
    align-items: flex-start;
    height: auto;
  }

  .field.text label {
    top: 1.9rem;
  }

  textarea {
    padding-top: 2.5rem;
    border: none;
    width: 100%;
    min-height: 20rem;
    resize: vertical;
  }
</style>
