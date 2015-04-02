# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

include LipsumPlaceHolder
# include DateTimeHandler

# include Nanoc::Filters::Mustache
include Nanoc3::Helpers::Blogging
include Nanoc3::Helpers::Tagging
include Nanoc3::Helpers::Rendering
include Nanoc3::Helpers::LinkTo
