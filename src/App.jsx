import './App.css'
import Header from './componentes/Header'
import Section from './componentes/Section'
import ListItem from './componentes/ListItem'

const gameslistData = [

  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends" , 
    img: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg" , 
    alt: "Imagem do jogo League of Legends"
  },

  {
    url: "https://www.twitch.tv/directory/game/VALORANT" , 
    img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg" , 
    alt: "Imagem do jogo Valorant"
  },

  {
    url: "https://www.twitch.tv/directory/game/Minecraft" , 
    img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg" , 
    alt: "Imagem do jogo Minecraft"
  },

  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics" , 
    img: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg" , 
    alt: "Imagem do jogo TFT"
  },
  {
    url: "",
    img: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-144x192.jpg",
    alt: "Imagem do jogo GTA V"
  }
]

const stremersList = [
  {
    url: "",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/e5e89aba-723b-4ba1-852c-d8fba19b1da1-profile_image-70x70.png",
    alt: "foto do avatar do stremer",
  },

  {
    url: "",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/0fb3d2b5-0f68-4ffd-bbde-bb124d7ba04d-profile_image-70x70.png",
    alt: "foto do avatar do stremer",
  },

  {
    url: "",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/ec5ec8ec-94ec-4a6c-af54-e2ba0bb6edfc-profile_image-70x70.png",
    alt: "foto do avatar do stremer",
  },

  {
    url: "",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/df06c2dd-b3d4-4fb6-bdf8-66df31bd69b9-profile_image-70x70.png",
    alt: "foto do avatar do stremer",
  },

  {
    url: "",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/8293c341-9a4a-4052-98b4-049781ae2cc0-profile_image-70x70.png",
    alt: "foto do avatar do stremer",
  },
  
]


const socialredes = [
  {
    url: "https://www.youtube.com/",
    img: " src/assets/instagram.svg",
    alt: "img",
  },

  {
    url: "https://www.youtube.com/",
    img: " src/assets/twitter.svg",    alt: "img",
  },

  {
    url: "https://www.youtube.com/",
    img: " src/assets/twitch.svg",    alt: "img",
  },
  {
    url: "https://www.youtube.com/",
    img: " src/assets/yt.svg",    alt: "img",
  }
]

function App () {
  return (
    <div className='App'>
      <img src="/assets/instagram.svg" alt="" />
      < Header />
      <main>
        <Section
          title="Meus jogos" 
          subtitle="Games que mais curto jogar"
          classname = "games-list"

        >
      
          {
            gameslistData.map((item) => {
              return (
                <ListItem 
                  url={item.url}
                  img={item.img}
                  alt={item.alt}
                />
              )
          })

        }

        </Section>

        <Section 
          title="Canais e Stremes" 
          subtitle="Stremes que não perco por nada"
          classname = "channel-list"

        >

        {
          stremersList.map((item) => {
            return (
              <ListItem 
                url={item.url}
                img={item.img}
                alt={item.alt}
              />
            )
          })
          }

        </Section>
        
        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo"
          className="social-list"
        >
          {
            socialredes.map((item) => {
             return (
              <ListItem 
              url={item.url}
                img={item.img}
                alt={item.alt}
              
              />
             )
            })
          }
        </Section>
        

      </main>
    </div>
  )
}


export default App
