import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                const {id,price,img,info,company,title,inCart} = value.detailProduct;
                return (
                    <div className="container py-5">
                        {/*title */}
                        <div className="row">
                            <div className="col-10 mx-auto my-5 text-center text-slanted text-blue">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/*end title */}
                        {/*product info */}
                        <div className="row">
                            <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
                                <img src={img} className="img-fluid" alt="product"/>
                            </div>
                            <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
                                <h2>model:{title}</h2>
                                <h4 className="text-title text-muted mt-3 mb-2">
                                    made by: {company}
                                </h4>
                                <h4 className="text-blue">
                                    <strong>Price : <span>$</span>{price}</strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    some info about product:
                                </p>
                                <p className="text-muted lead">{info}</p>
                                <div >
                                    <Link to="/">
                                        <ButtonContainer>
                                            back to produts
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                     cart
                                     disabled={inCart?true:false} 
                                    onClick={()=>{
                                         value.addToCart(id);
                                         value.openModal(id); 
                                    }}>
                                        {inCart? "inCart":"Add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }}
            </ProductConsumer>
        )
    }
}
