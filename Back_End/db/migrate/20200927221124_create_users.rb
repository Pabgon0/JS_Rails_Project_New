class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.belongs_to :review
      t.timestamps
    end
  end
end
