docker stop kserver && docker rm kserver
docker build -t kserver ./server/
docker tag kserver nodeserver

#docker run -itd -p 7777:80 -v /mnt/pix/core-dist:/usr/share/nginx/html -w /usr/share/nginx/html --name="core" core