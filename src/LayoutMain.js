import React, { Component, Fragment } from 'react';
import axios from 'axios';
//content
import Navbar from './reUsabaleComp/Navbar/Navbar';
import Footer from './reUsabaleComp/Footer';

//css
import './App.css';
import Home from './component/home/Home';
import Container from './reUsabaleComp/Container';
import IsLoading from './reUsabaleComp/IsLoading';

class LayoutMain extends Component {
   constructor(props) {
      super(props)
      this.state = {
         isLoading: true,
         orang: [],
         menu: [
            {
               text: 'Meet Up',
               link: '/meetUp',
            },
            {
               text: 'Experience',
               link: 'https://yusrilazharp.com',
            },
            {
               text: 'Menu Tambahan',
               link: 'https://yusrilazharp.com',
            }
         ]
      }

   }

   ChangeMenu = () => {
      this.setState({
         menu: [
            {
               text: 'Meet Up New',
               link: 'https://facebook.com',
            }
         ]
      })
   }

   ChangeMenuBack = () => {
      this.setState({
         menu: [
            {
               text: 'Meet Up',
               link: 'https://yusrilazharp',
            },
            {
               text: 'Experience',
               link: 'https://yusrilazharp',
            },
            {
               text: 'Menu Tambahan',
               link: 'https://yusrilazharp',
            }
         ]
      })
   }

   componentDidMount() {
      this.setState({ isLoading: false })

      axios
         .get("https://swapi.co/api/people")
         .then(response => this.setState({ orang: response.data.results }));
      // .then(response => console.log(response.data.results));


   }

   render() {
      const Content = () => {
         let { orang } = this.state

         return (
            <Fragment>
               <Navbar ListMenu={this.state} ChangeMenuBack={this.ChangeMenuBack} />
               <Container>
                  <Home ChangeMenu={this.ChangeMenu} orang={orang} />
               </Container>
               <Footer textFooter="Copyleft Hacktive 8" />
            </Fragment >
         )
      }

      return (
         this.state.isLoading ? <IsLoading Judul="Loading..." /> : <Content />

      );
   }
}

export default LayoutMain;
