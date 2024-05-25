import check from './check.png'
import edit from './draw.png'
import pause from './pause.png'
import play from './play-button-arrowhead.png'
import trash from './trash-bin.png'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';






const AdminPage = () => {

    const [coinsArr, setcoinsArr] = useState([]);

    useEffect( () => {
      axios.get('https://coinscore-cc-backend.onrender.com/api/collections/coins/allcoin')
      .then(data => setcoinsArr(data.data.data))
      .catch(err => console.log(err))
    }, [])

    const reviewedArr = (coinsArr.filter((item) => item.isReviewed))
    const deactivatedArr = (coinsArr.filter((item) => !(item.isActive)))

    return(
    <div className="adminOuter flex">
        <div className="adminHead">
            <div className="adminHeading">
                <h1>Admin Panel</h1>
            </div>
            <div className="adminHeadTxt">
                <p>CRUD for crypto coin Database!</p>
            </div>
        </div>
        <div className="toBeReviewOuter">
            <div className="toBeReviewTxt">
                <h2>Review Coins</h2>
            </div>
            {
                coinsArr.map(coin =>
                    <div key={coin._id} className="toBeReviewCoinOuter flex">
                <div className="coinWrapper flex">
                    <div className="toBeReviewCoinName flex">
                        <div className="coinLogo">
                            <img src={coin.coinLogo} alt="coinLogo" />
                        </div>
                        <div className="coinName">
                            <p>{coin.coinName}</p>
                        </div>
                        <div className="coinAcro flex">
                            <p>{coin.coinAcro}</p>
                        </div>
                    </div>
                    <div className="toBeReviewCoinFunc flex">
                        <Link to={`/updateCoin/`+coin._id} className="editBtn">
                            <img src={edit} alt="editBtn" />
                        </Link>
                        <button className="reviewBtn">
                            <img src={check} alt="checkBtn" />
                        </button>
                        <button className="deleteBtn">
                            <img src={trash} alt="trash-bin" />
                        </button>                    
                    </div>
                </div>
   
                <hr /> 
            </div>
                )
            }
        </div>
        <div className="toBeReviewOuter">
            <div className="toBeReviewTxt">
                <h2>Deactivated Coins</h2>
            </div>
            {
                deactivatedArr.map(coin =>
                    <div key={coin._id} className="toBeReviewCoinOuter flex">
                <div className="coinWrapper flex">
                    <div className="toBeReviewCoinName flex">
                        <div className="coinLogo">
                            <img src={coin.coinLogo} alt="coinLogo" />
                        </div>
                        <div className="coinName">
                            <p>{coin.coinName}</p>
                        </div>
                        <div className="coinAcro flex">
                            <p>{coin.coinAcro}</p>
                        </div>
                    </div>
                    <div className="toBeReviewCoinFunc flex">
                        <button className="editBtn">
                            <img src={edit} alt="editBtn" />
                        </button>
                        <button className="reviewBtn">
                            <img src={play} alt="checkBtn" />
                        </button>
                        <button className="deleteBtn">
                            <img src={trash} alt="trash-bin" />
                        </button>                    
                    </div>
                </div>    
                <hr /> 
            </div>
                )
            }
        </div>
        <div className="toBeReviewOuter">
            <div className="toBeReviewTxt">
                <h2>Edit Coins</h2>
            </div>
            {
                reviewedArr.map(coin =>
                    <div key={coin._id} className="toBeReviewCoinOuter flex">
                <div className="coinWrapper flex">
                    <div className="toBeReviewCoinName flex">
                        <div className="coinLogo">
                            <img src={coin.coinLogo} alt="coinLogo" />
                        </div>
                        <div className="coinName">
                            <p>{coin.coinName}</p>
                        </div>
                        <div className="coinAcro flex">
                            <p>{coin.coinAcro}</p>
                        </div>
                    </div>
                    <div className="toBeReviewCoinFunc flex">
                        <button className="editBtn">
                            <img src={edit} alt="editBtn" />
                        </button>
                        <button className="reviewBtn">
                            <img src={pause} alt="checkBtn" />
                        </button>
                        <button className="deleteBtn">
                            <img src={trash} alt="trash-bin" />
                        </button>                    
                    </div>
                </div>    
                <hr /> 
            </div>
                )
            }

           
        </div>                                       
    </div>
    );
} 

export default AdminPage;