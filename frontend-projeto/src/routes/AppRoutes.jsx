import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductViewPage from '../pages/ProductViewPage';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/produto' element={<ProductListingPage />}/>
                <Route path='/produto/:id' element={<ProductViewPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;