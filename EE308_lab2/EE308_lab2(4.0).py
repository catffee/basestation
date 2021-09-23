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

# Finally, calculate the number of if-else and if-elseif-else
def countifelse(string):
    if_stack = []
    ifelse_num1 = 0
    ifelse_num2 = 0
    match_elseif = False
    alllist = re.findall(r"else if|\s*else[{\s][^i]|if", string)
    for i in range(len(alllist)):
        if alllist[i] == "if":
            if_stack.append(1)
        elif alllist[i] == "else if":
            if_stack.append(2)
        else:
            while True:
                if if_stack.pop() == 2:
                    match_elseif = True
                else:
                    break
            if match_elseif:
                ifelse_num2 += 1
                match_elseif = False
            else:
                ifelse_num1 += 1
    return ifelse_num1, ifelse_num2



def output(usage):
    if usage >= 1:
        keywordsnum = countkeywords(code)
        print("total num: ", keywordsnum)
    if usage >= 2:
        switchnum, casenum = countsc(code)
        print("switch num: ", switchnum)
        print("case num:", " ".join([str(i) for i in casenum]))
    if usage >= 3:
        ifelse_num1, ifelse_num2 = countifelse(code)
        print("if-else num: ", ifelse_num1)
    else:
        if_else_num1, ifelse_num2 = countifelse(code)
        print("if-elseif-else num: ", ifelse_num2)

if __name__ == '__main__':
    # read args
    path, usage = argv[1], int(argv[2])
    code = readcode(path)
    output(usage)