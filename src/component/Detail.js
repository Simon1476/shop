// class Detail2 extends React.Component {
//   componentDidMount() {
    
//   }
//   componentWillUnmount() {

//   }
// }
import {  Nav  } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
import db from '../db/Data.js';
import styled from 'styled-components';
import './Detail.scss';
import React, { useEffect, useState } from "react";
import {CSSTransition} from "react-transition-group";


let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
 font-szie : 25px;
 color: ${ props => props.색상}
`;
export default function Detail(props) {
 
 let  {id}  = useParams();
 let history = useHistory();
 let [alert, alertState] = useState(true);
 let [inputData, inputData변경] = useState("");
 let 껍데기;
 let 찾은상품 = props.shoes.find(function(물품){
   return 물품.id ==  id;
 })

 let [누른탭, 누른탭변경] = useState(0);
 let [스위치, 스위치변경] = useState(false);
 
 useEffect(() => {
   let timer = setTimeout( () => {alertState(false) }, 2000);
   return () => { clearTimeout(timer)}
 }, []);

 return (
    <div className="container">
      <박스>
        <제목 className="red" >Detail</제목>
      </박스>
      {inputData}
      <input onChange={(e)=> {
        inputData변경(e.target.value)
      }}/>
      {
        alert === true ? 
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
        : null
      }
      <div className="row">
        <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>

            
            <Info 재고={props.재고}></Info>

            <button className="btn btn-danger" onClick={() => {
              껍데기 = [...props.재고];
              껍데기 = [9, 11, 12];
              props.재고변경(껍데기);
            }}>주문하기</button> 
            <button className="btn btn-danger" onClick={() => { 
              history.push('/');
             }}>뒤로가기</button> 
        </div>
      </div>

    <Nav  className="mt-5" variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false);  누른탭변경(0)}}>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={() => { 스위치변경(false); 누른탭변경(1)}}>Option 2</Nav.Link>
      </Nav.Item>
    </Nav>
    
    <CSSTransition in={스위치} classNames="wow" timeout={500}>
      <TabContent 누른탭 ={누른탭} 스위치변경={스위치변경} />
    </CSSTransition>
      
    </div>
 );
}

function TabContent(props) {
  
  useEffect(() => {
    props.스위치변경(true);
  });
  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다.</div>
  }
  else if (props.누른탭 === 1){
    return <div>1번째 내용입니다.</div>
  }else if(props.누른탭 === 2) {
    return <div>2번째 내용입니다.</div>
  }
  
}
function Info(props) {
  return (
    <p>재고 : {props.재고[0]}</p>
  )
}