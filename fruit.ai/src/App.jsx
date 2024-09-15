import { LoginPage } from './component/auth/Login'
import { Signup } from './component/auth/Signup'
import { ForgetPass } from './component/auth/ForgetPass'
import { HomePage } from './component/home/HomePage'
import {Faqs} from './component/faqs/Faqs'
import { ChatPage } from './component/chat/ChatPage'
import { About } from './component/about/About'
import { Translate } from './component/translate/Translate'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/translate" element={<Translate />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
