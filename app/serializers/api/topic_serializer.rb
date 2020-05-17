class Api::TopicSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :posts, through: :post_topics
end
