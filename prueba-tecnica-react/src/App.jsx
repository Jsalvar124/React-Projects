import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDOPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDOPOINT_IMG_URL=`https://api.api-ninjas.com/v1/randomimage?category=${firstWord}`

export function App() {
    const [fact, setFact] = useState()
    const [imgUrl, setImgUrl] = useState()
    const [clicked, setClicked] = useState()

    //un primer efecto para recuperar el dato aleatorio de la API
    useEffect(() => {
        fetch(CAT_ENDOPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }, [clicked])
    //un segundo efecto para recuperar la imagen, cada vez que cambie el fact
    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ', 1).join()
        console.log(firstWord)

        fetch(`https://api.thecatapi.com/v1/images/search`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                let [resObj] = response
                setImgUrl(resObj.url)
            }).catch(error => {
                console.log("Hubo un error", error)
            })
    }, [fact])


    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <main >
                <h1>App de michis</h1>
                <button onClick={handleClick} type="submit">New Fact!</button>
                {fact && <p>{fact}</p>}
                <figure>
                    <img src={imgUrl} alt={'random image from Cat API'} />
                    <figcaption>
                        {imgUrl}
                    </figcaption>
                </figure>
            </main>
        </>
    )
}