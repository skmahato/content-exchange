class CreateTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :topics do |t|
      t.string :title, null: false, default: ""

      t.timestamps
    end

    create_table :posts do |t|
      t.references :user,     null: false, foreign_key: true
      t.string :context, null: false, default: ""

      t.timestamps
    end

    create_table :post_topics do |t|
      t.references :post,     null: false, foreign_key: true
      t.references :topic,     null: false, foreign_key: true
    end
  end
end
