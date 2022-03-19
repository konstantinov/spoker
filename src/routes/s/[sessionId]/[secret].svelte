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
</script>


<svelte:head>
    <title>{session.name || 'New'} estimate session</title>
</svelte:head>
<section class="banner">
    <div class="content">
        <h4>{session.name || 'New'} estimate session</h4>

    </div>
</section>