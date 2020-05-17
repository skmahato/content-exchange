class CreateTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :topics do |t|
      t.string :title, null: false, default: ""

      t.timestamps
    end

    create_table :posts do |t|
      t.references :user
      t.string :context, null: false, default: ""

      t.timestamps
    end

    create_table :posts_topics, id: false do |t|
      t.belongs_to :post
      t.belongs_to :topic
    end
  end
end
