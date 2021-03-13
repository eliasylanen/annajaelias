<script lang=ts>
  export let type = 'text';
  export let placeholder = '';
  export let maxlength;
  export let pattern = '';
  export let value = '';
  export let disabled = false;

  const handleInputType = e => {
    e.target.type = type;
  };
</script>

<style lang="scss">
  @import '../styles/mixins';

  .inputGroup {
    position: relative;
    width: 15rem;
    margin: 1.5rem auto;
    text-align: center;

    input:not([type="submit"]) {
      width: 98%;
      border: none;
      outline: none;
      padding: .5rem 0;
      border-bottom: 1px solid lightgray;

      &:focus {
        + .line {
          width: 100%;
        }
      }
    }

    .line {
      height: 3px;
      width: 0px;
      background-color: $red;
      position: absolute;
      left: 0;
      bottom: 0;
      transition: width .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    input[type="submit"] {
      max-width: 10rem;
      border: 2px solid white;
      outline: none;
      border-radius: 7px;
      background-color: white;
      padding: .5rem 1.5rem;
      font-size: 1.1rem;
      transition: border .5s;
      border-left: 2px solid lightgray;
      border-right: 2px solid lightgray;

      &:not([disabled]) {
        cursor: pointer;
        @include redFrame;
      }

      &:not([disabled]):hover, &:not([disabled]):focus {
        border: 2px solid #D73838;
      }
    }
  }
</style>

<div class="inputGroup">
  {#if type === 'submit'}
    <input {type} {value} {disabled} on:click />
  {:else}
    <input {placeholder} {maxlength} {pattern} bind:value={value} on:input={handleInputType} on:click />
    <div class="line"></div>
  {/if}
</div>
