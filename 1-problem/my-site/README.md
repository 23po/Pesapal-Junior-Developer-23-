/depfu/dependencies/:vcsType/:project+

# My Static Site Generator

For this project, I used Ruby to build a simple program that generates a static website from markdown, while applying static content.

- Inputs --> this directory contains the markdown
- Static --> this contains static files like css
- Output --> this is the build directory 

The generator can be called by running ruby script.rb on the terminal. script.rb contains the key methods/functions:

## Functions

- pre_parser
- parse_content
- generate_pages
- start_server

### pre_parser

Parses a markdown file for metadata. 

Metadata in this context is data at the top of a .md file which provides additional information about the content, e.g title.

Metadata is delineated by "---" at the befinning, and "---" at the end.

### parse_content

This function parses the content in the markdown. It would not be possible without the Redcarpet library. 

--> https://github.com/vmg/redcarpet

### generate_pages

- This function will loop through all files with a .md ending in the inputs folder

- For each file it calls the pre_parser and parse_content methods to generate metadata and content

- The function creates an output_filename by substituting the current file path i.e inputs/index.md becomes output/index.html

- The function predicts the appropriate template for the current file by substiting its path i.e inputs/index.md is predicted to template/index.html

- It will then do a global substitution of the generated metadata and content approrpiately into the template, saving this in te output variable 

- Finally, it writes the output into the output_filename

sub/gsub are similar to string replace/replaceAll in javascript. For more on how the ruby sub & gsub methods work, it is well explained here --> https://medium.com/@khalidh64/sub-gsub-in-ruby-e4c611d33890

### start_server

- this function starts a new instance of a ruby webrick server. 

- WEBrick is an HTTP server toolkit that can be configured as an HTTPS server, a proxy server, and a virtual-host server. You can find more about --> https://github.com/ruby/webrick

- the function inclues a handler for files from the static directory

**Note**: the code can be tested  on localhost port 8000
