import './Products.css';

import {Fragment , useEffect, useState } from 'react'

import MetaData from '../layout/metaData';


function Products() {


    




   
 

    return ( 
        <Fragment>
            
            <Fragment> 
                <MetaData title = "healtho" />
                <h2 className='homeHeading'>Get fit with some yoga tips..</h2>

                <div className='productsHead border-2 m-10 '>
                <iframe width="350" height="315" src="https://www.youtube.com/embed/klmBssEYkdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="350" height="315" src="https://www.youtube.com/embed/RJ44oIxWiYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="350" height="315" src="https://www.youtube.com/embed/0vDs2fnq8ow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="350" height="315" src="https://www.youtube.com/embed/YjmQVMLhNT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="350" height="315" src="https://www.youtube.com/embed/IT94xC35u6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="350" height="315" src="https://www.youtube.com/embed/0XBcrjkkwQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </Fragment>
        </Fragment>
     );
}

export default Products;