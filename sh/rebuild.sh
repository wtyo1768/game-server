docker stop nginxserver && docker rm nginxserver
docker build -t nginxserver ./nginx/
docker run -d -p 80:80 --name nginxserver nginxserver
#docker run -itd -p 7777:80 -v /mnt/pix/core-dist:/usr/share/nginx/html -w /usr/share/nginx/html --name="core" core