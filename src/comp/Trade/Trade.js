import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Table,
  InputGroup,
  FormControl } from 'react-bootstrap-v5';

import './trade.css';
import HeaderComp from '../HeaderComp';
import FooterComp from '../FooterComp';
import Chart from '../Chart/Chart';

import { MarketData } from "react-tradingview-embed";

const Trade = () => {
	return (
        <Container fluid>
            <HeaderComp />
            <Row className="tradecontainer mt-2">
                <Col sm={8} style={{fontSize:"10px"}}>
                <Row>
                    <Col sm className='border'>
                        <p className="h5"><strong>BTC/USDT</strong></p>
                        <p className="" href="#"><i class="bi bi-journals"></i>Bitcoin</p>
                    </Col>
                    
                    <Col sm className='border'>
                        <p className="h6"><strong>42,683.55</strong></p>
                        <p className=""><strong>$42,683.55</strong></p>
                    </Col>
                    
                    <Col sm className='border'>
                        <p className="h6">24h Change</p>
                        <p className=""><strong>42,683.55</strong></p>
                    </Col>
                    <Col sm className='border'>
                        <p className="h6">24h High</p>
                        <p className=""><strong>42,683.55</strong></p>
                    </Col>
                    <Col sm className='border'>
                        <p className="h6">24h Low</p>
                        <p className=""><strong>42,683.55</strong></p>
                    </Col>
                    <Col sm className='border'>
                        <p className="h6">24h Volume(USDT)</p>
                        <p className=""><strong>1,521,809,121.42</strong></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Chart />
                    </Col>
                </Row>
                
                </Col>
                <Col sm={4}>
                <Row>
                    <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><i class="bi bi-search"></i></InputGroup.Text>
                        <FormControl
                        placeholder="search"
                        aria-label="search"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Table size="sm">
                    <thead>
                        <tr>
                        <td>Pair</td>
                        <td>Price</td>
                        <td>Charge</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i class="bi bi-star-fill"></i>1INCH/BTC</td>
                            <td>0.00001548</td>
                            <td>+2.76%</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-star-fill"></i>1INCH/BTC</td>
                            <td>0.00001548</td>
                            <td>+2.76%</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-star-fill"></i>1INCH/BTC</td>
                            <td>0.00001548</td>
                            <td>+2.76%</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-star-fill"></i>1INCH/BTC</td>
                            <td>0.00001548</td>
                            <td>+2.76%</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-star-fill"></i>1INCH/BTC</td>
                            <td>0.00001548</td>
                            <td>+2.76%</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-star-fill"></i>1INCH/BTC</td>
                            <td>0.00001548</td>
                            <td>+2.76%</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-star-fill"></i>1INCH/BTC</td>
                            <td>0.00001548</td>
                            <td>+2.76%</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-star-fill"></i>1INCH/BTC</td>
                            <td>0.00001548</td>
                            <td>+2.76%</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-star-fill"></i>1INCH/BTC</td>
                            <td>0.00001548</td>
                            <td>+2.76%</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-star-fill"></i>1INCH/BTC</td>
                            <td>0.00001548</td>
                            <td>+2.76%</td>
                        </tr>
                    </tbody>
                    </Table>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Table>
                            <tr>
                            <td><h5>Maket Trades</h5></td>
                            <td><h5>My Trades</h5></td>
                            </tr>
                    </Table>
                    <MarketData widgetProps={{"colorTheme": "light", "width": "430", "height": "250"}} />
                    </Col>
                    
                </Row>
                
                
                </Col>
            </Row>
            
            
    </Container>
    
	)
}

export default Trade;