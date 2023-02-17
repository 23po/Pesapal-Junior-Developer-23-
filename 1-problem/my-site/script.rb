require 'redcarpet'
require 'webrick'

# Define the paths to the source and output directories
SRC_DIR = 'input'
BUILD_DIR = 'output'



def pre_parser(file) 
  
  puts "Executing pre_parser for file: #{file}"

  metadata = {}
  markdown = File.read(file).split("\n")

  if markdown[0] === "---"  
  puts "Executing the if statement"
  metadata_arr = markdown[1...markdown.rindex("---")]
  
  metadata_arr.each do |line|
    key, value = line.split(": ")
    metadata[key] = value
  end
 
  end 
  
  metadata
end


# Parse Markdown (without metadata) using Redcarpet gem

def parse_content(file)

  full_markdown = File.read(file).split("\n")

  content = full_markdown[(full_markdown.rindex("---") + 1)..-1].join("\n")
  
  renderer = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  renderer.render(content)

end


def generate_pages
  
  # generates output directory if it does not exist
  Dir.mkdir("output") unless Dir.exist?("output")


     
  # loops through each file in the inputs directory
  Dir.glob("inputs/**/*.md").each do |file|
    
    metadata = pre_parser(file)
    content = parse_content(file)

    output_filename = file.sub('inputs/', 'output/').sub(/\.md$/, '.html')

    template_name = file.sub('inputs/', 'templates/').sub(/\.md$/, '.html')

    template = File.read(template_name)
    

    output = template.gsub("{{title}}", metadata["title"])
   
    output = output.gsub("{{content}}", content)
    
    File.write(output_filename, output)
  end
end


def start_server
  server = WEBrick::HTTPServer.new(Port: 8000, DocumentRoot: File.join(Dir.pwd, 'output'))
  
  server.mount('/static', WEBrick::HTTPServlet::FileHandler, 'static')

  Thread.new do
    server.start
  end

  server
end

server = start_server

generate_pages
puts "Pages generated"

# stop the server after 3 mins 
sleep 180
server.shutdown

