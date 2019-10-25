# Food Planner BackEnd
## Prerequisite
- [ ] Docker installed (install docker from official website)
- [ ] Maven installed (brew install maven)

## How to run
How to build and push foodplanner manually:
```
mvn clean install dockerfile:build
```

See built images:
```
docker images
```

Run application using docker:
```
docker container run -p 80:80 -t runtimeerror/food-planner-back-end
```

Check is the website is alive
```
curl http://localhost:80
```

Check running docker container
```
docker ps
```

Stop docker container
```
docker stop $(docker ps -q --filter ancestor=runtimeerror/food-planner-back-end)
```