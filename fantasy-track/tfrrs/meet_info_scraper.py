import requests
from bs4 import BeautifulSoup

meet = '4467/DIII_New_England_Indoor_Performance_List_'
gender = 'm'

def get_athletes(meet, gender):
    url = f'https://tf.tfrrs.org/lists/{meet}?gender={gender}'
    athletes = []

    if requests.get(url).status_code == 200:
        html = requests.get(url).text
    else:
        print("Bad status code. Check url.")
        return
    
    soup = BeautifulSoup(html, 'html.parser')
    # print(soup)
    
    event_list = soup.find_all('table')[0]
    event = event_list.find('tbody')
    rows = event.find_all('tr')

    # print(rows[28])

    for row in rows:
        athlete_info = []
        cols = row.find_all('td')

        for col in cols:
            athlete_info.append(col.text.strip())

        athletes.append(athlete_info)

    print(athletes)
    print(len(athletes))

    #TODO: loop for all events
    

get_athletes(meet, gender)