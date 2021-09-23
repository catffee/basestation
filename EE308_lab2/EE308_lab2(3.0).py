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