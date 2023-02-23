import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/x-icon" href="./img/ddd.ico"/>
        <title>D.jango</title>
        <link rel="stylesheet" href="./css/index.css"/>
        
      </Head>
      <body>
      <div class="men">
          <input type="checkbox" id="menu-toggle"/>
            <label id="trigger" for="menu-toggle"></label>
            <label id="burger" for="menu-toggle"></label>
            <ul id="menu">
                <li><a href="#">STUDIO</a></li>
                <li><a href="https://github.com/Wet-Django" target="_blank">GITHUB</a></li>
                <li><a href="https://discord.com/users/DJANGO†#4565" target="_blank">DISCORD</a></li>
                <li><a href="https://www.instagram.com/horny_django/" target="_blank">INSTAGRAM</a></li>
            </ul>
    </div>
    <div id="galaxy">
        <div class="bg"></div>
        <div class="stars-back"></div>
        <div class="stars-middle"></div>
        <div class="stars-front"></div>
        <div class="bg center"></div>
    </div>
    <div class="top">
        <h2 style="color: white;font-weight: bolder;letter-spacing: 3px;">DJANGO</h2>
        <div class="nav">
             <ul>
                <li><a href="#">STUDIO</a></li>
                <li><a class="git" href="https://github.com/Wet-Django"target="_blank">GITHUB</a></li>
                <li><a class="" href="https://discord.com/users/DJANGO†#4565" target="_blank">DISCORD</a></li>
                <li><a class="dis" href="https://www.instagram.com/horny_django/" target="_blank">INSTAGRAM</a></li>
            </ul>
        </div>
    </div>
    <div class="mid go">
        <form action="">
            <div class="all">
                    <div class="intro-message">
                        <img src="./img/684058_JY7OnqEA.png" alt=""/>
                        <h1 style="color:white">OUSSAMA <span style="color:#FF6363">/</span> KAOUKAB</h1>
                          <h3 id="typer"></h3>  
                          <hr class="intro-divider"/>
                    </div>
                    <div class="content1">
                        <h1>ABOUT ME</h1>
                        <p>Hi, I'm Oussama Kaoukab! I'm a Web Designer & Front-end Developer focused on creating clean, <br/> responsive web designs!</p>
                    </div>
                    <div class="content1">
                        <h1>MY SKILLS</h1>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>Javascript</li>
                            <li>Design Skills</li>
                            <li>Design Sense</li>
                            <li>Web Architecture</li>
                        </ul>
                    </div>
            </div>
        </form>
    </div>
    <div class="bot">
        <p style="font-size: x-small; font-weight: bold; color: #b5b5b5;">Powered by <strong style="color: #ffffff;font-weight: bolder; font-size: 11px;margin-left: 1px;">CuldaStudios.</strong></p>
    </div>  
      {/* animation typing. */}
      <script src="./js/anime.js"></script>
  </body>
      

    </>
  );
}
