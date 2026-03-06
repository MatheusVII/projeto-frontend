import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/produtos' element={<ProductListingPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;