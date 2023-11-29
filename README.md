## How to start this app

First, you need to build the project with the following command 

Write it - `docker build -t react-todo:latest .`

Second, you need to start the project

Write it - `docker run --name todo-test -d -p 3000:3000 react-todo:latest`

Thirdly, to stop the project use this

Write it - `docker stop todo-test`

### By Ihor Vitrikush
