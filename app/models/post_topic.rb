class PostTopic < ApplicationRecord
  belongs_to :topic
  belongs_to :post
end
