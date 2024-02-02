import requests
from bs4 import BeautifulSoup
from pymongo_crud import connect, use_collection, create_athlete

meet = '4467/DIII_New_England_Indoor_Performance_List_'
gender = 'm'

#TODO:
def get_athletes_helper(meet, gender):

    # initialize empty list of athletes

    # create url and connect to db
    url = f'https://tf.tfrrs.org/lists/{meet}?gender={gender}'
    dbname = connect()
    pool = use_collection(dbname, 'test-d3ne')

    # send request to url
    if requests.get(url).status_code == 200:
        html = requests.get(url).text
    else:
        print("Bad status code. Check url.")
        return
    
    # get html of page
    soup = BeautifulSoup(html, 'html.parser')
    
    # get event names
    all_event_names = soup.find_all('h3')
    all_event_names.pop(0)
    all_event_names.pop(10)
    all_event_names.pop(10)
    all_event_names.pop(10)
    event_names = []

    for e in all_event_names:
        e = e.text.strip()

        # remove relay events
        if 'Relay' not in e:
            event_names.append(e)

                                # *** event names done *** #
    
    # get event result tables
    event_list = soup.find_all('table')

    # take out relays
    event_list.pop(10)
    event_list.pop(10)
    event_list.pop(10)

    for i, event in enumerate(event_list):
        # get firstName, lastName, school, gender, value, grade for each

        rows = event.find_all('tr')
        # length = 30; index 0 is col headers

        rows.pop(0)
        total = len(rows)

        for athlete in rows:
            athlete_info = []

            for col in athlete:
                info = col.text.strip()

                if info != '':
                    athlete_info.append(info)

            fname = athlete_info[1].split()[1]

            lname = athlete_info[1].split()[0]
            lname = lname[0:len(lname)-1]

            school = athlete_info[3]

            value = assign_value(int(athlete_info[0])-1, total)
            
            grade = athlete_info[2][-1]

            create_athlete(pool, fname, lname, school, gender, value, grade, event_names[i])

# function to assign a value based on position
def assign_value(pos, total):
    score = round((1-(pos/total))*20)
    if score == 0: score + 1

    return score

get_athletes_helper(meet, gender)