import requests
from bs4 import BeautifulSoup
import sys
import time


err_str = """Usage - 
python app.py <word>"""

site = '<sitename>'

def time_func(func):
    def wrap(word):
        start_time = time.clock()
        output = func(word)
        end_time = time.clock()
        print("Time taken: {} milli".format(1000 * (end_time - start_time)))
        
        return output
    
    return wrap


@time_func
def get_word_synonyms(word):
    html_doc = requests.get('http://www.' + site + '.com/browse/' + word + '?s=t').text

    soup = BeautifulSoup(html_doc, 'html.parser')

    if 'no ' + site + ' results' in str(soup):
        return []

    all_divs = [el for el in soup.find_all('div') if 'relevancy-list' in str(el)]
    div_rel_list = all_divs[len(all_divs) - 1]
    all_uls = div_rel_list.find_all('ul')

    synonyms = []
    for ul in all_uls:
        for el in ul:
            try:
                word = el.find('span').text
                synonyms.append(word)
            except AttributeError:
                pass

    return synonyms


def main(args):
    if len(args) < 2:
        print(err_str)
        sys.exit(1)

    print(get_word_synonyms(args[1]))


if __name__ == '__main__':
    main(sys.argv)

