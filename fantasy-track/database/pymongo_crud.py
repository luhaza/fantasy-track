from pymongo.mongo_client import MongoClient
import certifi

# connection to cluster
def connect():
   uri = "mongodb+srv://root:1234@fantasy-track.3cm5ujw.mongodb.net/?retryWrites=true&w=majority"

   # Create a new client and connect to the server
   client = MongoClient(uri, tlsCAFile=certifi.where())

   # Send a ping to confirm a successful connection
   try:
      client.admin.command('ping')
      print("Pinged your deployment. You successfully connected to MongoDB!")
   except Exception as e:
      print(e)

   return client["athlete_pool"]

# use collection (new or old)
def use_collection(database, collection_name):
   return database[collection_name]

# create and insert a new athlete
def create_athlete(collection, first_name, last_name, school, gender, value, grade):
   #TODO: handle duplicate key error appropriately

   id = first_name[0:2] + last_name[0:2] + '-' + gender + '-' + school[0:2] + '-' + str(grade)

   athlete = {
      "_id" : id.lower(),
      "first" : first_name,
      "last" : last_name,
      "school" : school,
      "gender" : gender,
      "value" : value,
      "grade" : grade
   }

   collection.insert_one(athlete)

# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":   
  
   # Get the database
   dbname = connect()