class Api::PostSerializer < ActiveModel::Serializer
  attributes :id, :context

  has_many :topics, through: :post_topics
  has_many :images
end
