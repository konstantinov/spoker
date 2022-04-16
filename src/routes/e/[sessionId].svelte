<script context="module">
    import API from "../../api";

    export async function preload({
        params: {
            sessionId,
        }
    }) {
        const session = await API.getSession({
            sessionId,
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

    let name;

    const introduce = async() => {
        const credentials = await API.introduce({
            name,
            sessionId: session._id["$oid"]
        })
    }
</script>


<svelte:head>
    <title>{session.name || 'New'} estimate session</title>
</svelte:head>
<section class="banner">
    <div class="content">
        <h4>{session.name || 'New'} estimate session</h4>

        <p>1. Please, introduce yourself. Enter your name below.
            <input type="text" bind:value={name} class="black" />
        </p>
        <div class="buttons"><a class="button yellow" href="./" on:click|preventDefault={introduce}>Start now<i>&rarr;</i></a>
        </div>
</section>

<style>
    .buttons {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
    }
    
    .buttons>.button {
        flex-basis: 50%;
        min-width: 200px;
    }
</style>