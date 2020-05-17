class Api::TopicSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_and_belongs_to_many :posts
end
