<script lang="ts">
    import {onMount} from "svelte"
    export let name: string
    export let status: string | number
    export let logoUrl
    let background = status==2? "linear-gradient(90deg,aqua,lime)": status==1 ? "linear-gradient(90deg,orange,yellow,yellow)": "linear-gradient(90deg,red,orange)"
    let card: HTMLElement
    onMount(() => {
        card.style
        console.log(background)
    })
</script>
<div class="border" style="background-image:{background}" bind:this={card}>
    <div class="card" >
        <div class="logo">
            <img src={logoUrl} alt={name} class="h-10 ">
        </div>
        {name}
    </div>
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+ES+Deco:wght@100..400&display=swap');

    .border{
        padding:2px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;
        width: 270px;
        border-radius: 20px;
        
    }
    img{
        font-size: 10px;
        font-family: sans-serif;
    }
    .card{
        height: 100%;
        width: 100%;
        border-radius: 20px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: black;
        font-family: "Playwrite ES Deco", cursive;
        font-size: 25px;
    }
</style>