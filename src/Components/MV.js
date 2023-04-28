import React from "react";

function MV(props) {




    return(
        <div className="mv">

            {/* <h1>{props.title}</h1>
            <ul>
                <li>
                    <iframe className="mv-temp" width="560" height="315" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul> */}
            <h1 className="mv-title" id="newest">Newest Release</h1>
            <ul>
                <li>
                <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/W-ePbpVgsJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul>
            <h1 className="mv-title" id="metal">Metal</h1>
            <ul>
                <li>
                <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/kMr9pdCCoHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
                <li>
                    <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/mPU9UyvpKEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
                <li>
                    <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/p55-rj3vK6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul>

            <h1 className="mv-title" id="punk">Punk</h1>
            <ul>
                <li>
                    <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/oiIIxRFnP10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul>
            
            <h1 className="mv-title" id="electronic">Electronic Music</h1>
            <ul>
                <li>
                <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/ht8gQTqhRoE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
                <li>
                    <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/hpbu8ECA9q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul>
            
            <h1 className="mv-title" id="albums">Albums</h1>
            <ul>
                <li>
                <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/Nkn5TMK94Hw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>

                <li>
                    <iframe title="Necrocide"  className="bandcamp" width="350" height="470"   src="https://bandcamp.com/EmbeddedPlayer/album=3154021444/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/transparent=true/" seamless><a href="https://jetlin.bandcamp.com/album/necrocide">Necrocide by Starving Priest</a></iframe>
                </li>

                <li>
                    <iframe title="Tragic Inability to Converse in a Cost-Effective Manner" className="bandcamp" width="350" height="470"  src="https://bandcamp.com/EmbeddedPlayer/album=2534066974/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/transparent=true/" seamless><a href="https://jetlin.bandcamp.com/album/tragic-inability-to-converse-in-a-cost-effective-manner">Tragic Inability to Converse in a Cost-Effective Manner by Malnutrition</a></iframe>
                </li>
                
                <li>
                <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/KFwnEPIzFwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>

                <li>
                    <iframe title="Brittle Layers of Dried Blood Cover My Pulsing Tissues and Happiness" className="bandcamp" width="350" height="470"  src="https://bandcamp.com/EmbeddedPlayer/album=3267025763/size=large/bgcol=ffffff/linkcol=de270f/tracklist=false/transparent=true/" seamless><a href="https://jetlin.bandcamp.com/album/brittle-layers-of-dried-blood-cover-my-pulsing-tissues-and-happiness">Brittle Layers of Dried Blood Cover My Pulsing Tissues and Happiness by Malnutrition</a></iframe>
                </li>

            <h1 className="mv-title">EPs</h1>

                <li>
                    <iframe title="Kairosclerosa EP" className="bandcamp" width="350" height="470"  src="https://bandcamp.com/EmbeddedPlayer/album=4233797479/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/transparent=true/" seamless><a href="https://jetlin.bandcamp.com/album/kairosclerosa-ep">Kairosclerosa EP by Malnutrition</a></iframe>
                </li>

            </ul>

            <h1 className="mv-title" id="live">Live</h1>
            <ul>
                <li>
                <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/90mhT8qY09I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul>
        </div>

    )
}

export default MV;