<script context="module">
    import API from "../../../api";

    export async function preload({
        params: {
            sessionId,
            secret,
        }
    }) {
        const session = await API.getSession({
            sessionId,
            secret,
            fetch: this.fetch
        });

        if (!(session && session._id))
            return this.error(404, "not found");

        return ({
            session
        });

    }
</script>

<script>
    export let session;
    import {
        onMount
    } from 'svelte';

    let url;
    let urlInput;

    onMount(() => {
        url = `${window.location.origin}/e/${session._id["$oid"]}`;
    });

    const onFocus = () => {
        urlInput.select();
        document.execCommand('copy');
    }
</script>


<svelte:head>
    <title>{session.name || 'New'} estimate session</title>
</svelte:head>
<section class="banner">
    <div class="content">
        <h4>{session.name || 'New'} estimate session</h4>

        <p>1. Share this link to other team members. <span class="error">Don&apos;t copy link from the address bar!</span>
            <input type="text" value={url} readonly class="black" bind:this={urlInput} on:focus={onFocus} />
        </p>
        <p>2. Manage session activity.</p>
    </div>
</section>