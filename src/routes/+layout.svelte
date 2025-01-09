<script>
    import "./../app.css"
    import Nav from "$lib/nav.svelte"
    import Footer from "$lib/footer.svelte";
    import {onMount} from "svelte"
    onMount(() => {
    const main = document.getElementById("main");
    const blob = document.getElementById("blob")

    window.addEventListener("mousemove", (event) => {
      blob?.animate({
        top :`${event.pageY - 150}px`,
        left : `${event.pageX - 150}px`,
      },{duration:700, fill:"forwards"})


    });
  });
</script>
<Nav></Nav>
<slot/>
<div
id="blob"
        class="absolute z-1 left-0 blur-[150px] size-80 rounded-full"
>

</div>
<Footer></Footer>
<style>
      @keyframes blob{
    0%{
      transform: rotate(0deg);
    }
    50%{
      transform: scaleX(1.3);
    }
    100%{
      transform: rotate(360deg);
      
    }
  }
  #blob{
    animation: blob 20s infinite;
    pointer-events: none;
    background:linear-gradient(45deg,rgba(0, 0, 255, 0.35),rgba(255, 0, 255, 0.35));
  }
</style>