class Image < ApplicationRecord
    has_many :vocabularies, dependent: :destroy
end
