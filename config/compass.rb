require 'compass/import-once/activate'
# Require any additional compass plugins here.

# config.rb

#!/usr/bin/env ruby
#
# This is the Compass configuration file for scss and sass file processing.
# Compass Configuration Reference:
#   http://compass-style.org/docs/tutorials/configuration-reference/
#
# The compass utility looks for the configuration file in the following
# locations:
#   - config/compass.rb
#   - .compass/config.rb
#   - config/compass.config
#   - config.rb
#   - src/config.rb
# If this file is renamed or moved it must match one of the supported
# paths above or the compass command won't find it unless the --config
# option is specified.

#require 'bundler/setup'

# Load Compass plugins
# require 'bootstrap-sass'
require 'bourbon'
# require 'meyer-reset'
# require 'susy'
# require 'zurb-foundation'

#
# Compass configuration properties
#
# To view the resolved value of any property below, use:
#   compass config -p PROPERTY
#

# http_path - The path to the project when running within the web
http_path    = "/"

# The target directory where the css stylesheets are kept.
# Relative to the project_path.
css_dir      = "output/assets/styles"

# The source directory where the sass stylesheets are kept.
# Relative to the project_path.
sass_dir     = "content/assets/styles"

# The source directory where the images are kept.
# Relative to the project_path.
images_dir   = "output/assets/images"

# The source directory where the javascripts are kept.
javascripts_dir = "content/assets/javascripts"

# The output style for the compiled css.
#   :nested     - Each CSS rule and property on a separate line,
#                 Rules are indented based on nesting.
#   :expanded   - Each CSS rule and property on a separate line.
#   :compact    - Each CSS rule on a single line
#   :compressed - Minimum amount of space with almost no whitespace
# For more details, on sass output styles, see
#   http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#output_style
##output_style = :compact
output_style = if environment == :production then :compact else :expanded end

  # Indicates whether the compass helper functions should generate
  # relative urls from the generated css to assets, or absolute urls
  # using the http path for that asset type.
  relative_assets = true

  # old stuffs
  # output_style = :compressed
  # preferred_syntax = :scss
  # relative_assets = true
  # sass_options = {
  #   :syntax => :scss
  # }
  # Options passed directly to the Sass compiler.
  # Must be defined in this file to work with compass command.
  # For more details on the sass options, see
  #   http://sass-lang.com/docs/yardoc/SASS_REFERENCE.md.html#options
  sass_options = {
    :syntax => :scss  # use SCSS syntax
    #:full_exception => true,
    #:line_comments => false,
    #:trace_selectors => false
    # The debug_info option generates copious output to support the Firebug
    # FireSass plugin for Firefox which shows the associated Sass line number.
    #:debug_info => true
  }
  
