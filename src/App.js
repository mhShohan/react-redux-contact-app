import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <Navbar />
        </div>
    );
}

export default App;
