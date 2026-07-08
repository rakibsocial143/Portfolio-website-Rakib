import { Outlet } from 'react-router'
import Background from '../Hero/Background'
import About from '../About/About'
import Skills from '../Skill/Skills'
import Projects from '../Project/Project'
import Contacts from '../Contacts/Contacts'
import Profile from '../Profile/Profile'


const HomeLayout = () => {
  return (
    <div className="">
      <header className="">
        <Background/>
      </header>
      <main className="">
         {/* <Outlet/> */}
         <About/>

         <Skills/>

        <Projects/>

        <Profile/>

        <Contacts/>
      </main>

      <footer className="">
       
      </footer>
    </div>
  );
};

export default HomeLayout;
