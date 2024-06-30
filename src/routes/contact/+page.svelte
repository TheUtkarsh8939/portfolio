<script>
    import * as Card from "$lib/components/ui/card"
//   import { root } from "postcss";
</script>
<main>
    <Card.Root class="h-200-custom">
        <Card.Header>
            Email Me at
        </Card.Header>
        <Card.Content >
            
                <strong>Personal: </strong> <a href="mailto:utkarshchandel2012@gmail.com"> utkarshchandel2012@gmail.com</a> <br/>
                <strong>ASUPG: </strong><a href="mailto:asuprogrammingroup@gmail.com"> asuprogramingroup@gmail.com</a>

            
        </Card.Content>
    </Card.Root>
    <!-- <Card.Root></Card.Root> -->

</main>
<style>
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