class CreateVocabularies < ActiveRecord::Migration[6.1]
  def change
    create_table :vocabularies do |t|
      t.string :word
      t.text :description
      t.string :trigger
      t.belongs_to :image, null: false, foreign_key: true

      t.timestamps
    end
  end
end
