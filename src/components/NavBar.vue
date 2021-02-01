<template>
    <nav>
        <div class="nav-container">
            <div>
                <g-link to="/">Home</g-link>
            </div>
            <div v-for="(link, index) of links" :key="index">
                <g-link :to="'/' + safeLink(link)">{{link}}</g-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            links: [
               "Solutions",
               "Resume",
               "About Me",
               "Contact"
            ]
        }
    },
    methods: {
        safeLink(link){
            let safe = link;
            while(safe.includes(" ")){
                safe = safe.replace(" ", "-");
            }
            return safe;
        }
    }
}
</script>


<style>
    nav a {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        font-family: Maven Pro;
        font-weight: 400;
    }
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .nav-container {
        min-height: 30vh;
        /* max-height: 100vh; */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
</style>