import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export function TwitterFollowCard({ children, userName = 'unknown', name='unknown', initialIsFollowing }) {
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); /* using a prop to initialize a state */
    const imageStr = `https://unavatar.io/${userName}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick =() =>{
        if(isFollowing){
        
            const confirmAlert= Swal.fire({
            title: `Quieres dejar de seguir a ${userName}`,
            text: "Sus Tweets ya no aparecerán en tu cronología de inicio. Podrás seguir viendo su perfil, a menos que sus Tweets estén protegidos. ",
            icon: 'warning',
            width: 350,
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: 'black',
            cancelButtonColor: 'gray',
            confirmButtonText: 'Dejar de seguir',
          }).then((result) => {
            if (result.isConfirmed) {
                setIsFollowing(false)
            } 
          })
        } else {
            setIsFollowing(!isFollowing)
        }
    }

    return (
        <>
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imageStr} alt="Avatar" />
                <div className="tw-followCard-info">
                    <a target='_blank' href={`https://github.com/${userName}`} className='tw-followCard-nameText'><strong>{children!=undefined ? children : name}</strong></a>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
        
        </>
        
    )
}