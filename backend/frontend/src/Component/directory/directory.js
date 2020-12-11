import React,{Component} from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
          {
            title: 'hats',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0viS-61qfbF4khRWJ7sGjztN1_i-dHCAYLQ&usqp=CAU',
            id: 1,
            linkUrl: 'hats'
          },
          {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: ''
          },
          {
            title: 'sneakers',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAw-d17GWKJt505eW4ifUMFWMHLNe6NXMGfQ&usqp=CAU',
            id: 3,
            linkUrl: ''
          },
          {
            title: 'womens',
            imageUrl: 'https://image.made-in-china.com/2f0j00QkARoTIgbwcM/High-Quality-Gown-Private-Label-New-Design-Factory-Spring-Private-Label-Fashion-Women-Clothes-Beautiful-Dresses-Ladies-Dress.jpg',
            size: 'large',
            id: 4,
            linkUrl: ''
          },
          {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: ''
           

          }
        ]
      };
    }
  
    render() {
      return (
        <div className='directory-menu'>
          {this.state.sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </div>
      );
    }
  }
  
  export default Directory;