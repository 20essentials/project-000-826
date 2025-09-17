import { createRoot } from "react-dom/client"
import "bulma/css/bulma.css"

export default function App() {
  return (
    <section className="container">
      <video
        poster="preview/n826.avif"
        className="video1"
        src="./assets/fondillo.mp4"
        type="video/mp4"
        muted
        loop
        autoPlay
      ></video>
      <video
        poster="preview/n826.avif"
        className="video2"
        src="./assets/lups.mp4"
        type="video/mp4"
        muted
        loop
        autoPlay
      ></video>
      <style>{`
        *,*::after,*::before{box-sizing:border-box;margin:0;padding:0;font-family:sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue'}
        a{-webkit-tap-highlight-color:transparent}
        html{scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:transparent transparent}
        body{overflow:hidden;height:100vh;width:100%}
        body .container,body video{position:relative;width:100%;height:100vh}
        body video{position:absolute;top:0;left:0;object-fit:cover;object-position:center}
        body .video2{mix-blend-mode:screen;filter:brightness(2)}
      `}</style>
    </section>
  )
}

const rootEl = document.createElement("div")
document.body.appendChild(rootEl)
createRoot(rootEl).render(<App />)
