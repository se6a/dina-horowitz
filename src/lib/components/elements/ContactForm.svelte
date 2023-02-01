<script>
    let name = "";
    let email = "";
    let phone = "";
    let message = "";

    let doShowError = false;
    let doShowSuccess = false;
    let isSending = false;

    async function trySubmit(e) {
        e.preventDefault();

        const fd = new FormData();
        fd.append("name", name);
        fd.append("email", email);
        fd.append("phone", phone);
        fd.append("message", message);

        isSending = true;

        const res = await fetch("/api/mail", {
            method: "POST",
            body: fd
        });

        isSending = false;

        if (res.ok) {
            doShowSuccess = true;
            name = "";
            email = "";
            phone = "";
            message = "";
        } else doShowError = true;
    }
</script>

<article class="CONTACT-FORM box">
    {#if isSending}
        <div class="box message isSending">
            <p>Senden...</p>
        </div>
    {:else if doShowError}
        <div
            class="box message doShowError"
            on:click={() => (doShowError = false)}
            on:keyup={() => (doShowError = false)}
        >
            <span>Etwas ging schief.</span>
            <span>Erneut versuchen?</span>
        </div>
    {:else if doShowSuccess}
        <div
            class="box message doShowSuccess"
            on:click={() => (doShowSuccess = false)}
            on:keyup={() => (doShowSuccess = false)}
        >
            <span>Danke für Ihre Nachricht.</span>
            <span>Ich melde mich bald bei Ihnen.</span>
        </div>
    {/if}

    <form on:submit={trySubmit}>
        <div class="field">
            <input type="text" placeholder=" " bind:value={name} required />
            <label for="">Name</label>
        </div>

        <div class="field">
            <input type="text" placeholder=" " bind:value={email} required />
            <label for="">E-Mail</label>
        </div>

        <div class="field">
            <input type="phone" placeholder=" " bind:value={phone} />
            <label for="">Telefon</label>
        </div>

        <div class="field text">
            <textarea spellcheck="false" placeholder=" " required bind:value={message} />
            <label for="">Mitteilung</label>
        </div>

        <div class="field" />

        <button class="button forSubmit" type="submit">Senden</button>
    </form>
</article>

<style>
    .CONTACT-FORM {
        position: relative;
        isolation: isolate;
    }

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

    .field:last-child {
        border-bottom: none;
    }

    /* Messages
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    .message {
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding-top: var(--space-l);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: var(--zPos-front);
        font-size: var(--font-size-l);
    }

    .doShowError {
        color: var(--red);
    }
</style>
