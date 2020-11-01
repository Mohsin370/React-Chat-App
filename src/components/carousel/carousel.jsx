import { Carousel } from 'antd';
import React,{Component } from 'react';
import styles from './carousel.module.css';

function onChange(carouselNumber) {
}


class CustomCarousel extends Component {

    render() {

        const contentStyle = {
            height: '100vh',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
            margin:'0px'
        }
        return(
            <Carousel autoplay className={styles.carouselContainer} afterChange={onChange}>
                <div  >
                    <img src="https://images.unsplash.com/photo-1523285367489-d38aec03b6bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"></img>
                </div>
                <div>                
                        <img src="https://images.unsplash.com/photo-1544380904-c686aad2fc40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"></img>
                </div>
                <div>
                        <img src="https://images.unsplash.com/photo-1547223487-c0bbe3535bb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"></img>
                </div>
            </Carousel>
        )
    };

}
export default CustomCarousel;