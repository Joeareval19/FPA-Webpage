# Use nginx to serve static files
FROM nginx:alpine

# Copy the website files to nginx html directory
COPY ["Wepage V2", "/usr/share/nginx/html"]

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
