# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Images
mean = Image.create(category: 'mean', url: 'https://cdn.costumewall.com/wp-content/uploads/2017/03/cruella-de-vil.jpg')
indifferent = Image.create(category: 'indifferent', url: 'https://images.squarespace-cdn.com/content/v1/54992035e4b0c49940a59e49/1586714639270-6O27VM796316NPD4R3DH/ke17ZwdGBToddI8pDm48kM67dVXED_yMBjHtlg_uL0sUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcNPDvIAs8f1WUKmWSu3fO4mWtI-U7sMj89S5lCDO4xNISmZH7m9nvOKn--z65CT5h/image-asset.jpeg?format=2500w')
smart = Image.create(category: 'smart', url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3100d30-b066-47b5-9972-f34bfebcb82e/de89d31-398603fe-20fa-4f01-8718-8df57b020579.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzMTAwZDMwLWIwNjYtNDdiNS05OTcyLWYzNGJmZWJjYjgyZVwvZGU4OWQzMS0zOTg2MDNmZS0yMGZhLTRmMDEtODcxOC04ZGY1N2IwMjA1NzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u-WnmksmImkX9siInvxGh_aUSHmEKng72oD2F6m6nxs')

#Save only Images
mean.save
indifferent.save
smart.save

#Nested vocabularies
mean.vocabularies.build(word: "abase", description: "to humiliate, degrade", trigger: "fall into abyss").save
indifferent.vocabularies.build(word: "apathetic", description: "lacking concern, emotion", trigger: "no empathy").save
smart.vocabularies.build(word: 'cogent', description: "intellectually convincing", trigger: "the FBI agent was coherent").save
mean.vocabularies.build(word: 'demean', description: 'to lower the status or stature of something', trigger: 'mean stunts to humiliate').save

