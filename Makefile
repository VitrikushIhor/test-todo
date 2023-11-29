build:
	docker build -t react-todo:latest .

run:
	docker run --name todo-test -d -p 3000:3000 react-todo:latest

stop:
	docker stop todo-test
