from node as builder

workdir /usr/src/app
copy client/package*.json ./
run npm install

copy client/ .

run npm run-script build:prod

from nginx

copy --from=builder /usr/src/app/dist/site /usr/share/nginx/html
copy nginx.conf /etc/nginx/nginx.conf

cmd ["nginx", "-g", "daemon off;"]
