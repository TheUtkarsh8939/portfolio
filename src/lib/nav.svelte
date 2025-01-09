<div class="flex">
    <header class="rainbow">
        <nav class="header">
            <a href="/"><img src="./logo.jpg" alt="" class="logo"></a>
            <ul class="links">
                <li class="link"><a href="/about">About </a></li>
                <li class="link"><a href="/contact">Contact</a></li>
                <li class="link">Blogs</li>
                <li class="link">Newsletter</li>
            </ul>
        </nav>
    </header>
    <div class="absolute lights bg-white z-[18]"></div>
</div>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    *{
        --gradient: linear-gradient(90deg,blue,#df00ff);

    }
    .lights{
        background: var(--gradient);
        height: 112px;
        width: 100vw;
        filter: blur(40px);
    }
    .rainbow{
        position: sticky;
        z-index: 20;
        height: 101px;
        width:100vw;
        background-image: var(--gradient);
    }
    .header{
        height: 100px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
            height: 66px;
            width: 66px;
            border-radius: 999999px;
        }
        ul{
            display: flex;
            gap:10px;
            margin-right: 20px;
            font-family: 'Poppins',sans-serif;
        }
    }
</style>