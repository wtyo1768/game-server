docker build -t nodeserver ./server

docker stop nodeserver 
	
docker run --name nodeserver -d -p 3000:3000 --rm nodeserver
