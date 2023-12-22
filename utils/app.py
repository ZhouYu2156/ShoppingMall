import requests

HEADERS = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        }

def get_taobao_suggestion(keyword: str):
    """:return 获取淘宝搜索建议"""
    url = f'https://suggest.taobao.com/sug?code=utf-8&q={keyword}&extras=1&area=c2c&bucketid=atb_search&pid=mm_26632258_3504122_32538762&unid=&clk1=242cdb81775216248cd9508afb1d4385&_=1703058328627'
    return requests.get(url=url, headers=HEADERS)


def get_taobao_category(url):
    # //div[starts-with(@class,'MainPic--mainPicWrapper')]/img/@src
    return requests.get(url=url, headers=HEADERS)


data = get_taobao_category("https://s.taobao.com/search?q=%E5%A5%B3%E8%A3%85&spm=a21bo.jianhua.201867-main.1.5af92a89759Nuj")
print(data.text)
