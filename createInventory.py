from main import * 
import os 
import requests
import json

class Inventory:

    __Item = ""
    __Quantity = 0 
    __File_list = []
    __Item_dict = {"English": [],"Marathi":[], "Hindi":[]}
    __rejected_Items = []
    __headers = {
                "content-type": "application/json",
                "X-RapidAPI-Key": "62b9b7e654msh9457562063285cep179522jsn52a75f74baee",
                "X-RapidAPI-Host": "opentranslator.p.rapidapi.com"
              }
    __url = "https://opentranslator.p.rapidapi.com/translate"

    __common_Item_list = set()
    puja_marathi = ""

    def createInventory(self):

        self.__File_list = os.listdir('Inventory')

        for file_open in self.__File_list:
            with open(file='Inventory/'+file_open,mode='r') as text:
                # print(text.readline())

                print(file_open)
                for line in text.readlines():

                    self.__Item = line.strip().split(":")[0]
                    print(self.__Item)

                    if self.__Item not in self.__common_Item_list or self.__Item != ' ':
                        self.__Item_dict['English'].append(self.__Item)
                        self.__common_Item_list.add(self.__Item)
                        payload_hindi = {"text": self.__Item,"target": "hi"}   #-------  Hindi Translation
                        response_hindi = requests.post(self.__url, json=payload_hindi, headers=self.__headers)
                        self.__Item_dict['Hindi'].append(response_hindi.json()[0]['result']['text'])
                        print(response_hindi.json()[0]['result']['text'])
                        payload_marathi = {"text": self.__Item,"target": "mr"}   #-------  Marathi Translation
                        response_marathi = requests.post(self.__url, json=payload_marathi, headers=self.__headers)
                        self.__Item_dict['Marathi'].append(response_marathi.json()[0]['result']['text'])
                        print(response_marathi.json()[0]['result']['text'])
                    elif self.__Item in self.__common_Item_list:
                        self.__common_Item_list.append(self.__Item)
                        continue      
                exDict = {'exDict': self.__Item_dict}
                with open(file='translated/'+file_open,mode='w') as text1:
                        text1.write(json.dumps(exDict))
                puja_payload = {"text": file_open ,"target": "mr"}
                response_puja = requests.post(self.__url, json=puja_payload, headers=self.__headers)
                self.puja_marathi = response_puja.json()[0]['result']['text']
                print(self.puja_marathi)
                self.insert_table()


    def insert_table(self):

        conn = Main().getConnection()

        cux = conn.cursor()
        
        max_len = max((len(self.__Item_dict["English"])),(len(self.__Item_dict["Marathi"])),(len(self.__Item_dict["Hindi"])))
        print(max_len)

        for i in range(max_len):

            # print(self.__Item_dict["English"][i].strip())
            # print(self.__Item_dict["Marathi"][i].strip())
            # print(self.__Item_dict["Hindi"][i].strip())

            add_inventory = ("insert into Inventory values (%s,%s,%s,%s);")

            items = (self.__Item_dict["English"][i].strip(),self.__Item_dict["Marathi"][i].strip(),self.__Item_dict["Hindi"][i].strip(),self.puja_marathi)

            cux.execute(add_inventory,items)

        conn.commit()
        cux.close()
        conn.close()

       


if __name__ == '__main__':
    inv = Inventory()
    inv.createInventory();
    # inv.createInventory()