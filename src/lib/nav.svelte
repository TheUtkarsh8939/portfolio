<header class="rainbow">
    <nav class="header">
        <a href="/"><img src="./logo.jpg" alt="" class="logo"></a>
        <ul class="links">
            <li class="link"><a href="/about">About </a></li>
            <li class="link">Contact</li>
            <li class="link">Blogs</li>
            <li class="link">Newsletter</li>
        </ul>
    </nav>
</header>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    .rainbow{
        --gradient: linear-gradient(90deg,red,orange,yellow,lime,green,aqua,blue,purple,violet);
        position: sticky;
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