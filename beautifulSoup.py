from bs4 import BeautifulSoup
from collections import defaultdict
import pandas as pd 


table_list = defaultdict(list)
Marathi = ['हळद पावडर', 'कुमकुम', 'अगरबत्ती', 'कर्पूर (कापूर)', 'धूप', 'कलासम', 'मध', 'सुकी फळे (मिश्र)', 'नवा धन्या', 'तांदूळ', 'तांदळाचे पीठ', 'साखर', 'पांढरा धागा (3 स्तर)', 'ब्लाउजचे तुकडे', 'साडी', 'धारबे', 'सुपारी नट्स', 'दिपम तेल', 'कापूस विक्स', 'गोलाकार कापूस वात', 'मॅच बॉक्स', 'होम स्टिक्स', 'हरली समिधा', 'नवग्रह समिधा', 'हवन समग्री', 'माऊली', 'दानवंती पिशवी', 'बट्टाडा हरल्लु', 'पांढरी मोहरी', 'रंग', 'मातीची दीपा', 'गंगाजल', 'सुके खोबरे', 'गोमुत्र', 'दोथी', 'रेशमे वस्त्र', 'लाल कपडा (तावल)', 'चांदण पावडर', 'जानिवार', 'काळी तीळ', 'धोने', 'गेज्जे वस्त्र', 'लावणाचा', 'वास्तु प्रथमा', 'drone प्लेट्स', 'तूप', 'विभुडी', 'गुलाब पाणी', 'बॉक्स गूळ', 'होम कुंडा', 'हळद/हळदीच्या काड्या', 'करजुरा', 'मिश्र फळे', 'झेंडू हार', 'चामंती माला', 'तुळशीची माला', 'गुलाबाची माळा', 'सैल फुले', 'फुलांचा हार (माला)', 'नारळ', 'बेताल पाने', 'तूप', 'दूध', 'दही', 'आंब्याची पाने', 'केळीची पाने', 'केळीची झाडे', 'माची पत्री', 'भोपळा', 'लिंबू', 'हिरवे गवत', 'बेल पाने', 'केळी']
with open("Inventory/test.txt",mode = 'r') as fp:
    soup = BeautifulSoup(fp, "html.parser")

table = soup.find('table',{'class':'table'})

heading = []
head = table.find('tr')
for i in head:
    h = i.text.rstrip()
    if h != '':
        heading.append(h)

rows = table.find_all('tr')

for item in range(1,len(rows)):
    i = rows[item].find_all('td')

    table_list[heading[2]].append(i[2].text) #--- English
    table_list[heading[3]].append(i[3].text) #--- Hindi
    table_list[heading[4]].append(i[4].text) #--- Telgu
    table_list[heading[5]].append(i[5].text) #--- tamil
    table_list[heading[6]].append(i[6].text) #--- Kannada


table_list['Marathi'] = Marathi

# print(table_list)

language_df = pd.DataFrame(table_list)

print(language_df.head())

