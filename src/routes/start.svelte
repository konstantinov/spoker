<script>
  import ButtonSwitch from "../components/ButtonSwitch.svelte";

  import { difference } from "lodash/fp";

  const cards = {
    Scrum: ["0", "1/2", "1", "3", "5", "8", "13", "20", "40", "100"],
    Fibonacci: ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89"],
    "Shirt sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    Etc: ["Coffee", "?"],
  };
  let options = ["Scrum", "Fibonacci", "Shirt sizes", "Etc"];
  let selected = ["Scrum", "Etc"];

  let selectedCards = selected.flatMap((type) => cards[type]);

  const handleChangeTypes = ({ detail: newTypes }) => {
    const newSelectedCards = newTypes.flatMap((type) => cards[type]);
    selectedCards = [...difference(selectedCards, newSelectedCards)];
    selected = newTypes;
  };
</script>

<section class="banner">
  <div class="content">
    <h4>Start planning session</h4>

    <p>1. Select what cards do you prefer to use</p>
    <div class="cards-select">
      <div class="selected-cards-types">
        {#each selected as type}
          <ButtonSwitch
            style="separate"
            options={cards[type]}
            multiple
            selected={selectedCards}
            on:change={({ detail: newSelectedCards }) => (selectedCards = newSelectedCards)}
          />
        {/each}
      </div>
      <div class="card-types">
        <ButtonSwitch style="vertical" {options} {selected} multiple on:change={handleChangeTypes} />
      </div>
    </div>
  </div>
</section>

<style>
  .cards-select {
    display: flex;
    flex-flow: row nowrap;
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
