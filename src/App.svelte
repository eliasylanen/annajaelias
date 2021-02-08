<script lang="ts">
  import { Router, Route, navigate } from "svelte-routing";
  import Login from "./pages/Login.svelte";
  import Main from "./pages/Main.svelte";

  export const url = '';

</script>

<Router {url}>
  <Route path="login" component="{Login}" />
  <Route path="/"><Main /></Route>
</Router>

