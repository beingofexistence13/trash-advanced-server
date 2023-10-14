#!/usr/bin/env python
# coding: utf-8

# pip install requests rows[html]

from io import BytesIO
from urlparse import urljoin

import requests
import rows

PROGRAMMING_LANGUAGES_URL = \
        'https://en.wikipedia.org/wiki/List_of_programming_languages'

def _convert_row(row):
    url = urljoin('https://en.wikipedia.org/', row.url)
    if 'redlink=1' in url:  # Wikipedia article does not exist
        url = None

    return {'name': row.name,
            'wikipedia_url': url, }


def download_programming_languages(filename):

    response = requests.get(PROGRAMMING_LANGUAGES_URL)

    table = rows.import_from_xpath(
            BytesIO(response.content),
            encoding=response.encoding,
            rows_xpath='//*[@id="mw-content-text"]/div/ul/li/a',
            fields_xpath={'name': './/text()',
                          'url': './/@href', })
    table = rows.import_from_dicts(map(_convert_row, table))

    rows.export_to_csv(table, filename)

    return table


if __name__ == '__main__':
    download_programming_languages('programming-languages.csv')