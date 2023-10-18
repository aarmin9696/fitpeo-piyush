import React from "react";
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import MonthlyBarChart from "./MonthlyBarChart";
import PieChart from "./Piechart";
import Products from "./Products";

const Body = () => {


    return(
        <div className="body-cont">

           <div className="first-cont">
              <div><h2>Hello Fitpeo <WavingHandRoundedIcon /> </h2></div>
              <div className="searchbar"> <SearchRoundedIcon /> <input placeholder="search" />  </div>
           </div>

           <div className="second-cont">
           <div className="card">
              <div className="row g-0 ">
                <div className="col-md-4 card-icon">
                <CurrencyExchangeRoundedIcon style={{ fontSize: '68px', color: 'green', backgroundColor: '#DDFFED', padding: '10%', borderRadius:'50px' }}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                  <p className="gray">Earning</p>
                    <h1 className="card-title">$198k</h1>
                    
                  </div>
                  <p><span className="green-text"> ↑ 37%</span> this month</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="row g-0 ">
                <div className="col-md-4 card-icon">
                <ListRoundedIcon style={{ fontSize: '68px', color: 'A102FF', backgroundColor: '#E7DBFF', padding: '8%', borderRadius:'50px' }}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p  className="gray">Orders</p>
                    <h1 className="card-title">$2.4k</h1>
                    
                  </div>
                  <p><span className="red-text">↓ 2% </span>this month</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="row g-0 ">
                <div className="col-md-4 card-icon">
                <AccountBalanceWalletRoundedIcon style={{ fontSize: '68px', color: '#0859BF', backgroundColor: '#CCF2FF', padding: '10%', borderRadius:'50px' }}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                  <p className="gray">Balance</p>
                  <h1 className="card-title">$2.4k</h1>
                    
                  </div>
                  <p><span className="red-text">↓ 2% </span> this month</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="row g-0 ">
                <div className="col-md-4 card-icon">
                <LocalMallRoundedIcon style={{ fontSize: '68px', color: '#D90116', backgroundColor: 'FFB1D9', padding: '10%', borderRadius:'50px' }}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                  <p className="gray">Total Sales</p>
                    <h1 className="card-title">$89k</h1>
                    
                  </div>
                  <p><span className="green-text">↑ 37%</span> this week</p>
                </div>
              </div>
            </div>

           </div>

           <div className="third-cont row"> 
             <div className="chart item-shadow">
              <MonthlyBarChart />
             </div>
             <div className="piechart item-shadow">
              <PieChart />
             </div>

           </div>

           <div className="fourth-cont">
            <Products />
           </div>


           
        </div>
    )
}

export default Body