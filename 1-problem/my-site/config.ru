# require 'webrick'
# require 'rack'

# # Rack middleware to serve static files from the "public" directory
# use Rack::Static, :urls => ["/css", "/js", "/images"], :root => "static"

# # basic Rack app that responds to all requests
# app = -> (env) { [200, {"Content-Type" => "text/plain"}, ["Hello, world!"]] }

# # Webrick server
# server = WEBrick::HTTPServer.new({
#   :Port => 8000,
#   :app => app
# })

# # Starts the server
# server.start
