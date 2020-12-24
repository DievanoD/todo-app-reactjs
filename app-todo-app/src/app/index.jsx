import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './app.css';

import Menu from '../components/menu';
import Routes from '../routes';

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
