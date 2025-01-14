import React, { Component } from 'react'
import { Title } from '../subs/Title'
import Product from './Product'
import { ProductConsumer } from '../subs/Context';

export default class ProductList extends Component {
  // state = {
  //   product: storeProducts
  // }

  render() {
    return (
      <React.Fragment>
        <div className='my-0'>
          <div className='container'>
            <Title name='Our' title='products' />
            <div className='row'>
              <ProductConsumer>
                {(value) => {
                  return (
                    value.products.map(_product => {
                      return (
                        <Product
                          key={_product.id}
                          product={_product}
                        />
                      )
                    })
                  )
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
