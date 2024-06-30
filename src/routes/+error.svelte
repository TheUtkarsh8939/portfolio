<main>
    <div class="flex flex-col">
        <img src="/logo.jpg" alt="" class="img">
        <div class="flex gap-2 absolute eye-cont">
            <div class="eyes size-3 flex items-end" style="background-color:white; height:17px; width:17px; border-radius:50px;">
                <div class="eyeballs bg-black"></div>
            </div>
            <div class="eyes size-3 flex items-end" style="background-color:white; height:17px; width:17px; border-radius:50px;">
            
                <div class="eyeballs bg-black"></div>
            </div>
        </div>
        Whoops, You have ventured out of the map of this site!!!
    </div>
</main>
<style lang="scss">
    .eye-cont{
        margin-bottom:100px;
    }
    .items-end{
        align-items: flex-end;
    }
    .eyes{
        flex-direction: column;
    }
    .img{
        height: 200px;
        width: 200px;
        border-radius: 9999999px;

    }
    main{
        height: calc(100vh - 100px);
        background-color: black;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        div{
            align-items: center;
            justify-content: center;
            font-family: cursive;
            font-size: 20px;

        }
    }
    .bg-black{
        background-color:black;
        height: 9px;
        width:9px;
        border-radius:10px;
    }
</style>