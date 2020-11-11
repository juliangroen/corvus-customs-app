<script>
</script>

<style>
</style>

<h1 class=" text-2xl italic font-bold text-center mb-8">User Login</h1>
<form class="grid grid-col-1 gap-2" on:submit|preventDefault>
    <label class="font-bold" for="username">Username:</label>
    <input
        class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
        type="text"
        name="username"
        placeholder="please enter your username" />
    <span class="text-red-300 italic mx-auto">Validation Message</span>
    <label class="font-bold" for="password">Password:</label>
    <input
        class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
        type="password"
        name="password"
        placeholder="please enter your password" />
    <span class="text-red-300 italic mx-auto">Validation Message</span>
    <button class="bg-gray-600 rounded-full text-white w-1/2 p-2 mx-auto">SUBMIT</button>
</form>
