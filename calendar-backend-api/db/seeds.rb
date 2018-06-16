# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@user = User.create(name: "Rachel")

@event = Event.create([
  {description: 'Go to the Dentist',
   date: Time.now.strftime("%m/%d/%y"),
   start_time: Time.now.strftime("%I:%M"),
   end_time: Time.now.strftime("%I:%M")
  }
  ])
