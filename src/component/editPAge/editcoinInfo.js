import coinGecko from './coingecko__78343 1.png'
import coinswapLogo from './DNZDqtH2_400x400 1.png'
import pancakeLogo from './Home _ PancakeSwap - $13.450-1 1.png'
import poocoinLogo from './poocoin512 2.png'

import instagramLogo from './instagram-fill (1) 2.png'
import youtubeLogo from './Vector.png'
import redditLogo from './reddit-fill 2.png'
import telegramLogo from './telegram-fill 2.png'
import twitterLogo from './twitter-fill (1) 5.png'
import addImgLogo from './Plus.png'
import webLogo from './Group 599.png'

import axios from 'axios'
import { useState, useEffect } from 'react'
import { logoBannerDb } from '../firebaseConfig/firebaseConfig'
import { ref, uploadBytes } from 'firebase/storage'
import { useParams } from 'react-router-dom'

const EditCoinInfo = () => {

    const { id } = useParams();
    const [ defaultVal, setdefaultVal ] = useState({});

    useEffect( () => {
      axios.get('https://coinscore-cc-backend.onrender.com/api/collections/coins/'+id)
      .then(data => setdefaultVal(data.data))
      .catch(err => console.log(err))
    }, [id])
    

    const [coinName, setcoinName] = useState('');
    const [errcoinName, seterrcoinName] = useState(false);

    const [coinAcro, setcoinAcro] = useState('');
    const [errcoinAcro, seterrcoinAcro] = useState(false);

    const [coinAddressBSC, setcoinAddressBSC] = useState('');
    const [coinAddressETH, setcoinAddressETH] = useState('');
    const [coinAddressTRC, setcoinAddressTRC] = useState('');
    const [coinMarketCap, setcoinMarketCap] = useState('');
    const [coinPrice, setcoinPrice] = useState('');
    const [coinLaunchDate, setcoinLaunchDate] = useState('');
    const [coinDescription, setcoinDescription] = useState('');
    const [coinDescCounter, setcoinDescCounter] = useState(0);

    const coinDiscCounter = (e) => {
        setcoinDescription(e.target.value);
        setcoinDescCounter(e.target.value.length);

    } 

    const [errMsg, seterrMsg] = useState(false);

    const [coinTwitter, setcoinTwitter] = useState('');
    const [coinInstagram, setcoinInstagram] = useState('');
    const [coinReddit, setcoinReddit] = useState('');
    const [coinTelegram, setcoinTelegram] = useState('')
    const [coinWebsite, setcoinWebsite] = useState('');
    const [coinYoutube, setcoinYoutube] = useState('');
    
   
    const [coinLogo, setcoinLogo] = useState('');

    const [errcoinLogo, seterrcoinLogo] = useState(false);

    const [coinBanner, setcoinBanner] = useState();

    const onLogoUpload = (e) => {
        setcoinLogo(e.target.files[0]);
        
    }

    const onBannerUpload = (e) => {
        setcoinBanner(e.target.files[0]);
    }


    const [onPanCakeSwap, setonPanCakeSwap] = useState(false);
    const [onBoggedFinance, setonBoggedFinance] = useState(false);
    const [onPooCoin, setonPooCoin] = useState(false);
    const [onCoingecko, setonCoingecko] = useState(false);
    const coinVote = 0;
    const isReviewed = false;
    const [isActive, setisActive] = useState(false);
    const isPromoted = false;

    const onSetActive = (e) => {
        e.preventDefault();
        setisActive(true);
    }

    console.log(isActive)



   
    const [btnColorCoinGecko, setBtnColorCoinGecko] = useState("#303343");
    const [txtColorCoinGecko, setTxtColorCoinGecko] = useState("#6B5DCC");
    const handleBtnCoinGecko = (e) => {
        e.preventDefault();
        if(btnColorCoinGecko === "#303343" && onCoingecko === false){
            setTxtColorCoinGecko("#D7D7D7");
            setBtnColorCoinGecko("#6B5DCC");
            setonCoingecko(!onCoingecko);
        } else {
            setTxtColorCoinGecko("#6B5DCC");
            setBtnColorCoinGecko("#303343");
            setonCoingecko(!onCoingecko);
        }       
      };

      const [btnColorPanCakeSwap, setBtnColorPanCakeSwap] = useState("#303343");
      const [txtColorPanCakeSwap, setTxtColorPanCakeSwap] = useState("#6B5DCC");
      const handleBtnPanCakeSwap = (e) => {
        e.preventDefault();
        if(btnColorPanCakeSwap === "#303343" && onPanCakeSwap === false){
            setTxtColorPanCakeSwap("#D7D7D7");
            setBtnColorPanCakeSwap("#6B5DCC");
            setonPanCakeSwap(!onPanCakeSwap);
        } else {
            setTxtColorPanCakeSwap("#6B5DCC");
            setBtnColorPanCakeSwap("#303343");
            setonPanCakeSwap(!onPanCakeSwap);
        }      
      };

      const [btnColorBoggedFinance, setBtnColorBoggedFinance] = useState("#303343");
      const [txtColorBoggedFinance, setTxtColorBoggedFinance] = useState("#6B5DCC");
      const handleBtnBoggedFinance = (e) => {
        e.preventDefault();
        if(btnColorBoggedFinance === "#303343" && onBoggedFinance === false){
            setTxtColorBoggedFinance("#D7D7D7");
            setBtnColorBoggedFinance("#6B5DCC");
            setonBoggedFinance(!onBoggedFinance);
        } else {
            setTxtColorBoggedFinance("#6B5DCC");
            setBtnColorBoggedFinance("#303343");
            setonBoggedFinance(!onBoggedFinance);
        }         
      };

      const [btnColorPooCoin, setBtnColorPooCoin] = useState("#303343");
      const [txtColorPooCoin, setTxtColorPooCoin] = useState("#6B5DCC");
      const handleBtnPooCoin = (e) => {
        e.preventDefault();
        if(btnColorPooCoin === "#303343" && onPooCoin === false){
            setTxtColorPooCoin("#D7D7D7");
            setBtnColorPooCoin("#6B5DCC");
            setonPooCoin(!onPooCoin);
        } else {
            setTxtColorPooCoin("#6B5DCC");
            setBtnColorPooCoin("#303343");
            setonPooCoin(!onPooCoin);
        }         
      };


    

    const onClickPost = async (e) => {
        e.preventDefault();
            try{
                await axios.put("https://coinscore-cc-backend.onrender.com/api/collections/"+id, { coinName, coinAcro, coinAddressBSC, coinAddressETH, coinAddressTRC, coinMarketCap, coinPrice, coinLaunchDate, coinDescription, coinVote, coinLogo, coinTwitter, coinInstagram, coinReddit, coinTelegram, coinWebsite, coinYoutube, onPanCakeSwap, onBoggedFinance, onPooCoin, onCoingecko, isReviewed, isActive, isPromoted });

                const logoRef = ref(logoBannerDb, `coins/${coinName}/logo`)
                uploadBytes(logoRef, coinLogo);
    
                const bannerRef = ref(logoBannerDb, `coins/${coinName}/banner`);
                uploadBytes(bannerRef, coinBanner);

                seterrMsg(false);
            }
            catch(err)
            {
                console.log(`Couldn't update coin ${err}`);
                if(coinName.length === 0){
                    seterrcoinName(true);
                }else{
                    seterrcoinName(false);
                }

                if(coinAcro.length === 0){
                    seterrcoinAcro(true);
                }else{
                    seterrcoinAcro(false);
                }

                if(coinLogo === undefined){
                    seterrcoinLogo(true);
                }else{
                    seterrcoinLogo(false);
                }
                
                seterrMsg(true);
            }       

    }

 
    

    return(
        <div className='flex flex-col items-center justify-center'>
         
                        <div className="contentOuter flex flex-col px-8 py-8 shadow-md">
                    <div>
                        <h2 className="primaryColorW font-semibold text-3xl">Add your coin</h2>
                        <p className="text-justify primaryColorW font-light tracking-wide text-lg">Fill this quick form, and our team will contact you shortly</p>
                    </div>
                    <div className="addCoinBody">
                        <form className="flex flex-col">

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinName">Coin Name</label>
                            
                            {errcoinName && <p className = "text-xs font-normal text-justify text-red-600">*Please fill the required fields</p>}
                            <input value={defaultVal.coinName} onChange={(e) => { setcoinName(e.target.value) }} className ="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinName" placeholder="enter your coin name" required />

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinAcro">Coin Acronym</label>
                            {errcoinAcro && <p className = "text-xs font-normal text-justify text-red-600">*Please fill the required fields</p>}
                            <input value={defaultVal.coinAcro} onChange={(e) => { setcoinAcro(e.target.value)}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinAcro" placeholder="enter your coin acronym" required />

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinBSC">Address BSC</label>
                            <input value={defaultVal.coinAddressBSC} onChange={(e) => { setcoinAddressBSC(e.target.value)}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinBSC" placeholder="enter your coin BSC address"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinETH">Address ETH</label>
                            <input value={defaultVal.coinAddressETH} onChange={(e) => { setcoinAddressETH(e.target.value)}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinETH" placeholder="enter your coin ETH adddress"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinTRC">Address TRC</label>
                            <input value={defaultVal.coinAddressTRC} onChange={(e) => { setcoinAddressTRC(e.target.value)}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinTRC" placeholder="enter your coin TRC address"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="addCoinMC">Market Cap</label>
                            <input value={defaultVal.coinMarketCap} onChange={(e) => { setcoinMarketCap(e.target.value)}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="addCoinMC" placeholder="What's your coin Market Cap"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinPrice">Price</label>
                            <input value={defaultVal.coinPrice} onChange={(e) => { setcoinPrice(e.target.value)}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinPrice" placeholder="what's the price of your coin"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinLaunch">Launch Date</label>
                            <input value={defaultVal.coinLaunchDate} onChange={(e) => { setcoinLaunchDate(e.target.value)}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="date" id="coinLaunch" placeholder="enter your coin name"/>

                            <div className="flex flex-col">
                                <label className="text-justify  primaryColorW font-light tracking-wide text-lg" name="coinDescription">Description</label>
                                <textarea maxLength="1800" value={defaultVal.coinDescription} onInput ={coinDiscCounter} id="coinDescription" className="h-64 p-1 rounded-xl rounded-b-none inputFieldColor primaryColorW pl-2.5" placeholder="1800 chars (max)"></textarea>
                                <div className="flex justify-end p-1 w-135 rounded-xl border-1 border-t-0 inputFieldColor primaryColorP pl-2.5 mb-6 rounded-t-none primaryColorP font-normal text-xs tracking-wide">
                                    <p>{coinDescCounter}/1800</p>
                                </div>
                            </div>

                            <label className="text-justify primaryColorW font-semibold tracking-wide text-lg" name="addCoinLogo">Logo</label>
                            <p className="secondaryColorG text-justify text-xs font-normal tracking-wide">Recommended Size: 512 * 512 px or an image with dimesions in 1:1 ratio.</p>
                            {errcoinLogo && <p className = "text-xs font-normal text-justify text-red-600">*Please fill the required fields</p>}
                            <div className="flex m-8 justify-center">
                                <div className="flex-col items-center justify-center w-64 h-64 rounded-xl flex inputFieldColor primaryColorW pl-2.5">
                                    <div className="addCoinLogoUpload">
                                        <input onChange={onLogoUpload} className="h-64 w-64 opacity-0 absolute flex" id="addCoinLogo" type="file" accept="image/*" required/>
                                        <img className="w-6 h-6" src={addImgLogo} alt="addFileLogo"/>
                                    </div>
                                    { coinLogo ? <p className='primaryColorW text-center text-xs font-semibold tracking-wide'>{coinLogo.name}</p> : <div className="addCoinLogoUploadTxt">
                                    <span className="primaryColorP text-center text-xs font-semibold tracking-wide">Add file</span> <span className="primaryColorW text-center text-xs font-semibold tracking-wide">or</span><span className="primaryColorP text-center text-xs font-semibold tracking-wide"> Drag and drop here</span>
                                </div> }              
                                </div>
                            </div>
                            

                            <label className="text-justify primaryColorW font-semibold tracking-wide text-lg" name="addCoinBanner">Banner</label>
                            <p className="secondaryColorG text-justify text-xs font-normal tracking-wide">Recommended Size: 1920*1080 px (lanscape).</p>
                            <div className="flex-col items-center justify-center rounded-xl inputFieldColor  my-7 h-60  flex">
                                <div className="addCoinBannerUpload">
                                    <input onChange={onBannerUpload} className="h-64 w-64 opacity-0 absolute flex" id="addCoinBanner" type="file" accept="image/*"/>
                                    <img className="w-6 h-6" src={addImgLogo} alt="addFileBanner"/>
                                </div>
                                { coinBanner ? <p className='primaryColorW'>{coinBanner.name}</p> : <div className="addCoinLogoUploadTxt">
                                    <span className="primaryColorP text-center text-xs font-semibold tracking-wide">Add file</span> <span className="primaryColorW text-center text-xs font-semibold tracking-wide">or</span><span className="primaryColorP text-center text-xs font-semibold tracking-wide"> Drag and drop here</span>
                                </div> }
                                
                            </div>

                            <label className="text-justify primaryColorW font-semibold tracking-wide text-lg " name="addCoinSocial">Your socials</label>
                            <span className="text-justify text-xs font-normal secondaryColorG">attach link to your coin account socials</span>

                            <div className="my-4 flex items-center">
                                <img className="w-7 h-7 mx-4" src={twitterLogo} alt="twitter logo"/>
                                <input value={defaultVal.coinTwitter} onChange={(e) => { setcoinTwitter(e.target.value)}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialTwitter" placeholder="your twitter social"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-7 h-7 mx-4" src={instagramLogo} alt="instagram logo"/>
                                <input value={defaultVal.coinInstagram} onChange={(e) => { setcoinInstagram(e.target.value)}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialInstagram" placeholder="your instagram social"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-7 h-7 mx-4" src={redditLogo} alt="reddit logo"/>
                                <input value={defaultVal.coinReddit} onChange={(e) => { setcoinReddit(e.target.value)}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialReddit" placeholder="your reddit social"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-7 h-7 mx-4" src={telegramLogo} alt="telegram logo"/>
                                <input value={defaultVal.coinTelegram} onChange={(e) => { setcoinTelegram(e.target.value)}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialTelegram" placeholder="your telegram social"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-6 h-6 mx-5" src={webLogo} alt="website logo"/>
                                <input value={defaultVal.coinWebsite} onChange={(e) => { setcoinWebsite(e.target.value)}}  className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialWebsite" placeholder="your website"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-7 h-6 mx-5" src={youtubeLogo} alt="youtube logo"/>
                                <input value={defaultVal.coinYoutube} onChange={(e) => { setcoinYoutube(e.target.value)}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialYoutube" placeholder="your youtube channle"/>
                            </div>

                            <label className="text-justify primaryColorW font-semibold tracking-wide text-lg" name="addCoinListing">Listings</label>
                            <span className="text-justify text-xs font-normal secondaryColorG">Please select all platforms where your coin is listed</span>

                                <div className="flex">
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnCoinGecko} style={{ backgroundColor: btnColorCoinGecko, color: txtColorCoinGecko }} className="flex items-center rounded-xl justify-between m-3 p-3" id="addCoinListingCoinGecko">
                                            <img className="mr-2.5 w-6 h-6" src={coinGecko} alt=""/>
                                            <p className="text-justify text-xs font-semibold tracking-wide">coingecko</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnPanCakeSwap} style={{ backgroundColor: btnColorPanCakeSwap, color: txtColorPanCakeSwap }} className="flex items-center rounded-xl justify-between m-3 p-3" id="addCoinListingPancakeSwap">
                                            <img className="mr-2.5 w-6 h-6" src={pancakeLogo} alt=""/>
                                            <p className="text-justify text-xs font-semibold tracking-wide">pancakeswap</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnBoggedFinance} style={{ backgroundColor: btnColorBoggedFinance, color: txtColorBoggedFinance }} className="flex items-center rounded-xl justify-between m-3 p-3" id="addCoinListingBoggedFinance">
                                            <img className="mr-2.5 w-6 h-6" src={coinswapLogo} alt=""/>
                                            <p className="text-justify text-xs font-semibold tracking-wide">bogged.finance</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnPooCoin} style={{ backgroundColor: btnColorPooCoin, color: txtColorPooCoin }} className="flex items-center rounded-xl justify-between m-3 p-3" id="addCoinListingPoocoin">
                                            <img className="mr-2.5 w-6 h-6" src={poocoinLogo} alt=""/>
                                            <p className="text-justify text-xs font-semibold tracking-wide">poocoin</p>
                                        </button>
                                    </div>
                                </div>

                                <div className='self-end'>
                            <button onClick={onSetActive} className="primaryColorW rounded-xl btnBgColor h-11 w-64 text-lg font-bold border border-slate-50 m-2" >Activate Coin</button>
                            </div>      

                            <div className='self-end'>
                            <button onClick={onClickPost} className="primaryColorW rounded-xl btnBgColor h-11 w-64 text-lg font-bold border border-slate-50 m-2" >Update Coin Info</button>
                            {errMsg && <p className = "text-xs font-normal text-justify text-red-600">*Please fill the required fields</p>}
                            </div>    
                            
                        </form>

                    </div>
                </div>

        </div>
    );
}

export default EditCoinInfo;