import { useCookies } from "react-cookie";

export const CookieBannerComponent = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['my-react-cookie']);

  const acceptCookie = () => {
    const date= new Date();
    setCookie('my-react-cookie', 'HI HELLO HEY!', {expires: new Date(date.setTime(date.getTime() + 24*60*60*1000) )});
  }

  const declineCookie = () => {
    removeCookie('my-react-cookie')
  }

  return <>
    <div className='cookie-banner'>
      <div className='cookie-text-block'>
        <p>This is the cookie text.</p>
      </div>
      <div className='cookie-button-block'>
        <button onClick={acceptCookie}>Accept</button>
        <button onClick={declineCookie}>Decline</button>
      </div>
    </div>
  </>
}