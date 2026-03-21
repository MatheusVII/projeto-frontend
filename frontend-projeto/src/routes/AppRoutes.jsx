import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductViewPage from '../pages/ProductViewPage';
import Header from '../components/Header';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/produto' element={<ProductListingPage />}/>
                <Route path='/produto/:id' element={<ProductViewPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;