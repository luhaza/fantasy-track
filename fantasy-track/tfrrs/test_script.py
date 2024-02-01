# Get the database using the method we defined in pymongo_test_insert file
import pymongo_crud as m
dbname = m.connect()
pool = m.use_collection(dbname, 'test_pool')

# collection, firstName, lastName, school, gender, value, grade
m.create_athlete(pool, "Graham", "Blanks", "Harvard", 'm', 16, 4)
m.create_athlete(pool, "Nico", "Young", "NAU", 'm', 16, 3)
m.create_athlete(pool, "Luke", "Hauser", "Washington", 'm', 15, 4)
m.create_athlete(pool, "Will", "Sumner", "Georgia", 'm', 15, 2)
m.create_athlete(pool, "Colin", "Sahlman", "NAU", 'm', 14, 2)
m.create_athlete(pool, "Ethan", "Gregg", "UW-Lacrosse", 'm', 14, 5)
m.create_athlete(pool, "Christian", "Patzka", "UW-Whitewater", 'm', 12, 3)
m.create_athlete(pool, "Nate", "Lentz", "Williams", 'm', 10, 4)
m.create_athlete(pool, "Rick", "Yanashita", "Williams", 'm', 6, 2)
m.create_athlete(pool, "Luke", "Zanuck", "Williams",'m', 6, 2)