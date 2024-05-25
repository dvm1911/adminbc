import coinLogo from "./Ellipse 14.png";
import copyLogo from "./Paper Negative.png"
import upVoteArrow from './Arrow - Right.png'
import infoCircle from './Info Circle.png'
import twitterLogo from './twitter-fill (1) 5.png'
import redditLogo from './reddit-fill 2.png'
import telegramLogo from './telegram-fill 2.png'
import pooCoinLogo from './svgg.png'
import coinSwapLogo from './Group 582.png'
import dangerSym from './Danger.png'
import shareSym from './Vector.png'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const EditCoinInfo = () => {

    const { id } = useParams();
    
    const [ coin, setCoin ] = useState();

    
    useEffect (() => {
        axios.get("https://coinscore-cc-backend.onrender.com/api/collections/coins/"+id)
        .then(data => setCoin(data.data))
        .catch(err => console.log(err))
    }, [])

    

    return (
        <div className="coinInfoOuter flex">
            <div className="coinInfoLogoName marginBtm flex">
                <div className="coinInfoLogo">
                    <img src={coinLogo} alt="coinInfoLogo"/>
                </div>
                <div className="coinInfoName">
                    <input type="text" value={coin.coinName}/>
                </div>
            </div>
    
            <div className="coinInfoAcro marginBtm flex">
                <h3>ACT</h3>
            </div>
    
            <div className="BSCAddress marginBtm flex">
                <div className="coinInfoBSCAdd flex itmCenter">
                    <div className="coinInfoBSCAddTxt flex itmCenter">
                        <h4>BSC :</h4>
                    </div>
                    <div className="coinInfoBSCAddVal flex itmCenter">
                        <p>0x4AFc8c2Be6a0783ea16E16066fde140d15979296</p>
                    </div>
                </div>
                <div className="coinInfoBSCCopy">
                    <img src={copyLogo} alt=""/>
                </div>
            </div>
           
    
            <div className="coinAdditionalInfo marginBtm">
    
                <div className="coinInfoRateRank flex spaceBtwn marginBtm">
                    <div className="coinInfoRate">
                        <p>$0.0056</p>
                    </div>
                    <div className="coinInfoRank flex">
                        <p>001</p>
                    </div>
    
                </div>
    
                <div className="coinInfoVote flex spaceBtwn marginBtm">
                    <div className="coinInfoVoteTxt coinAdditionalInfoLV">
                        <p>Vote Now</p>
                    </div>
                    <div className="coinInfoVoteCounter flex">
                        <div className="voteNum">
                            <p>68</p>
                        </div>
                        <div className="upVote-sym flex">
                            <img id="upVote-arw" src={upVoteArrow} alt="upVote-arw"/>
                        </div>
                    </div>                
                </div>
    
                <div className="coinInfoMarketCap flex spaceBtwn marginBtm">
                    <div className="coinInfoMarketCapTxt flex coinAdditionalInfoLV">
                        <p>Market Cap</p>
                        <img src={infoCircle} alt="InfoCircle"/>
                    </div>
                    <div className="coinInfoMarketCapVal coinAdditionalInfoRV">
                        <p>$117,506,384</p>
                    </div>
    
                </div>
                <div className="coinInfoLaunch flex spaceBtwn marginBtm">
                    <div className="coinInfoLaunchTxt coinAdditionalInfoLV">
                        <p>Launch</p>
                    </div>
                    <div className="coinInfoLaunchDate coinAdditionalInfoRV">
                        <p>June 08, 2021</p>
                    </div>
                </div>
    
                <div className="coinInfoOwner flex spaceBtwn">
                    <div className="coinInfoOwnerTxt coinAdditionalInfoLV">
                        <p>Owner</p>
                    </div>
                    <div className="coinInfoOwnerName coinAdditionalInfoRV">
                        <p>Anonymous</p>
                    </div>
                </div>
            </div>
    
            <div className="coinInfoAbout marginBtm">
                <div className="coinInfoAboutTxt">
                    <p>About</p>
                </div>
                <div className="coinInfoAboutDescription">
                    <p>Description</p>
                </div>
                <div className="coinInfoAboutSocials flex">
                    <div className="coinInfoAboutTwitter">
                        <img src={twitterLogo} alt="TwitterLogo"/>
                    </div>
                    <div className="coinInfoAboutReddit">
                        <img src={redditLogo} alt="RedditLogo"/>
                    </div>
                    <div className="coinInfoAboutTelegram">
                        <img src={telegramLogo} alt="TelegramLogo"/>
                    </div>
                    <div className="coinInfoAboutPooCoin">
                        <img src={pooCoinLogo} alt="PooCoinLogo"/>
                    </div>
                    <div className="coinInfoAboutCoinSwap">
                        <img src={coinSwapLogo} alt="coinSwapLogo"/>
                    </div>
                </div>
            </div>
            <div className="coinInfoReportShare flex spaceBtwn">
                <div className="coinInfoReport">
                    <button className="coinInfoReportBtn flex">
                        <p>Report</p>
                        <img src={dangerSym} alt="coinInfoReport"/>
                    </button>
                </div>
                <div className="coinInfoShare">
                    <button className="coinInfoShareBtn flex">
                        <p>Share</p>
                        <img src={shareSym} alt="coinInfoShare"/>
                    </button>
                </div>
            </div>
        </div>
        );
    
}

export default EditCoinInfo;