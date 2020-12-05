<script>
    import { firebaseSignIn } from '../../firebase';
    $: email = '';
    $: password = '';
    $: emailError = null;
    $: passError = null;
    $: loginError = null;
    $: handleLogin = () => {
        if (validateEmail()) {
            if (validatePassword()) {
                loginError = null;
                emailError = null;
                passError = null;
                firebaseSignIn(email, password).then((res) => {
                    if (typeof res === 'string') {
                        loginError = res;
                    }
                });
            }
        }
    };
    const validateEmail = () => {
        loginError = null;
        emailError = null;
        let pass = true;
        if (email === '') {
            pass = false;
            emailError = 'Please enter an email';
        } else {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!email.match(pattern)) {
                pass = false;
                emailError = 'Please enter a valid email';
            }
        }
        return pass;
    };
    const validatePassword = () => {
        loginError = null;
        passError = null;
        let pass = true;
        if (password === '') {
            pass = false;
            passError = 'Please enter a password';
        }
        return pass;
    };
</script>

<style>
</style>

<h1 class=" text-2xl italic font-bold text-center mb-4">User Login</h1>
<form class="grid grid-col-1 gap-2" on:submit|preventDefault={handleLogin}>
    <label class="font-bold" for="email">Email:</label>
    <input
        class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
        type="text"
        name="email"
        bind:value={email}
        placeholder="please enter your email"
        on:change={validateEmail} />

    {#if emailError}<span class="text-red-300 italic mx-auto">{emailError}</span>{/if}
    <label class="font-bold" for="password">Password:</label>
    <input
        class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2 mb-2"
        type="password"
        name="password"
        bind:value={password}
        placeholder="please enter your password"
        on:change={validatePassword} />

    {#if passError}<span class="text-red-300 italic mx-auto">{passError}</span>{/if}
    <button class="bg-gray-400 rounded-full text-white w-1/2 p-2 mx-auto">SUBMIT</button>
    {#if loginError}<span class="text-red-300 italic text-center mx-auto">Login Error: {loginError}</span>{/if}
</form>
