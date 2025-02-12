import './CSS/App.css';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './Components/Outlet';
import Homepage from './Pages/Homepage';
import Aboutus from './Pages/Aboutus';
import Clinic from './Pages/Clinic';
import Getinvolved from './Pages/Getinvolved';
import Contact from './Pages/Contact';
import Media from './Pages/Media';
import Programmes from './Pages/Programmes';
import CardDetails from './Pages/CardDetails'; // Import the new CardDetails page
import TermsAndConditions from './Pages/QuickLinksComponents/TermsConditions';
import RefundPolicy from './Pages/QuickLinksComponents/RefundPolicy';
import PrivacyPolicy from './Pages/QuickLinksComponents/PrivacyPolicy';
import DonorList from './Pages/Donorlist';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route 
          path='' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Homepage /></motion.div>} 
        />
        <Route 
          path='About' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Aboutus /></motion.div>} 
        />
        <Route 
          path='Clinic' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Clinic /></motion.div>} 
        />
        <Route 
          path='GetInvolved' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Getinvolved /></motion.div>} 
        />
        <Route 
          path='Contact' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Contact /></motion.div>} 
        />
        <Route 
          path='Media' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Media /></motion.div>} 
        />
        <Route 
          path='programmes' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Programmes /></motion.div>} 
        />
        {/* Dynamic Route for Card Details */}
        <Route 
          path='donate/:id' 
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><CardDetails /></motion.div>} 
        />
        <Route path="/termsAndCondition" element={<TermsAndConditions />} />
        <Route path='/RefundPolicy' element={<RefundPolicy/>}/>
        <Route path='/privacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/Donorlist' element={<DonorList/>}/>
        </Route></Routes>
  );
}

export default App;
