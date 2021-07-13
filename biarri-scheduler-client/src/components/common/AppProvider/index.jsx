import { BrowserRouter } from 'react-router-dom';

// third party library wrapper

const AppProvider = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

export default AppProvider;
