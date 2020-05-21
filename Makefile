up:
	docker-compose up
yarn:
	docker exec -ti reactSPA yarn $(filter-out $@,$(MAKECMDGOALS))