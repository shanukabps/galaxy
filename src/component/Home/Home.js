import React from 'react'
import './Home.css'
import Product from './../Product/Product';
function Home() {
    return (
        <div className="home">

            <img src="https://i.redd.it/8069el8l4q551.jpg" alt="" className="home_image" />

            <div className="home_row">
                <Product
                    id='1'
                    title='Razer DeathAdder v2 Gaming Mouse: 20K DPI Optical Sensor'
                    price={40.00}
                    image='https://photos5.appleinsider.com/gallery/35364-65139-iPhone-12-Rumor-Roundup-xl.jpg'
                    rating={4}
                />
                <Product
                    id='2'
                    title='Razer DeathAdder v2 Gaming Mouse: 20K DPI Optical Sensor'
                    price={1080.99}
                    image='https://www.goodgamingshop.com/wp-content/uploads/2020/09/https___hybrismediaprod.blob_.core_.windows.net_sys-master-phoenix-images-container_hf7_hfa_9072008921118_rzr-blackwidow-v3-tenkeyless_1500x100-3.jpg'
                    rating={3}
                />

                <Product
                    id='3'
                    title='Razer DeathAdder v2 Gaming Mouse: 20K DPI Optical Sensor'
                    price={1080.99}
                    image=' https://gmsrp.cachefly.net/images/20/07/05/9621be202ebd3acab63018ccc98f6ae1/960.jpg'
                    rating={5}
                />

            </div>
            <div className="home_row">
                <Product
                    id='4'
                    title='Razer DeathAdder v2 Gaming Mouse: 20K DPI Optical Sensor'
                    price={1080.99}
                    image='https://cnet1.cbsistatic.com/img/GL7RDzqrzfg7nTkqHy2IQhNVTjg=/940x0/2020/03/18/82c324d8-e3d6-4380-bcc3-3e8c23e339d0/xbox-series-x-tech-inline1.jpg'
                    rating={2}
                />
                <Product
                    id='5'
                    title='Razer DeathAdder v2 Gaming Mouse: 20K DPI Optical Sensor'
                    price={1080.99}
                    image='https://i.ytimg.com/vi/t7sOFoS-IRk/maxresdefault.jpg'
                    rating={3}
                />
                <Product
                    id='6'
                    title='Razer DeathAdder v2 Gaming Mouse: 20K DPI Optical Sensor'
                    price={1080.99}
                    image=' https://gmsrp.cachefly.net/images/20/07/05/9621be202ebd3acab63018ccc98f6ae1/960.jpg'
                    rating={2}
                />
                <Product
                    id='7'
                    title='Razer DeathAdder v2 Gaming Mouse: 20K DPI Optical Sensor'
                    price={1080.99}
                    image='https://i.ytimg.com/vi/t7sOFoS-IRk/maxresdefault.jpg'
                    rating={2}
                />

            </div>
            <div className="home_row">
                <Product
                    id='8'
                    title='Razer DeathAdder v2 Gaming Mouse: 20K DPI Optical Sensor'
                    price={1080.99}
                    image='https://i.ytimg.com/vi/t7sOFoS-IRk/maxresdefault.jpg'
                    rating={2}
                />



            </div>




        </div>
    )
}

export default Home
