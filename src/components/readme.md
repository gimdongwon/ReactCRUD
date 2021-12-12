# 딥브레인 풀스택 개발자 교육 1주차 과제

## 과제1. map, concat, ... spread 연산자에 대해 알아보고 실제 동작하는 코드를 작성하시오.

### [미리보기](https://eloquent-pasteur-9f5784.netlify.app/mytest)

### [Github](https://github.com/gimdongwon/ReactCRUD/tree/main/src/components)

1. map

map은 배열의 각 요소에 함수를 적용해서, 그 반환값을 요소로 갖는 `새로운 배열`을 만든다. forEach와 비슷해 보이지만, 새로운 배열을 만든다는 점에서 다르다.

```js
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item) => item ** 2);
console.log(arr, newArr); // [1,2,3,4,5], [1,4,9,16,25]
```

2. concat

cocncat 은 여러 배열을 연결해서 새 배열을 만들 때 사용된다.

```js
const arr = [1, 2];
arr.concat([3, 4], [5, 6]);
console.log(arr); // [1,2,3,4,5,6]
```

3. ...spread 연산자

spread 문법을 사용하면 배열이나 객체를 다른 배열이나 객체로 쉽게 삽입할 수 있다. 나머지 매개 변수 문법과 같은 기호인 ...가 사용되지만, 그 의미는 다르다. 앝은 복사를 사용하며 배열 전체를 쉽게 복사할 수 있닫.

### 과제 1 실습진행

cancat, ...spread 연산자, map을 이용하여 구현하였습니다.

this.setState를 사용하여 추가, 변경과 삭제를 구현하였는데 state값이 변경될 때 새로운 배열을 생성하여 변경하였습니다. 이유는 추가적으로 발생하는 사이드 이펙트를 방지하기 위해서 입니다. 예상되는 사이드 이펙트로는 변경시 의존성을 가지고 있는 다른 객체값이 예상외의 변경이 일어날 수 있기 때문입니다.

[React에서 key값을 idx로 지정하면 안되는 이유](https://velog.io/@vlfflq2004/React-Index%EB%A5%BC-key%EB%A1%9C-%EC%93%B0%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0)

## 과제 2 TodoList 분석해오기

1. styled-component로 css in js 사용.
2. clock setInterval로 구현.
3. Todo 컴포넌트에서 TodoList로, TodoList에서 TodoRow로 props 이용.
4. css가 우측으로 치우쳐져 있음.
5. enter 입력시 value값 state의 배열로 추가됨.
6. 2개의 TodoRow 중 위 컴포넌트는 snow로 props 값 고정이나 하단 컴포넌트는 추가로 입력된 value를 배열에 추가하도록 구성됨.
