FROM node:19-alpine3.16 AS builder
WORKDIR /usr/src/app

COPY . .

RUN npm i

RUN npm run build
RUN ls /usr/src/app/dist

FROM nginx:1.23.4-alpine
# Copy the built files to the container
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Copy the nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

RUN ls -la
# Expose port 80
EXPOSE 80
EXPOSE 8080

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
