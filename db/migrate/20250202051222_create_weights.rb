class CreateWeights < ActiveRecord::Migration[7.1]
  def change
    create_table :weights do |t|
      t.integer :weight, null: false
      t.integer :bmi,    null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
