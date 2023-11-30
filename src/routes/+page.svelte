<script>
  import { userData, auth } from "$lib/firebase";
  import { signOut } from "firebase/auth";

  async function signOutSSR() {
    const res = await fetch("/api/signin", { method: "DELETE" });
    await signOut(auth);
  }
  </script>

  <svelte:head>
    <title>LinkUp - share your stuff</title>
    <meta name="description" content="Demo project for the Full SvelteKit Course by Fireship" />
  </svelte:head>
  
  <main class="flex w-full min-h-screen">
  
    <div class="hero bg-base-200">
      <div class="hero-content text-center">
        <div class="w-full">
          <h1 class="text-7xl font-bold">Welcome to <span class="text-purple-600">LinkUp</span>!</h1>
          <p class="py-16 text-2xl">Set up one place for all your important links.</p>
          {#if $userData?.username}
          <a href="/{$userData.username}/edit" class="btn btn-primary mx-1">Edit Profile</a>
          <button on:click={signOutSSR} class="btn btn-warning mx-1">
            Sign Out
          </button>
          {:else}
          <a href="/login" class="btn btn-primary">Get Started</a>
          <a href="/sid_ok" class="btn btn-secondary">Example Profile</a>
          {/if}
          <p class="pt-36 text-xl">Powered by <span class="block m-3"></span> <img class="inline w-6 m-1" src="/svelte.png" alt="svelte"/>  Sveltekit and  <img class="inline w-6 m-1" src="/firebase.png" alt="firebase" />  Firebase</p>
        </div>
      </div>
    </div>
    
  </main>