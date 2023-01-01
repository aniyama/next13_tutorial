up:
	docker-compose up
up-d:
	docker-compose up -d
down:
	docker-compose down
ps:
	docker-compose ps
ps-a:
	docker-compose ps -a

gen:
	npx supabase login & \
	npx supabase init & \
	npx supabase link --project-ref $(name) & \
	npx supabase gen types typescript --linked > database.types.ts