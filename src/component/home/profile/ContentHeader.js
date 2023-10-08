import React, { Fragment } from 'react';
import Button from '../../../reUsabaleComp/Button';
import PropTypes from 'prop-types';

class ContentHeader extends React.Component {
   constructor(props) {
      super(props)
      this.ChangeMenuBack = this.ChangeMenuBack.bind(this);
   }
   cs
   ChangeMenuBack() {
      console.log('woi')
      this.setState({
         menu: [
            {
               text: 'Meet Up New',
               link: 'https://yusrilazharp.com',
            }
         ]
      })
   }


   render() {
      let { imgUrl, Judul, Location, Members, orang } = this.props
      return (
         <Fragment>
            <div className="four wide column">
               <img src={imgUrl} alt="" />
            </div>
            <div className="nine wide column">
               <h1>{Judul}</h1>
               <p>Location    : {Location}</p>
               <p>Members     : {Members}</p>
               <p>Organizer   : Farhat Saputra</p>
               <Button text="Join Us" url="http://yusrilazharp.com" color="yellow" Click={this.props.ChangeMenu} />
            </div>
         </Fragment >
      )
   }
}


ContentHeader.propTypes = {
   imgUrl: PropTypes.string,
   Judul: PropTypes.string,
   Location: PropTypes.string,
   Members: PropTypes.string,
   Organizer: PropTypes.string,
}
export default ContentHeader;