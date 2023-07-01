<script>
  import { page } from "$app/stores";
</script>

<div class="error">
  <h2>Ooops!</h2>
  <p>{$page.error.message}</p>
  <a href="/guides">view all guides...</a>
</div>

<style>
  .error {
    text-align: center;
    margin-bottom: 60px;
  }
</style>
