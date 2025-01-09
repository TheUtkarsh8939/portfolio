<script>
    import * as Card from "$lib/components/ui/card"
//   import { root } from "postcss";
</script>
<main>
    <div class="flex flex-col-reverse items-center justify-start">
        <div class="bd z-10 p-[1px]">
            <Card.Root class="h-200-custom z-10">
                <Card.Header>
                    Email Me at
                </Card.Header>
                <Card.Content >
                    
                        <strong>Personal: </strong> <a href="mailto:utkarshchandel2012@gmail.com"> utkarshchandel2012@gmail.com</a> <br/>

                    
                </Card.Content>
            </Card.Root>
        </div>
        <div class="blob absolute h-32 w-80 bg-white">
    </div>
        
    </div>
    <!-- <Card.Root></Card.Root> -->

</main>
<style>
    .blob{
        background:linear-gradient(120deg, blue, #cf00ff);
        filter: blur(50px);
        top:55%;
    }
    .bd{
        background: linear-gradient(120deg,blue,#cf00ff);
        border-radius: 12px;
        height: auto;
    }
    @media only screen and (max-width:200px){
        main{
            flex-direction: column;
        }
    }
    main{
        height:calc(100vh - 100px);
        background-color: black;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    
</style>