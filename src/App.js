import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/App.scss';
import ContactFormPage from './pages/ContactFormPage';
import FormDataPreviewPage from './pages/FormDataPreviewPage';
import SuccessPage from './pages/SuccessPage';
import { Route } from 'react-router-dom';
import AboutusPage from './pages/AboutusPage';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={ContactFormPage} />
      <Route path='/preview' exact component={FormDataPreviewPage} />
      <Route path='/success' exact component={SuccessPage} />
      <Route path='/aboutus' exact component={AboutusPage} />
    </div>
  );
}

export default App;
