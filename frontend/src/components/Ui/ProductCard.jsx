/*import React from "react";

import "../../style/Product-card.css";
import {motion} from "framer-motion";
import { Col } from "reactstrap";
import {Link} from "react-router-dom";
import { toast } from 'react-toastify';

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({item}) =>{

    const dispatch = useDispatch()

    const addToCart = ()=>{
        dispatch(
            cartActions.addItem({
                id: item.id,
                productName: item.productName,
                price: item.price,
                imgUrl : item.imgUrl,
            })
        );
        toast.success('Product Added Successfully.')
    };
    return (
        <Col lg='3' md='4' className="mb-2">
            <div className="product__item">
                <div className="product__img">
                    <motion.img whileHover={{scale: 0.9}} src={item.imgUrl}/>
                </div>
                <div className="p-2 product__info">
                    <h3 className="product__name">
                        <Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                    <span>{item.category}</span>
                </div>
                <div
                    className="product_card-bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">Rs {item.price}</span>
                    <motion.span whileTap={{scale: 1.2}} onClick={addToCart}>
                    <i className="ri-add-line"></i>
                </motion.span>
                </div>
            </div>
        </Col>
    );
};

export default ProductCard;*/

import React from "react";
import "../../style/Product-card.css";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import ProductDetail from "../../pages/ProductDetail";

const ProductCard = ({ item }) => {
    const dispatch = useDispatch();
    const { id, productName, price, imgUrl, category } = item;

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                productName,
                price,
                imgUrl,
            })
        );
        toast.success('Product Added Successfully.');
    };

    return (
        <Col lg="3" md="4" className="mb-2">
            <Link to={`/shop/${id}`} className="product__item-link">
                <div className="product__item">
                    <div className="product__img">
                        <motion.img 
                            whileHover={{ scale: 0.9 }} 
                            src={imgUrl} 
                            alt={productName} 
                        />
                    </div>
                    <div className="p-2 product__info">
                        <h3 className="product__name">
                            {productName}
                        </h3>
                        <span>{category}</span>
                    </div>
                    <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
                        <span className="price">Rs {price}</span>
                        <motion.span whileTap={{ scale: 1.2 }} onClick={(e) => {
                            e.preventDefault(); // Prevents Link from being triggered
                            addToCart();
                        }}>
                            <i className="ri-add-line"></i>
                        </motion.span>
                    </div>
                </div>
            </Link>
        </Col>
    );
};

export default ProductCard;
