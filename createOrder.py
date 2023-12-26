from main import *
import codecs
import json
# -*- coding: utf-8 -*-

class Order:
    __conn = Main().getConnection()
    __orderList = {'puja_items':[]}
        
    def getPujalist(self):
        pujaList = []
        if self.__conn and self.__conn.is_connected():
            with self.__conn.cursor() as cursor:

                cursor.execute("SELECT distinct(Puja) as Puja FROM Inventory")
    
                for Puja in cursor:
                    pujaList.append(Puja[0])

            cursor.close()


        print(pujaList)

        return(pujaList)



    def getOrderPuja(self,puja,Language):
        if self.__conn and self.__conn.is_connected():
            with self.__conn.cursor() as cursor:

                # puja = puja.encode('utf-8').decode('utf-8')

                query = ("select {table} from Inventory where Puja = '{s}'".format(table = Language , s = puja))

                print(query)               
                cursor.execute(query)

                result = cursor.fetchall()

                for i in result:
                    self.__orderList['puja_items'].append(i[0])


                result = json.dumps(self.__orderList)

                print(result)

                cursor.close()
                
                

    # def createOrder(Item,Quatity):

# if __name__ == '__main__':
#     ord = Order()
#     # ord.getPujalist()
#     l = "कर्वा चाथ"
#     print(l)
#     # d = l[0].encode('utf-8')
#     # print(indic_tokenize.trivial_tokenize_indic(d))

#     # print(str(l[0],'utf-8'))
#     ord.getOrderPuja(l,'Marathi')