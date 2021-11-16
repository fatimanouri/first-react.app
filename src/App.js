
import './App.css';
import './assets/query/query.css';
import Logo from './Component/logo/logoComponent';
import Title from './Component/title/title';
import Form from './Component/form/formComponent';
import Weblog from './Component/weblog/weblog';
import Main from './Component/main/main';


function App() {
  return (
    <div className="container">
        <Logo/>
    <div className="contact">
        <Title/>
        <Form/>
    </div>    
  <Weblog/>
  <Main/>
</div>
  );
}

export default App;
