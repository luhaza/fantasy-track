import requests
from bs4 import BeautifulSoup

meet = '4467/DIII_New_England_Indoor_Performance_List_'
gender = 'm'

#TODO: return 3D list of athletes for each event (WIP!)
def get_athletes_helper(meet, event, gender):

    # initialize empty list of athletes
    athlete_list = []

    # create url
    url = f'https://tf.tfrrs.org/lists/{meet}?gender={gender}'
    athletes = {}

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
    event_names = []

    for e in all_event_names:
        e = e.text.strip()

        # remove relay events
        if 'Relay' not in e:
            event_names.append(e)

    # get athletes for each event
    event_list = soup.find_all('table')

    for e in event_list:
        event = e.find('tbody')
        rows = event.find_all('tr')

        for row in rows:
            athlete_info = []
            cols = row.find_all('td')


            if (len(cols) > 7):
                for col in cols:
                    info = col.text.strip()
                    info = info.replace('\n','')
                    athlete_info.append(info)

            # athlete_info.pop(0)
            # athlete_info.pop(4)
            # athlete_info.pop(4)

            print(len(athlete_info), athlete_info)

            # df.add(athlete_info)

#TODO: function to assign a value based on qualifying mark
def assign_value(mark):
    pass