<script>
    import ButtonSwitch from "../components/ButtonSwitch.svelte";
    import API from "../api";
    import {
        goto
    } from '@sapper/app';

    import * as Yup from 'yup';
    import {
        difference,
        uniq
    } from "lodash/fp";

    let error;

    const schema = Yup.object().shape({
        cards: Yup.array().min(2, 'Select at least 2 cards'),
        name: Yup.string(),
        timeout: Yup.array().of(Yup.string()).min(1).required(),
    })

    const cards = {
        Scrum: ["0", "1/2", "1", "3", "5", "8", "13", "20", "40", "100"],
        Fibonacci: ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89"],
        "Shirt sizes": ["XS", "S", "M", "L", "XL", "XXL"],
        Etc: ["Coffee", "?"],
    };

    let timeout = ['24 hours'];

    const getCards = (type) => cards[type];
    let name = '';

    let options = ["Scrum", "Fibonacci", "Shirt sizes", "Etc"];
    let selected = ["Scrum", "Etc"];

    let selectedCards = selected.flatMap(getCards);

    const handleChangeTypes = ({
        detail: newTypes
    }) => {
        const added = difference(newTypes, selected);
        const deletedTypes = difference(selected, newTypes);
        const deletedCards = difference(deletedTypes.flatMap(getCards), newTypes.flatMap(getCards));

        selectedCards = uniq([...added.flatMap(getCards), ...difference(selectedCards, deletedCards)]);
        selected = newTypes;

    };

    const hadleStartSession = async() => {
        try {
            const sessionData = await schema.validate({
                timeout,
                name,
                cards: selectedCards
            });

            error = undefined;

            const res = await API.createSession({
                name,
                cards: selectedCards,
                timeout: timeout[0]
            });

            goto(`s/${res._id["$oid"]}/${res.secret}`);
        } catch (e) {
            error = {
                [e.path]: e.errors[0]
            };
        }

    }
</script>

<svelte:head>
    <title>Start new scrum planning session</title>
</svelte:head>
<section class="banner">
    <div class="content">
        <h4>Start planning session</h4>

        <p>1. Select what cards do you prefer to use.{#if error?.cards}<span class="error">{error.cards}</span>{/if}
        </p>
        <div class="cards-select">
            <div class="selected-cards-types">
                {#each selected as type}
                <ButtonSwitch style="separate" options={cards[type]} multiple selected={selectedCards} on:change={({ detail: newSelectedCards })=> (selectedCards = newSelectedCards)} /> {/each}
            </div>
            <div class="card-types">
                <ButtonSwitch style="vertical s-horizontal" {options} {selected} multiple on:change={handleChangeTypes} />
            </div>
        </div>
        <p>2. Enter name of session. It's optional.</p>
        <input type="text" bind:value={name} class="black" />
        <p>3. Choose session availability time. You may change it any time during planning.</p>
        <ButtonSwitch bind:selected={timeout} options={[ '24 hours', '3 days', '1 week']} style="horizontal timeout-select" />
        <div class="start-row"><a class="button yellow" href="." on:click|preventDefault={hadleStartSession}>Start<i>&rarr;</i></a></div>
    </div>
</section>

<style>
    .error {
        padding: 4px;
        border: 1px solid red;
        color: red;
        border-radius: 4px;
    }
    
    .start-row {
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
    
    .start-row .button {
        padding: 0 20px;
    }
    
    .cards-select {
        display: flex;
        flex-flow: row nowrap;
    }
    
    @media (max-width: 600px) {
        .cards-select {
            margin-bottom: 10px;
        }
    }
    
    @media (max-width: 600px) {
        .cards-select {
            flex-flow: column;
        }
        .card-types {
            order: -1;
        }
    }
    
    .selected-cards-types {
        flex: 1;
        display: flex;
        padding-right: 20px;
        flex-flow: column;
    }
    
    .card-types {
        flex-basis: 25%;
        flex-grow: 0;
    }
</style>