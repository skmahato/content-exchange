class Api::UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :admin
end
