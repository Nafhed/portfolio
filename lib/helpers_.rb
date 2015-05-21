# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

include LipsumPlaceHolder
# include DateTimeHandler

require "nanoc/toolbox"

# include Nanoc::Filters::Mustache
include Nanoc3::Helpers::Blogging
include Nanoc3::Helpers::Tagging
include Nanoc3::Helpers::Rendering
include Nanoc3::Helpers::LinkTo

# Helpers of the nanoc-toolbox
include Nanoc::Toolbox::Helpers::GoogleAnalytics
include Nanoc::Toolbox::Helpers::TaggingExtra
