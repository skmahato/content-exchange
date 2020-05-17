class CreateSubscriptions < ActiveRecord::Migration[6.0]
  def change
    create_table :subscriptions do |t|
      t.belongs_to :user
      t.belongs_to :topic

      t.timestamps
    end
  end
end
