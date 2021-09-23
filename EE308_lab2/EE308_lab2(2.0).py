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

# Third, calculate the number of switch and the number of case in each switch-case
def countsc(string):
    switchnum = 0
    casenum = []
    switchlist = re.finditer(r"\sswitch\([^)]*\)\s*{", string)
    for i in switchlist:
        switchnum += 1
        index = i.end()
        caselist = re.findall(r"\scase\s", string[index:])
        casenum.append(len(caselist))
    for j in range(switchnum - 1):
        casenum[j] = casenum[j] - casenum[j + 1]
    return switchnum, casenum

def output():

    switchnum, casenum = countsc(code)
    print("switch num: ", switchnum)
    print("case num:", " ".join([str(i) for i in casenum]))

if __name__ == '__main__':
    # read args
    path = argv[1]
    code = readcode(path)
    output()