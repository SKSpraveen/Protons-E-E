import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Installation from './Installation/Installation_View';
import CCTV from './Pages/Sasindu/CCTV';
import DOOR_PHONE from './Pages/Sasindu/DOOR_PHONE';
import DOOR_LOCK from './Pages/Sasindu/DOOR_LOCK';
import ALARM_MOTION from './Pages/Sasindu/ALARM_MOTION'
import StockManagerDashboard from './Pages/Sasindu/StockManagerDashboard';
import Advertisement from './Pages/Sasindu/Advertisement';
import Stock from './Pages/Sasindu/Stock';
import AllAdsDetails from './Pages/Sasindu/AllAdsDetails';
import EditAds from './Pages/Sasindu/EditAds';
import AddStock from './Pages/Sasindu/AddStock';
import AllStockDetails from './Pages/Sasindu/AllStockDetails';
import EditStock from './Pages/Sasindu/EditStock';
import SellingPrice from './Pages/Sasindu/SellingPrice';
import Inventory from './Pages/Sasindu/Inventory';


//anjana
import NumberPageForm from './Pages/Anjana/NumberPageForm';
import DirectPageForm from './Pages/Anjana/DirectPageForm';
import BankPageForm from './Pages/Anjana/BankPageForm';
import Payments from './Pages/Anjana/Payments';
import PaymentManagerDashboard from './Components/Samidi/OMComponents/PaymentManagerDashboard.js';
import Orderpage_admin from './Components/Samidi/OMComponents/Orderpage_admin.js';



//Samidi
import Repair from './Pages/Samidi/Repair';
import Cart_View from './Installation/Cart_View';

import OrderManagerDashboard from './Pages/Samidi/OrderManagerDashboard';
import ViewTable from './Pages/Samidi/ViewTable';
import UserViewTable from './Pages/Samidi/UserViewTable';
import UpdateRepair from './Pages/Samidi/UpdateRepair';

//Rasindu
import Financialhome from './Pages/Rasindu/financialhome.js';
import Addexpences from './Pages/Rasindu/Addexpences';
import Expence from './Pages/Rasindu/expence';
import Income from './Pages/Rasindu/Income';
import UpdateExpence from './Pages/Rasindu/update.js'
import ExpenseReport from './Pages/Rasindu/ExpenseReport.js';
import FinalReport from './Pages/Rasindu/finalReport.js';
import BankIncome from './Pages/Rasindu/BankIncome.js';
import CreditIncome from './Pages/Rasindu/CreditIncome.js'; 
import DirecttIncome from './Pages/Rasindu/DirectIncome.js';
import IncomeReport from './Pages/Rasindu/incomeReport.js';

//Kavishka
import Admin from './Pages/Kavishka/Admin.js';
import Signup from './Pages/Kavishka/Signup.js';
import Login from './Pages/Kavishka/Login.js';
import UserHome from './Components/Kavishka/home_viwe.js';
import UserProfile from './Pages/Kavishka/userProfile.js';
import StaffSignup from './Pages/Kavishka/StaffSignup.js'
import { AuthContextProvider } from './context/AuthContext.js';
import AdminDash from './Pages/Kavishka/adminDash.js';
import StaffLogin from './Pages/Kavishka/StaffLogin.js';
import Manegars from './Pages/Kavishka/manegars.js'

//Nuwani
import Users from './Pages/Nuwani/Users';
import CompUser from './Pages/Nuwani/Complaintportal/CompUser';
import Accord from './Pages/Nuwani/supportportal/Accord';
import FAQs from './Pages/Nuwani/supportportal/FAQs';
import SupportAdmin from './Pages/Nuwani/SupportAdmin';
import Nonregfeedback from './Pages/Nuwani/Nonregfeedback';
import Aboutuspage from './Aboutus/Aboutuspage';
import ComplaintAdmin from './Pages/Nuwani/Complaintportal/ComplaintAdmin';


ReactDOM.render(

  <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cctv' element={<CCTV />} />
        <Route path='/doorphone' element={<DOOR_PHONE />} />
        <Route path='/doorlock' element={<DOOR_LOCK />} />
        <Route path='/alarm' element={<ALARM_MOTION />} />
        <Route path='/smdashboard' element={<StockManagerDashboard />} />
        <Route path='/ads' element={<Advertisement />} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/view/:itemId' element={<Installation />} />
        <Route path='/viewAllAds' element={<AllAdsDetails />} />
        <Route path='/editAds/:itemId' element={<EditAds />} />
        <Route path='/addstock' element={<AddStock />} />
        <Route path='/viewAllStock' element={<AllStockDetails />} />
        <Route path='/editStock/:itemId' element={<EditStock />} />
        <Route path='/sellingPrice' element={<SellingPrice />} />
        <Route path='/inventory' element={<Inventory />} />



        <Route path='/view/:itemId' element={<Installation />} />
        <Route path='/repair' element={<Repair />} />
        <Route path='/Cart_View' element={<Cart_View />} />

        <Route path='/omdashboard' element={<OrderManagerDashboard />} />
        <Route path='/viewTable' element={<ViewTable />} />
        <Route path='/UserviewTable' element={<UserViewTable />} />
        <Route path='/editRepair/:itemId' element={<UpdateRepair />} />

        

        <Route path='/' element={<App />}/>
        <Route path='/exform' element={<Expence />}/>
        <Route path='/home' element={<Financialhome />}/>
        <Route path='/intable' element={<Income />}/>
        <Route path='/addexpence' element={<Addexpences />}/>
        <Route path='/updateExpence/:expenceId' element={<UpdateExpence />}/>
        <Route path='/report' element={<ExpenseReport />}/>
        <Route path='/finalReport' element={<FinalReport/>}/>
        <Route path='/Bankintable' element={<BankIncome/>}/>
        <Route path='/Cardintable' element={<CreditIncome/>}/>
        <Route path='/Directintable' element={<DirecttIncome/>}/>
        <Route path='/incomeReport' element={<IncomeReport/>}/>

        <Route path='/signup' element={< Signup />} />
        <Route path='/userhome' element={<UserHome/>}/>
        <Route path='/user' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/userDetails' element={<AdminDash/>}/>
        <Route path='/staff' element={<StaffSignup/>}/>
        <Route path='/stafflogin' element={<StaffLogin/>}/>
        <Route path='/manager' element={<Manegars/>}/>

        <Route path='/' element={<App />} />
        <Route path="/Payments" element={<Payments />} />
      <Route path="/NumberPageForm" element={<NumberPageForm />} />
      <Route path="/DirectPageForm" element={<DirectPageForm />} />
      <Route path="/BankPageForm" element={<BankPageForm/>} />
      <Route path="/PaymentManagerDashboard" element={<PaymentManagerDashboard/>}/>


      <Route path='/users' element={<Users />} />
      <Route path='/faqs' element={<Accord />} />
      <Route path='/faqadmin' element={<FAQs  />} />
      <Route path='/support' element={<SupportAdmin />} /> 
      <Route path='/complaints' element={<CompUser />} />
      <Route path='/nonregfeed' element={<Nonregfeedback />} />
      <Route path='/compadmin' element={<ComplaintAdmin />} />
      <Route path='/aboutus' element={<Aboutuspage />} />

        
      </Routes>
      </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


