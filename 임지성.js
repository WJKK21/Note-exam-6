# **Note exam -6**

```
원본
let basicData = {
  header : {
    id: "header",
    type: "div",
    children: null,
  },
  main : {
    id: "main",
    type: "div",
    children: null,
  },
  footer : {
    id: "footer",
    type: "div",
    children: null,
  }
}

console.log(basicData.footer)

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function exampleOne (object, array) {
// basic 객체의 children 속성이 null 데이터타입이 할당되어있는지를 판별하고 
// null 데이터타입이 할당되어있으면 매개변수을 각각 할당한다.
  let value;
//header, main. footer HTML 태그를 생성하는 로직으로
// 최종적으로 문자열로 제작된 HTML 태그 데이터를 가공/편집하시오.
  return value;
}

console.log(exampleOne(basicData,elementData))
```

[[javascript] 중첩된 객체에서 원하는 필드를 뽑아오기](https://elvanov.com/2286)

```jsx
let basicData = {
  header : {
    id: "header",
    type: "div",
    children: null,
  },
  main : {
    id: "main",
    type: "div",
    children: null,
  },
  footer : {
    id: "footer",
    type: "div",
    children: null,
  }
}

//console.log(basicData.footer)

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

//객체 안에 객체 접근 후 배열을 할당
//for in ?  배열용 * for of

function exampleOne (object, array) {
  for (let key in object) {
    if((object[key].children === null) {
      object[key].children.shift(array) 
    }
  }
  // console.log(object) {id: 'header', type: 'div', children: null}
  // console.log(object.length) undefined 

/*   for (let i = 0;  i < object.length; i++) {
    if(object.length[i] === null) {
      object.push (elementData[i])
      let value = document.getElementById('root').appendChild(value)
    }
  } */

  console.log(object) 
  // basic 객체의 children 속성이 null 데이터타입이 할당되어있는지를 판별하고 
  // null 데이터타입이 할당되어있으면 매개변수을 각각 할당한다.
let value;
  //header, main. footer HTML 태그를 생성하는 로직으로
  // 최종적으로 문자열로 제작된 HTML 태그 데이터를 가공/편집하시오.

  return value
}

console.log(exampleOne(basicData,elementData))
```

생각을 버리자 해보자…
