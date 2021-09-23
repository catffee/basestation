import re
from sys import argv


# First, read the code and preprocess it
def readcode(path):
    string = ''
    with open(path, 'r', encoding='UTF-8') as file:
        stringline = file.readlines()
    for sl in stringline:
        string += sl.strip() + ' '
    string = re.sub("\"([^\"]*)\"|\/\*([^\*^\/]*|[\*^\/*]*|[^\**\/]*)*\*\/|\/\/.*", "", string)
    return string

# Second, calculate the number of keywords
def countkeywords(string):
    cal = {}
    caltotal = 0
    keywordlist = ['auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum',
                   'extern', 'float', 'for', 'goto', 'if', 'int', 'long', 'register', 'return', 'short', 'signed',
                   'sizeof', 'static', 'struct', 'switch', 'typedef', 'union', 'unsigned', 'void', 'volatile', 'while']
    for keyword in keywordlist:
        k = len(re.findall("[^0-9a-zA-Z\_]" + keyword + "[^0-9a-zA-Z\_]", string))
        if k != 0:
            cal[keyword] = k
            caltotal += k
    return caltotal

def output():

    keywordsnum = countkeywords(code)
    print("total num: ", keywordsnum)


if __name__ == '__main__':
    # read args
    path = argv[1]
    code = readcode(path)
    output()