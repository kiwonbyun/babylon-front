[atoms]
재사용을 목적으로 한다.
하나의 html태그를 지칭한다.
특정한 로직이나 스타일을 포함할 수 있다.
이벤트 핸들러는 포함하지 않는다.

[molecules]
재사용을 목적으로 한다.
여러개의 atoms, html태그를 포함한다.
특정한 로직이나 스타일을 포함할 수 있다.
이벤트 핸들러는 포함하지 않는다.

[organism]
재사용을 목적으로 한다.
여러개의 atoms, molecules, html을 포함한다.
query, mutation을 직접 포함할 수 있다.
복잡한 로직을 포함할 수 있다.
client component를 포함하고 서버사이드 fetch 함수를 호출하는 server component(데이터 주입 목적)

[template]
재사용을 목적으로 하지 않는다.
query, mutation을 직접 포함할 수 있다.
복잡한 로직을 포함할 수 있다.
그 자체로 한 페이지를 이룰 수 있는 크기의 컴포넌트이다.
