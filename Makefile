dockerRsync:
	docker-osx-dev -e .git -e node_modules

dockerRun:
	docker run -it --name sampleapp -v ${PWD}/:/usr/src/ -p 3000:3000 -w /usr/src/ node:4.1.1 /bin/bash

dockerStart:
	docker start -ai sampleapp

dockerAttach:
	docker exec -it sampleapp bash

dockerRunSelenium:
	docker run --name seleniumc -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:2.47.1
