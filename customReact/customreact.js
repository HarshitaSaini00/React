function customRender(reactElement,container){
    /*
    const domElement = document.createElement(reactElement.type) -- yahan par humne ek tag create kiya react element ke type ke according (a) like that <a></a>
    domElement.innerHTML = reactElement.Children -- after that is line ne tag ke andar children wala text add kardiya  
    domElement.setAttribute('href',reactElement.props.href) -- isme humne a tag ke andar attributes add kardiye like <a href ='https://google.com></a> like that 
    domElement.setAttribute('target',reactElement.props.target) -- yahan kuch esa hua hai <a href ='https://google.com target='_blank' ></a> it means wo link new tab par open hoga

    container.appendChild(domElement) -- yahan par humne is tag ko html code ke andar add kardiya 
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML =reactElement.Children
    for(const props  in reactElement.props){ /*yahan par humne loop lagayi normally jo react element me props ko legi ek variable me prop me this is very basic*/
        if(prop ==='children')continue /* is line ko ignore kar sakte hai */
        domElement.setAttribute(prop ,reactElement.props[prop]) /*yahan par hum attributes ko one by one set nhi kar rahe hai pahle prop me jo value aayegi wo uske baad reactelement.props[prop]ye us prop ki value access karega */
    }
    container.appendChild(domElement)
}

const reactElement ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)