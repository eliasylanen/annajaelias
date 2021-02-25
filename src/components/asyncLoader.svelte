<script lang="ts">
import type { AxiosResponse } from "axios";

  import LoadingIcon from "../components/loadingIcon.svelte";

  export let response: Promise<AxiosResponse>;
  export let successMessage = '';
  export let notFoundMessage = '';
  export let failureMessage = '';
</script>

<div class="result">
  {#if !!response}
    <p>
      {#await response}
        <LoadingIcon />
      {:then response}
        {#if response.status === 200}
          {@html successMessage}
        {:else if response.status === 204}
          {@html notFoundMessage}
        {/if}
      {:catch}
        {@html failureMessage}
      {/await}
    </p>
  {/if}
</div>
