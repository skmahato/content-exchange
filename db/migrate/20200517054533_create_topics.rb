class CreateTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :topics do |t|
      t.string :title, null: false, default: ""

      t.timestamps
    end

    create_table :posts do |t|
      t.belongs_to :user
      t.string :context, null: false, default: ""

      t.timestamps
    end

    create_table :post_topics do |t|
      t.belongs_to :post
      t.belongs_to :topic
    end
  end
end
